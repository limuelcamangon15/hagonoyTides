import { useEffect, useRef, useState } from "react";
import Tide from "../Tide/Tide";
import "./tide-container.css";
import "../../index.css";
import Skeleton from "../ui/Skeleton";
import TideContainerSkeleton from "./TideContainerSkeleton";

function TideContainer() {
  const [data, setData] = useState({});
  const [dateIndex, setDateIndex] = useState(new Date().getMonth());
  const [tides, setTides] = useState([]);
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

  async function fetchTides() {
    setIsLoading(true);

    try {
      const res = await fetch(
        "https://hagonoytides-backend-1.onrender.com/tide/get/byYear?year=2026"
      );

      const data = await res.json();

      console.log(
        data.monthlyTides[dateIndex].month + " TODAY IS: " + months[monthToday]
      );
      console.log(months[monthToday] == data.monthlyTides[dateIndex].month);
      console.log(data.monthlyTides[dateIndex].dailyTides);

      console.log(dateIndex);
      setTides(data.monthlyTides[dateIndex].dailyTides);
      setData(data);

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
      {/* Months Container Button */}

      {isLoading ? (
        <div className="flex flex-row flex-wrap items-center justify-center w-full gap-1 md:gap-3">
          <div className="animate-pulse bg-gray-500/80 rounded-md w-6 h-6"></div>
          <div className="animate-pulse bg-gray-500/80 rounded-md w-6 h-6"></div>
          <div className="animate-pulse bg-gray-500/80 rounded-md w-6 h-6"></div>
          <div className="animate-pulse bg-gray-500/80 rounded-md w-6 h-6"></div>
          <div className="animate-pulse bg-gray-500/80 rounded-md w-6 h-6"></div>
          <div className="animate-pulse bg-gray-500/80 rounded-md w-6 h-6"></div>
          <div className="animate-pulse bg-gray-500/80 rounded-md w-6 h-6"></div>
          <div className="animate-pulse bg-gray-500/80 rounded-md w-6 h-6"></div>
          <div className="animate-pulse bg-gray-500/80 rounded-md w-6 h-6"></div>
          <div className="animate-pulse bg-gray-500/80 rounded-md w-6 h-6"></div>
          <div className="animate-pulse bg-gray-500/80 rounded-md w-6 h-6"></div>
          <div className="animate-pulse bg-gray-500/80 rounded-md w-6 h-6"></div>
        </div>
      ) : (
        <div className="flex flex-row flex-wrap items-center justify-center w-full gap-1 md:gap-3">
          {monthButtonData.map((monthData, key) => (
            <button
              key={key}
              className={`cursor-pointer border month-btn-shadow hover:border-white/50 ${
                dateIndex == monthData.monthValue
                  ? `bg-[#0E2DA6]/30 border-white text-white font-semibold month-btn-shadow-active`
                  : `bg-white/30 border-transparent text-white/70 font-normal`
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
            <div className="flex flex-row px-5 animate-pulse rounded-3xl max-w-full h-full gap-5 overflow-auto overflow-y-hidden">
              <TideContainerSkeleton />
              <TideContainerSkeleton />
              <TideContainerSkeleton />
              <TideContainerSkeleton />
              <TideContainerSkeleton />
              <TideContainerSkeleton />
              <TideContainerSkeleton />
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
      </div>
    </>
  );
}

export default TideContainer;
