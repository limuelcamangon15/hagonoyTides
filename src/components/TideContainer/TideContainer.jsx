import { useEffect, useRef, useState } from "react";
import Tide from "../Tide/Tide";
import "./tide-container.css";

function TideContainer() {
  const [data, setData] = useState({});
  const [dateIndex, setDateIndex] = useState(new Date().getMonth());
  const [tides, setTides] = useState([]);
  const today = new Date().getDate();
  const todayIndex = tides.findIndex((tide) => tide.date == today);
  const tideRefs = useRef([]);
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

  useEffect(() => {
    fetch("https://bahagonoyapi.web.app/hagonoyTides.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.monthlyTide[dateIndex].month);
        setTides(data.monthlyTide[dateIndex].dailyTide);
        setData(data);
      });
  }, [dateIndex]);

  useEffect(() => {
    if (todayIndex !== -1 && tideRefs.current[todayIndex]) {
      tideRefs.current[todayIndex].scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  }, [tides]);

  return (
    <>
      <div className="flex flex-row flex-wrap items-center justify-center w-full gap-1 md:gap-3">
        {monthButtonData.map((monthData, key) => (
          <button
            key={key}
            className={`text-white cursor-pointer hover:border month-btn-shadow hover:border-white/50 font-semibold ${
              dateIndex == monthData.monthValue
                ? `bg-[#0E2DA6]/30 border-white`
                : `bg-white/30 border-transparent`
            } border  p-0.5 rounded-md transition duration-500`}
            onClick={() => setDateIndex(monthData.monthValue)}
          >
            {monthData.month}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-5 sm:h-60 md:h-1/4">
        <div className="flex items-center justify-between w-full px-5">
          <h1 className="text-xl font-semibold text-white">
            {(data.monthlyTide &&
              data.monthlyTide[dateIndex] &&
              data.monthlyTide[dateIndex].month) ||
              "Loading Tides..."}
          </h1>
          <h1 className="text-xl font-semibold text-white">{data.year}</h1>
        </div>

        <div className="flex flex-row w-full h-full gap-5 px-5 overflow-auto overflow-y-hidden">
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
      </div>
    </>
  );
}

export default TideContainer;
