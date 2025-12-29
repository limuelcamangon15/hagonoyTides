import "./tide.css";
import AuroraBackground from "../ui/AuroraBackground";
import TideDetailsContainer from "../TideDetailsContainer/TideDetailsContainer";

function Tide({ tide: { date, day, isoDate, tide }, dateIndex }) {
  const dateToday = new Date().getDate();
  const monthToday = new Date().getMonth();

  function convertTo12Hour(time24) {
    let [hour, minute] = time24.split(":").map(Number);
    const ampm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    return `${hour}:${minute.toString().padStart(2, "0")} ${ampm}`;
  }

  function isToday(tideDateIndex) {
    return dateToday == date && monthToday == tideDateIndex;
  }

  function isDatePast(tideDateIndex) {
    if (monthToday > tideDateIndex) return true;
    if (monthToday < tideDateIndex) return false;
    return dateToday > date;
  }

  return (
    <>
      <div
        className={`relative overflow-hidden flex flex-col min-w-[50%] h-full 
        ${
          isToday(dateIndex)
            ? "border-white"
            : "bg-[#D9D9D9]/30 border-white/30"
        }
        ${isDatePast(dateIndex) && "opacity-50"}
         border rounded-2xl custom-inner-shadow`}
      >
        {isToday(dateIndex) && (
          <AuroraBackground
            colorStops={["#1A0026", "#7C3AED", "#FF8A00"]}
            blend={2}
            amplitude={1.7}
            speed={3}
          />
        )}
        <div className="flex justify-between items-center w-full px-2 absolute top-1 ">
          <h1 className="text-white font-semibold text-sm">{day}</h1>
          <h1 className="text-white font-semibold text-sm">{date}</h1>
        </div>

        <div className="flex justify-center items-center mt-7 h-full w-full pb-2.5">
          <div className="flex flex-col items-center justify-center gap-1.5 h-full w-full mx-2">
            {tide.map((t, key) => (
              <TideDetailsContainer
                key={key}
                time={convertTo12Hour(t.time)}
                tideLevel={t.tideLevel.toFixed(1)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tide;
