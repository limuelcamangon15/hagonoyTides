import { motion } from "framer-motion";
import {
  WifiOff,
  Smartphone,
  Database,
  MapPin,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  Heart,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/bahagonoy-icon-white.png";

import "../../index.css";

function About() {
  const features = [
    {
      icon: WifiOff,
      title: "Works offline",
      description:
        "Previously loaded tide forecasts remain available even without a connection.",
    },
    {
      icon: Smartphone,
      title: "Installable PWA",
      description:
        "Add HagonoyTides to your home screen and use it like a lightweight app.",
    },
    {
      icon: Database,
      title: "Local caching",
      description:
        "Forecast data is cached on your device for fast, reliable access.",
    },
    {
      icon: Sparkles,
      title: "Tidy AI",
      description:
        "A simple assistant turns today's tide data into an easy summary.",
    },
    {
      icon: MessageCircle,
      title: "Community chat",
      description:
        "Anonymous, location-based updates from people around Hagonoy.",
    },
    {
      icon: ShieldCheck,
      title: "Privacy-minded",
      description:
        "No accounts or public profiles. Participation stays anonymous.",
    },
  ];

  return (
    <div className="min-h-dvh w-full overflow-x-hidden bg-[#050a16] text-white">
      <Navbar />

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-cyan-400/[0.045] blur-[110px]" />
        <div className="absolute right-[-15%] top-[25%] h-96 w-96 rounded-full bg-blue-500/[0.035] blur-[130px]" />
        <div className="absolute bottom-[-20%] left-[20%] h-96 w-96 rounded-full bg-emerald-400/[0.025] blur-[130px]" />
      </div>

      <main className="relative mx-auto w-full max-w-4xl px-4 pb-16 pt-24 sm:px-6">
        <motion.section
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-[20px] bg-cyan-400/[0.07]">
            <img
              src={logo}
              alt="HagonoyTides"
              className="h-10 w-10 object-contain"
            />
          </div>

          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Built for a local problem.
            <span className="block text-cyan-200">Made for the community.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/45 sm:text-base">
            HagonoyTides brings tide, weather, and community information into one
            calm, mobile-friendly place.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0b1425]/90 px-3 py-1.5 text-[10px] text-white/40 backdrop-blur-xl">
            <MapPin size={11} className="text-cyan-200/70" />
            Hagonoy, Bulacan
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="mt-12 grid gap-4 md:grid-cols-2"
        >
          <div className="rounded-[24px] bg-[#0b1425]/90 p-6 shadow-[0_12px_40px_-36px_rgba(0,0,0,0.8)] ring-1 ring-white/[0.04] backdrop-blur-2xl">
            <h2 className="text-xl font-semibold text-white">What it is</h2>
            <p className="mt-3 text-sm leading-6 text-white/50">
              A Progressive Web App for tide forecasts, weather, and anonymous
              community updates. It is designed for phones and keeps previously
              loaded tide data available offline.
            </p>
          </div>

          <div className="rounded-[24px] bg-[#0b1425]/90 p-6 shadow-[0_12px_40px_-36px_rgba(0,0,0,0.8)] ring-1 ring-white/[0.04] backdrop-blur-2xl">
            <h2 className="text-xl font-semibold text-white">Why it exists</h2>
            <p className="mt-3 text-sm leading-6 text-white/50">
              Tide information is often scattered across printed calendars and
              different sources. HagonoyTides puts the useful parts in one place
              and makes them easier to read.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="mt-10"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="rounded-[20px] bg-[#0b1425]/90 p-5 shadow-[0_10px_30px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/[0.04] transition-colors hover:bg-[#0d182b]"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/[0.06] text-cyan-200/80">
                    <Icon size={16} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-white/85">
                    {feature.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-white/40">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="mt-10 rounded-[24px] bg-[#0b1425]/90 p-6 shadow-[0_12px_40px_-36px_rgba(0,0,0,0.8)] ring-1 ring-white/[0.04] backdrop-blur-2xl"
        >
          <h2 className="text-xl font-semibold text-white">Built for weak signal</h2>
          <p className="mt-3 text-sm leading-6 text-white/50">
            The app caches its shell and previously loaded tide forecasts, so it
            stays useful when the connection is slow or unavailable. Weather and
            chat still need a live connection.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="mt-5 rounded-[22px] bg-amber-400/[0.04] p-5 ring-1 ring-amber-300/[0.08]"
        >
          <div className="flex gap-3">
            <ShieldCheck
              size={18}
              strokeWidth={1.7}
              className="mt-0.5 shrink-0 text-amber-300/70"
            />
            <div>
              <h2 className="text-sm font-semibold text-white/85">
                Tide information may not always be exact.
              </h2>
              <p className="mt-2 text-xs leading-5 text-white/40">
                HagonoyTides uses external data providers and does not operate its
                own tide station. Verify important conditions with official
                sources before safety-critical decisions.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="mt-12 rounded-[24px] bg-[#0b1425]/90 p-6 text-center shadow-[0_12px_40px_-36px_rgba(0,0,0,0.8)] ring-1 ring-white/[0.04] backdrop-blur-xl sm:p-8"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[15px] bg-cyan-400/[0.07]">
            <img
              src={logo}
              alt="HagonoyTides"
              className="h-7 w-7 object-contain"
            />
          </div>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">
            Made by someone from Hagonoy.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/45">
            Built independently by <span className="font-medium text-white/75">Limuel Camangon</span>,
            a web developer from Hagonoy, Bulacan.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <a
              href="https://limuelcamangon.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/[0.035] px-3 py-1.5 text-[9px] text-white/45 transition-colors hover:text-white/75"
            >
              Developer website
            </a>
            <span className="rounded-full bg-white/[0.035] px-3 py-1.5 text-[9px] text-white/45">
              Built independently
            </span>
          </div>
        </motion.section>
      </main>

      <div className="relative flex w-full justify-center">
        <Footer />
      </div>
    </div>
  );
}

export default About;
