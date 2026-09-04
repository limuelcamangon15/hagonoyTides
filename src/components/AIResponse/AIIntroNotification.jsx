import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X } from "lucide-react";

function AiIntroNotification() {
  const [show, setShow] = useState(true);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.97 }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full px-4"
        >
          <div className="mx-auto flex w-full max-w-4xl items-start gap-3 rounded-[22px] border border-white/[0.12] bg-white/[0.07] p-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
            {/* Tidy Icon */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] border border-emerald-300/10 bg-emerald-300/[0.08]">
              <Bot
                className="h-[18px] w-[18px] text-emerald-300/80"
                strokeWidth={1.8}
              />
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold tracking-[-0.01em] text-white">
                  Meet Tidy
                </h3>

                <span className="rounded-full bg-emerald-400/10 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-emerald-300/80">
                  AI
                </span>
              </div>

              <p className="mt-1 text-[11px] leading-5 text-white/50">
                Your HagonoyTides assistant for tide forecasts, flood alerts,
                and safety information. Tidy helps you stay informed when tides
                and flooding become a concern.
              </p>
            </div>

            {/* Close Button */}
            <motion.button
              type="button"
              onClick={() => setShow(false)}
              aria-label="Close Tidy introduction"
              whileTap={{ scale: 0.85 }}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white/30 transition-colors duration-200 hover:bg-white/10 hover:text-white/70"
            >
              <X className="h-4 w-4" strokeWidth={2} />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AiIntroNotification;
