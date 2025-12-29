import highTideIcon from "../../assets/high-tide-icon.png";
import lowTideIcon from "../../assets/low-tide-icon.png";

function TideDetailsContainer({ tideLevel, time }) {
  const HIGH_TIDE_INDICATOR = 3.0;

  function isHighTide() {
    return tideLevel >= HIGH_TIDE_INDICATOR;
  }

  return (
    <div
      className={`z-10 flex flex-row justify-between items-center text-sm tracking-wider gap-2 px-2 rounded-lg border border-white/30 w-full h-fit ${
        isHighTide() ? `bg-[#B30909]/80` : `bg-white/30`
      }`}
    >
      <p className="text-white">{tideLevel}</p>
      <img
        src={isHighTide() ? highTideIcon : lowTideIcon}
        alt="Tide Icon"
        className="w-6"
      />
      <p className="text-white">{time}</p>
    </div>
  );
}

export default TideDetailsContainer;
