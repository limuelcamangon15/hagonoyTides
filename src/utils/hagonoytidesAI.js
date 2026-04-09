import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true,
});

export async function callAI(monthToday, dateToday, tidesTodayMapped) {
  const timeNow = new Date().toLocaleTimeString();
  const location =
    "Hagonoy, Bulacan, Philippines the known municipality for hightide and floods";

  const prompt = `today is ${monthToday} ${dateToday} in ${location}, tides today: ${tidesTodayMapped} , recommend or give reminders based on these data (fishing is good when hightide), create just a concise and short response 300 characters only do not remention things i said to you) so the reader can easily grasp the content and also always compare time now ${timeNow} from tides time. to not mention beach`;

  console.log("PROMPT:::       ", prompt);
  const response = await client.responses.create({
    model: "openai/gpt-oss-20b",
    input: prompt,
  });

  return response.output_text;
}
