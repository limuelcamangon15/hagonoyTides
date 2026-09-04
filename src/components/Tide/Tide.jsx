import "./tide.css";
import { motion } from "framer-motion";
import { convertTo12Hour } from "../../utils/timeFormatter";
import AuroraBackground from "../ui/AuroraBackground";
import TideDetailsContainer from "../TideDetailsContainer/TideDetailsContainer";

function Tide({ tide: { date, day, isoDate, tides }, dateIndex }) {
  const today = new Date();
  const dateToday = today.getDate();
  const monthToday = today.getMonth();

  function isToday(tideDateIndex) {
    return dateToday === date && monthToday === tideDateIndex;
  }

  function isDatePast(tideDateIndex) {
    if (monthToday > tideDateIndex) return true;
    if (monthToday < tideDateIndex) return false;

    return dateToday > date;
  }

  const todayCard = isToday(dateIndex);
  const pastDate = isDatePast(dateIndex);
  const hasHighTide = tides.some((t) => t.tideLevel >= 3.0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.97 }}
      animate={{
        opacity: pastDate ? 0.48 : 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -2,
        scale: 1.01,
      }}
      className={`
        group
        relative
        flex
        h-full
        min-w-[50%]
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        backdrop-blur-2xl
        transition-colors
        duration-300

        ${
          todayCard
            ? "border-white/25 bg-white/[0.10] shadow-[0_8px_40px_rgba(0,0,0,0.16)]"
            : "border-white/[0.12] bg-white/[0.055] shadow-[0_6px_30px_rgba(0,0,0,0.10)]"
        }
      `}
    >
      {/* Glass highlight */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-20
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
        "
      />

      {/* Soft inner glow */}
      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          rounded-[24px]
          ring-1
          ring-inset
          ${todayCard ? "ring-white/[0.08]" : "ring-white/[0.04]"}
        `}
      />

      {/* Today's Aurora */}
      {todayCard && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {hasHighTide ? (
            <AuroraBackground
              colorStops={["#180026", "#7C3AED", "#FF8A00"]}
              blend={2}
              amplitude={1.7}
              speed={3}
            />
          ) : (
            <AuroraBackground
              colorStops={["#03251A", "#16A34A", "#A3E635"]}
              blend={2}
              amplitude={1.7}
              speed={3}
            />
          )}

          {/* Aurora overlay */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
        </motion.div>
      )}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.3 }}
        className="
          relative
          z-30
          flex
          w-full
          items-center
          justify-between
          px-3.5
          pt-3
        "
      >
        <div className="flex items-center gap-2">
          {/* Day */}
          <span
            className={`
              text-[13px]
              font-semibold
              tracking-[-0.02em]
              ${todayCard ? "text-white" : "text-white/75"}
            `}
          >
            {day}
          </span>

          {/* Today indicator */}
          {todayCard && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="
                rounded-full
                border
                border-white/15
                bg-white/10
                px-1.5
                py-0.5
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white/80
                backdrop-blur-md
              "
            >
              Today
            </motion.span>
          )}
        </div>

        {/* Date */}
        <span
          className={`
            text-[13px]
            font-medium
            tabular-nums
            ${todayCard ? "text-white/90" : "text-white/45"}
          `}
        >
          {date}
        </span>
      </motion.div>

      {/* Divider */}
      <div
        className="
          relative
          z-30
          mx-3.5
          mt-2
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />

      {/* Tide details */}
      <div className="relative z-30 flex h-full w-full items-center justify-center px-2.5 pb-3 pt-3">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.07,
                delayChildren: 0.12,
              },
            },
          }}
          className="flex h-full w-full flex-col items-center justify-center gap-1.5"
        >
          {tides.map((t, key) => (
            <motion.div
              key={`${isoDate}-${key}`}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 7,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="w-full"
            >
              <TideDetailsContainer
                time={convertTo12Hour(t.time)}
                tideLevel={t.tideLevel.toFixed(1)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom glass glow */}
      <div
        className={`
          pointer-events-none
          absolute
          -bottom-12
          left-1/2
          h-24
          w-32
          -translate-x-1/2
          rounded-full
          blur-3xl
          ${
            todayCard
              ? hasHighTide
                ? "bg-purple-500/10"
                : "bg-emerald-400/10"
              : "bg-white/5"
          }
        `}
      />
    </motion.div>
  );
}

export default Tide;
