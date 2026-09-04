import { BotIcon } from "lucide-react";
import { motion } from "framer-motion";

function AIResponseContainer({ content }) {
  return (
    <motion.div
      className="m-3 flex flex-col gap-2"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Tidy Header */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2.5">
          {/* Avatar */}
          <motion.div
            className="
              flex h-8 w-8 items-center justify-center rounded-[11px]
              border border-emerald-300/25
              bg-emerald-400/15
              shadow-[0_0_16px_rgba(16,185,129,0.12)]
            "
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            <BotIcon size={17} strokeWidth={1.8} className="text-emerald-300" />
          </motion.div>

          {/* Name + Status */}
          <div className="flex flex-col">
            <p className="text-xs font-semibold tracking-[-0.01em] text-emerald-50">
              Tidy
            </p>

            <div className="mt-0.5 flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[10px] text-emerald-200/50">Online</span>
            </div>
          </div>
        </div>

        {/* AI Label */}
        <span
          className="
            rounded-full
            border border-emerald-300/20
            bg-emerald-400/10
            px-2 py-1
            text-[9px]
            font-medium
            uppercase
            tracking-[0.12em]
            text-emerald-300/60
          "
        >
          AI
        </span>
      </div>

      {/* Response Bubble */}
      <motion.div
        className={`
          ${!content ? "animate-pulse" : ""}
          relative
          overflow-hidden
          rounded-[18px]
          rounded-tl-[5px]
          border
          border-emerald-300/20
          bg-gradient-to-br
          from-emerald-400/[0.18]
          via-emerald-500/[0.09]
          to-emerald-950/[0.12]
          px-3.5
          py-3
          text-sm
          leading-6
          text-emerald-50/90
          shadow-[0_8px_30px_rgba(16,185,129,0.10)]
          backdrop-blur-xl
        `}
        initial={{ opacity: 0, y: 6, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.1,
          ease: "easeOut",
        }}
      >
        {/* Green accent */}
        <div
          className="
            pointer-events-none
            absolute inset-y-0 left-0 w-[2px]
            bg-gradient-to-b
            from-emerald-300
            via-emerald-400/50
            to-transparent
            shadow-[0_0_8px_rgba(52,211,153,0.35)]
          "
        />

        {content ? (
          <div className="whitespace-pre-wrap break-words">{content}</div>
        ) : (
          <div className="flex w-full items-center gap-2 text-emerald-100/50">
            <span className="min-w-0 text-[11px] leading-5">
              Hey, give me a moment — I'm analyzing today's tides
            </span>

            <div className="flex shrink-0 items-center gap-1">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-300/70 [animation-delay:0ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-300/70 [animation-delay:150ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-300/70 [animation-delay:300ms]" />
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default AIResponseContainer;
