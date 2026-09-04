import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  baseURL: "https:api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true,
});
localStorage.removeItem("hagonoy_tides_ai_cache");

const CACHE_KEY = "hagonoy_tides_ai_cache";
const CACHE_TIME = 30 * 60 * 1000;
30; // minutes

// Prevent duplicate requests from the same page
let pendingRequest = null;

// Convert "2:30 PM" into minutes since midnight.

function timeToMinutes(time) {
  const match = time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);

  if (!match) return null;

  let hours = Number(match[1]);
  const minutes = Number(match[2]);
  const period = match[3].toUpperCase();

  if (period === "AM" && hours === 12) hours = 0;
  if (period === "PM" && hours !== 12) hours += 12;

  return hours * 60 + minutes;
}

/**
 * Get current time in minutes.
 */
function getCurrentMinutes() {
  const now = new Date();

  return now.getHours() * 60 + now.getMinutes();
}

/**
 * Parse:
 *
 * "2:30 PM - High (5.2 ft), 8:45 PM - Low (1.1 ft)"
 */
function parseTides(tidesTodayMapped) {
  const regex =
    /(\d{1,2}:\d{2}\s*(?:AM|PM))\s*-\s*(High|Low)\s*\(([\d.]+)\s*ft\)/gi;

  const tides = [];
  let match;

  while ((match = regex.exec(String(tidesTodayMapped))) !== null) {
    tides.push({
      time: match[1],
      type: match[2],
      level: Number(match[3]),
      minutes: timeToMinutes(match[1]),
    });
  }

  return tides;
}

/**
 * Create a useful explanation without AI.
 * This costs ZERO API tokens.
 */
function localTideExplanation(tidesTodayMapped) {
  const tides = parseTides(tidesTodayMapped);

  if (!tides.length) {
    return "🌊 Check the tide times above to understand today's water-level changes and plan activities safely.";
  }

  const now = getCurrentMinutes();

  // Find the next tide today
  const nextTide = tides.find((tide) => tide.minutes > now);

  // Find the most recent tide
  const previousTides = tides.filter((tide) => tide.minutes <= now);
  const previousTide =
    previousTides.length > 0 ? previousTides[previousTides.length - 1] : null;

  // NEXT TIDE

  if (nextTide) {
    const diff = nextTide.minutes - now;

    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;

    let timeUntil = "";

    if (hours > 0) {
      timeUntil = `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    } else {
      timeUntil = `${minutes}m`;
    }

    if (nextTide.type.toLowerCase() === "high") {
      return `🌊 High tide at ${nextTide.time} (${nextTide.level.toFixed(
        1
      )} ft), about ${timeUntil} away. Fishing may be more favorable near high tide. Stay alert for rising water.`;
    }

    return `🌊 Low tide at ${nextTide.time} (${nextTide.level.toFixed(
      1
    )} ft), about ${timeUntil} away. Water levels are falling; check the next high tide when planning fishing.`;
  }

  // NO MORE TIDES TODAY

  if (previousTide) {
    if (previousTide.type.toLowerCase() === "high") {
      return `🌊 High tide was at ${
        previousTide.time
      } (${previousTide.level.toFixed(
        1
      )} ft). Water levels may now be falling. Check the remaining tide times above and stay safe.`;
    }

    return `🌊 The latest tide was low tide at ${
      previousTide.time
    } (${previousTide.level.toFixed(
      1
    )} ft). Check tomorrow's tides when planning ahead.`;
  }

  return "🌊 Check the tide times above to plan fishing and activities safely.";
}

/**
 * Main AI function.
 *
 * ALWAYS RETURNS A STRING.
 */
export async function callAI(monthToday, dateToday, tidesTodayMapped) {
  // OFFLINE

  if (!navigator.onLine) {
    return "You're offline 😊 You can check the tide data above for now. When you're back online, I’ll help you analyze it and give useful insights. Stay safe, especially in flood-prone areas.";
  }

  // CACHE KEY
  const dataKey = `${monthToday}|${dateToday}|${tidesTodayMapped}`;

  // CHECK CACHE
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");

    if (
      cached &&
      cached.key === dataKey &&
      cached.message &&
      Date.now() - cached.timestamp < CACHE_TIME
    ) {
      return cached.message;
    }
  } catch (err) {
    console.warn("AI cache read failed:", err);
  }

  // PREVENT DUPLICATE REQUESTS
  if (pendingRequest) {
    return pendingRequest;
  }

  const now = new Date().toLocaleTimeString();

  // VERY COMPACT PROMPT
  const prompt =
    `Hagonoy Bulacan | ${monthToday} ${dateToday} | Now:${now} | ` +
    `Tides:${tidesTodayMapped}. ` +
    `Explain today's tides simply. Compare now with tide times. ` +
    `High tide may favor fishing; mention flood safety when relevant. ` +
    `No beach. Max 200 chars.`;

  // AI REQUEST
  pendingRequest = (async () => {
    try {
      const response = await client.responses.create({
        model: "openai/gpt-oss-20b",
        input: prompt,
        max_output_tokens: 50,
        temperature: 0.2,
      });

      const message = response.output_text?.trim();

      if (message) {
        // Cache successful response
        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({
              key: dataKey,
              timestamp: Date.now(),
              message,
            })
          );
        } catch (err) {
          console.warn("AI cache write failed:", err);
        }

        return message;
      }

      // AI returned nothing → local explanation
      return localTideExplanation(tidesTodayMapped);
    } catch (err) {
      console.warn("AI request failed:", err);

      // Actually interpret the tide data locally.
      return localTideExplanation(tidesTodayMapped);
    } finally {
      pendingRequest = null;
    }
  })();

  return pendingRequest;
}
