import { motion } from "framer-motion";
import Skeleton from "../ui/Skeleton";

function TideContainerSkeleton({ countOfSkeletons }) {
  const skeletonsArray = new Array(countOfSkeletons).fill(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        group
        relative
        flex
        w-36
        min-w-[140px]
        max-w-[160px]
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        border-white/[0.12]
        bg-white/[0.055]
        shadow-[0_6px_30px_rgba(0,0,0,0.10)]
        backdrop-blur-2xl
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
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[24px]
          ring-1
          ring-inset
          ring-white/[0.04]
        "
      />

      {/* Header Skeleton */}
      <div
        className="
          relative
          z-30
          flex
          w-full
          items-center
          justify-between
          px-3.5
          pt-2.5
        "
      >
        <div className="flex items-center gap-2">
          {/* Day Skeleton */}
          <div className="relative overflow-hidden rounded-md">
            <Skeleton className="w-8 h-3 bg-white/10" />
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          </div>
        </div>

        {/* Date Skeleton */}
        <div className="relative overflow-hidden rounded-md">
          <Skeleton className="w-5 h-3 bg-white/10" />
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </div>
      </div>

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

      {/* Tide details Skeleton */}
      <div className="relative z-30 flex w-full items-center justify-center px-2.5 py-2.5">
        <div className="flex w-full flex-col items-center justify-center gap-1.5">
          {skeletonsArray.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.07 + 0.12,
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden w-full h-7 rounded-xl bg-white/[0.04] border border-white/[0.04] px-2.5 flex items-center justify-between"
            >
              <Skeleton className="w-10 h-2.5 bg-white/10 rounded" />
              <Skeleton className="w-5 h-2.5 bg-white/10 rounded" />

              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.4,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom glass glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-12
          left-1/2
          h-24
          w-32
          -translate-x-1/2
          rounded-full
          blur-3xl
          bg-white/5
        "
      />
    </motion.div>
  );
}

export default TideContainerSkeleton;
