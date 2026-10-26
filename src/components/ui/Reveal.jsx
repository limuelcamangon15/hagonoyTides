import { motion } from "framer-motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 14,
  blur = 6,
  amount = 0.16,
  once = false,
  duration = 0.6,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount, margin: "0px 0px -60px 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
