import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Tide from "../Tide/Tide";
import "./tide-container.css";
import "../../index.css";
import { callAI } from "../../utils/hagonoytidesAI";
import localforage from "localforage";
import Skeleton from "../ui/Skeleton";
import TideContainerSkeleton from "./TideContainerSkeleton";
import { convertTo12Hour } from "../../utils/timeFormatter";
import AIResponseContainer from "../AIResponse/AIResponseContainer";
import AiIntroNotification from "../AIResponse/AiIntroNotification";

function TideContainer() {
  const storage = localforage.createInstance({
    name: "hagonoytidesCacheStorage",
    storeName: "yearlyAPIResponse",
  });

  const [data, setData] = useState({});
  const [dateIndex, setDateIndex] = useState(new Date().getMonth());
  const [tides, setTides] = useState([]);
  const [aiResponse, setAiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const today = new Date().getDate();
  const monthToday = new Date().getMonth();
  const todayIndex = tides.findIndex((tide) => tide.date == today);
  const tideRefs = useRef([]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthButtonData = [
    { month: "Jan", monthValue: 0 },
    { month: "Feb", monthValue: 1 },
    { month: "Mar", monthValue: 2 },
    { month: "Apr", monthValue: 3 },
    { month: "May", monthValue: 4 },
    { month: "Jun", monthValue: 5 },
    { month: "Jul", monthValue: 6 },
    { month: "Aug", monthValue: 7 },
    { month: "Sep", monthValue: 8 },
    { month: "Oct", monthValue: 9 },
    { month: "Nov", monthValue: 10 },
    { month: "Dec", monthValue: 11 },
  ];

  async function cacheData(key, value) {
    try {
      await storage.setItem(key, value);
    } catch (error) {
      console.log("Error saving data to the localforage", error);
    }
  }

  async function getCachedData(key) {
    try {
      const cache = await storage.getItem(key);

      if (cache) {
        console.log("Data loaded from cache");
        return cache;
      }

      return null;
    } catch (error) {
      console.log("Error loading data to the localforage", error);
    }
  }

  function mapAndFormatTodaysTides(tideData) {
    return tideData.monthlyTides[dateIndex].dailyTides[today - 1].tides
      .map(
        (t) =>
          `${convertTo12Hour(t.time)} - ${t.type} (${t.tideLevel.toFixed(
            1
          )} ft)}`
      )
      .join(", ");
  }

  async function fetchTides() {
    setIsLoading(true);

    try {
      const cache = await getCachedData("fullAPIResponse");

      if (cache) {
        const monthToday = cache.monthlyTides[dateIndex].month;
        const tidesTodayMapped = mapAndFormatTodaysTides(cache);

        setData(cache);
        setAiResponse(callAI(monthToday, today, tidesTodayMapped));

        setTides(cache.monthlyTides[dateIndex].dailyTides);
        setIsLoading(false);

        return;
      }

      const res = await fetch(
        "https://hagonoytides-backend-1.onrender.com/tide/get/byYear?year=2026"
      );

      const data = await res.json();

      await cacheData("fullAPIResponse", data);

      console.log(
        data.monthlyTides[dateIndex].month + " TODAY IS: " + months[monthToday]
      );
      console.log(months[monthToday] == data.monthlyTides[dateIndex].month);
      console.log(data.monthlyTides[dateIndex].dailyTides);
      console.log(dateIndex);

      const monthTodayNotCached = data.monthlyTides[dateIndex].month;
      const tidesTodayMappedNotCached = mapAndFormatTodaysTides(data);

      setData(data);
      setAiResponse(
        callAI(monthTodayNotCached, today, tidesTodayMappedNotCached)
      );
      setTides(data.monthlyTides[dateIndex].dailyTides);
      setIsLoading(false);
    } catch (error) {
      console.log("Error Fetching Tide Data: ", error);
      setIsLoading(true);
    }
  }

  useEffect(() => {
    fetchTides();
  }, [dateIndex]);

  useEffect(() => {
    if (todayIndex !== -1 && tideRefs.current[todayIndex]) {
      tideRefs.current[
        months[monthToday] == data.monthlyTides[dateIndex].month
          ? todayIndex
          : 0
      ].scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  }, [tides]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="w-full overflow-hidden"
    >
      {/* AI Intro */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <AiIntroNotification />
      </motion.div>

      {/* Month Selector */}
      <div className="mt-4 mb-6 px-3 sm:px-5">
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 px-1">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Select month
            </span>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080d0b]/80 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
            <div className="flex gap-1 justify-center overflow-x-auto scrollbar-none">
              {isLoading
                ? monthButtonData.map((_, key) => (
                    <div
                      key={key}
                      className="h-8 w-12 shrink-0 animate-pulse rounded-xl bg-white/[0.06]"
                    />
                  ))
                : monthButtonData.map((monthData) => {
                    const active = dateIndex === monthData.monthValue;

                    return (
                      <motion.button
                        key={monthData.monthValue}
                        onClick={() => setDateIndex(monthData.monthValue)}
                        whileTap={{ scale: 0.95 }}
                        className={`relative h-8 min-w-[48px] shrink-0 rounded-xl text-[11px] font-semibold transition-colors ${
                          active
                            ? "text-white"
                            : "text-white/40 hover:bg-white/[0.06] hover:text-white/80"
                        }`}
                      >
                        {active && (
                          <motion.div
                            layoutId="activeMonth"
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 35,
                            }}
                            className="absolute inset-0 rounded-xl border border-emerald-300/30 bg-emerald-500/25 shadow-[0_0_20px_rgba(16,185,129,0.18)]"
                          />
                        )}

                        <span className="relative z-10">{monthData.month}</span>
                      </motion.button>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Tides */}
      <div className="flex flex-col gap-4 sm:gap-5">
        {/* Month Header */}
        <motion.div
          layout
          className="flex items-end justify-between px-5 sm:px-6"
        >
          <div>
            <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-400/70">
              Tide Forecast
            </p>

            {isLoading ? (
              <Skeleton className="h-7 w-32" />
            ) : (
              <motion.h1
                key={dateIndex}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="text-xl font-bold tracking-tight text-white sm:text-2xl"
              >
                {months[dateIndex]}
              </motion.h1>
            )}
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs font-semibold tabular-nums text-white/60">
            {isLoading ? <Skeleton className="h-4 w-10" /> : data.year}
          </div>
        </motion.div>

        {/* Daily Tides */}
        {isLoading ? (
          <div className="flex h-60 max-w-full gap-4 overflow-x-auto overflow-y-hidden px-5 scrollbar-none sm:gap-5">
            <TideContainerSkeleton countOfSkeletons={2} />
            <TideContainerSkeleton countOfSkeletons={1} />
            <TideContainerSkeleton countOfSkeletons={4} />
            <TideContainerSkeleton countOfSkeletons={3} />
            <TideContainerSkeleton countOfSkeletons={2} />
            <TideContainerSkeleton countOfSkeletons={2} />
            <TideContainerSkeleton countOfSkeletons={3} />
          </div>
        ) : (
          <motion.div
            key={`tides-${dateIndex}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex h-60 max-w-full gap-4 overflow-x-auto overflow-y-hidden px-5 scrollbar-none sm:gap-5"
          >
            <div className="flex w-full gap-4 sm:gap-5">
              {tides.map((tide, key) => (
                <motion.div
                  key={key}
                  ref={(el) => (tideRefs.current[key] = el)}
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: key * 0.035,
                    ease: "easeOut",
                  }}
                  className="min-h-fit min-w-fit"
                >
                  <Tide tide={tide} dateIndex={dateIndex} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* AI Response */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="px-1"
        >
          <AIResponseContainer content={aiResponse} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default TideContainer;
