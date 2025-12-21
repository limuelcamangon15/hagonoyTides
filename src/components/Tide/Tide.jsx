import "./tide.css";
import highTideIcon from "../../assets/high-tide-icon.png";
import lowTideIcon from "../../assets/low-tide-icon.png";

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

  return (
    <>
      <div
        className={`flex flex-col min-w-[50%] h-full ${
          isToday(dateIndex)
            ? `bg-[#0E2DA6]/30 border-white`
            : `bg-[#D9D9D9]/30 border-white/30`
        } border rounded-2xl custom-inner-shadow relative`}
      >
        <div className="flex justify-between items-center w-full px-2 absolute top-1 ">
          <h1 className="text-white font-semibold text-sm">{day}</h1>
          <h1 className="text-white font-semibold text-sm">{date}</h1>
        </div>

        <div className="flex justify-center items-center mt-7 h-full w-full pb-2.5">
          <div className="flex flex-col items-center justify-center gap-1.5 h-full w-full mx-2">
            {tide.map((t, key) => (
              <div
                key={key}
                className={`flex flex-row justify-between items-center text-sm tracking-wider gap-2 px-2 rounded-lg border border-white/30 w-full h-fit ${
                  t.tideLevel.toFixed(1) >= 3.0
                    ? `bg-[#B30909]/80`
                    : `bg-white/30`
                }`}
              >
                <p className="text-white">{t.tideLevel.toFixed(1)}</p>
                <img
                  src={
                    t.tideLevel.toFixed(1) >= 3.0 ? highTideIcon : lowTideIcon
                  }
                  alt="Tide Icon"
                  className="w-6"
                />
                <p className="text-white">{convertTo12Hour(t.time)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tide;
