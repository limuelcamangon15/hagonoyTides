import { useEffect, useRef, useState } from "react";
import Tide from "../Tide/Tide";
import "./tide-container.css";
import "../../index.css";
import { callAI } from "../../utils/hagonoytidesAI";
import localforage from "localforage";
import Skeleton from "../ui/Skeleton";
import TideContainerSkeleton from "./TideContainerSkeleton";
import { convertTo12Hour } from "../../utils/timeFormatter";
import AIResponseContainer from "../AIResponse/AIResponseContainer";
import AiIntroNotification from "../AIResponse/AIIntroNotification";

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
          `${convertTo12Hour(t.time)} - ${t.type}  (${t.tideLevel.toFixed(
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

        //set all cached data
        setData(cache);
        setAiResponse(callAI(monthToday, today, tidesTodayMapped));

        setTides(cache.monthlyTides[dateIndex].dailyTides);
        setIsLoading(false);

        return;
      }

      const res = await fetch(
        "https://hagonoytides-backend-1.onrender.com/tide/get/byYear?year=2026"
        //"https://hagonoytides-backend-production.up.railway.app/tide/get/byYear?year=2026"
      );

      const data = await res.json();

      await cacheData("fullAPIResponse", data);

      console.log(
        data.monthlyTides[dateIndex].month + " TODAY IS: " + months[monthToday]
      );
      console.log(months[monthToday] == data.monthlyTides[dateIndex].month);
      console.log(data.monthlyTides[dateIndex].dailyTides);

      console.log(dateIndex);

      //set all for non-cached
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
    //fetch("https://bahagonoyapi.web.app/hagonoyTides.json")
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
    <>
      {/* Tidy HagonoyTides AI  */}
      <AiIntroNotification />

      {/* Months Container Button */}

      {isLoading ? (
        <div className="flex flex-row flex-wrap items-center justify-center w-full gap-1 md:gap-3">
          {monthButtonData.map((_, key) => (
            <div
              key={key}
              className="animate-pulse bg-white/10 backdrop-blur-3xl border border-white/20 rounded-md w-6 h-6 shadow-2xl transition-all hover:scale-110 hover:shadow-3xl"
            ></div>
          ))}
        </div>
      ) : (
        <div className="flex flex-row flex-wrap items-center justify-center w-full gap-1 md:gap-3">
          {monthButtonData.map((monthData, key) => (
            <button
              key={key}
              className={`cursor-pointer border month-btn-shadow hover:border-white/50 ${
                dateIndex == monthData.monthValue
                  ? `bg-[#0E2DA6]/30 border-white text-white font-semibold month-btn-shadow-active`
                  : `bg-white/30 border-transparent text-white/70 font-light`
              } p-0.5 rounded-md transition duration-500`}
              onClick={() => setDateIndex(monthData.monthValue)}
            >
              {monthData.month}
            </button>
          ))}
        </div>
      )}

      {/* Monthly Tides Container */}
      <div className="flex flex-col gap-5 sm:h-60 md:h-1/4">
        {/* Month and Year Heading */}
        <div className="flex items-center justify-between w-full px-5">
          <h1 className="text-xl font-semibold text-white">
            {isLoading ? <Skeleton className="w-30 h-6" /> : months[dateIndex]}
          </h1>
          <h1 className="text-xl font-semibold text-white">
            {isLoading ? <Skeleton className="w-20 h-6" /> : data.year}
          </h1>
        </div>

        {/* Daily Tid(es */}
        {isLoading ? (
          <>
            <div className="flex flex-row px-5 animate-pulse max-w-full h-full gap-5 overflow-auto overflow-y-hidden">
              <TideContainerSkeleton countOfSkeletons={2} />
              <TideContainerSkeleton countOfSkeletons={1} />
              <TideContainerSkeleton countOfSkeletons={4} />
              <TideContainerSkeleton countOfSkeletons={3} />
              <TideContainerSkeleton countOfSkeletons={2} />
              <TideContainerSkeleton countOfSkeletons={2} />
              <TideContainerSkeleton countOfSkeletons={3} />
            </div>
          </>
        ) : (
          <div className="flex flex-row max-w-full h-full gap-5 px-5 overflow-auto overflow-y-hidden">
            <div className="flex flex-row w-full gap-5">
              {tides.map((tide, key) => (
                <div
                  key={key}
                  ref={(el) => (tideRefs.current[key] = el)}
                  className="min-w-fit min-h-fit"
                >
                  <Tide tide={tide} dateIndex={dateIndex} />
                </div>
              ))}
            </div>
          </div>
        )}

        <AIResponseContainer content={aiResponse} />
      </div>
    </>
  );
}

export default TideContainer;
