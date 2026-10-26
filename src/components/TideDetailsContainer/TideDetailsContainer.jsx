import { motion } from "framer-motion";
import highTideIcon from "../../assets/high-tide-icon.png";
import lowTideIcon from "../../assets/low-tide-icon.png";

function TideDetailsContainer({ tideLevel, time }) {
  const HIGH_TIDE_INDICATOR = 3.0;
  const isHighTide = Number(tideLevel) >= HIGH_TIDE_INDICATOR;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={`
        relative
        z-10
        flex
        w-full
        h-fit
        flex-row
        items-center
        justify-between
        gap-2
        rounded-lg
        px-2
        text-sm
        tracking-wider
        backdrop-blur-md
        transition-colors
        duration-200

        ${
          isHighTide
            ? `
              bg-red-400/[0.08]
              shadow-[0_4px_16px_rgba(239,68,68,0.06)]
            `
            : `
              bg-white/[0.035]
              shadow-[0_4px_16px_rgba(0,0,0,0.04)]
            `
        }
      `}
    >
      {/* Subtle left accent */}
      <span
        className={`
          absolute
          left-0
          top-1/2
          h-3/5
          w-[2px]
          -translate-y-1/2
          rounded-full
          ${isHighTide ? "bg-red-400/60" : "bg-emerald-300/45"}
        `}
      />

      {/* Tide Level */}
      <p
        className={`
          font-medium
          ${isHighTide ? "text-red-50" : "text-white/90"}
        `}
      >
        {tideLevel}
      </p>

      {/* Tide Icon */}
      <img
        src={isHighTide ? highTideIcon : lowTideIcon}
        alt={isHighTide ? "High tide" : "Low tide"}
        className="w-6 object-contain drop-shadow-sm"
      />

      {/* Time */}
      <p
        className={`
          ${isHighTide ? "text-white/80" : "text-white/70"}
        `}
      >
        {time}
      </p>
    </motion.div>
  );
}

export default TideDetailsContainer;
