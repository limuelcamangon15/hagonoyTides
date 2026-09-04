import { motion } from "framer-motion";
import {
  Waves,
  Sparkles,
  WifiOff,
  Smartphone,
  Database,
  MapPin,
  ShieldCheck,
  Download,
  Zap,
  Heart,
  CircleDollarSign,
  Search,
  Lightbulb,
  MessageCircle,
  Users,
  LockKeyhole,
  TriangleAlert,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/bahagonoy-icon-white.png";

import "../../index.css";

function About() {
  const features = [
    {
      icon: WifiOff,
      title: "Works Offline",
      description:
        "Previously loaded tide forecasts remain available even when your connection disappears.",
    },
    {
      icon: Smartphone,
      title: "Installable PWA",
      description:
        "Add HagonoyTides to your phone's home screen and use it like a lightweight native app.",
    },
    {
      icon: Database,
      title: "Local Caching",
      description:
        "Forecast data is cached on your device so returning to the app is fast and reliable.",
    },
    {
      icon: Sparkles,
      title: "Tidy AI",
      description:
        "A simple AI assistant turns tide information into an easier-to-understand daily summary.",
    },
  ];

  return (
    <div className="min-h-dvh w-full overflow-x-hidden bg-[#050a16] text-white">
      <Navbar />

      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-cyan-400/[0.045] blur-[110px]" />
        <div className="absolute right-[-15%] top-[25%] h-96 w-96 rounded-full bg-blue-500/[0.035] blur-[130px]" />
        <div className="absolute bottom-[-20%] left-[20%] h-96 w-96 rounded-full bg-emerald-400/[0.025] blur-[130px]" />
      </div>

      <main className="relative mx-auto w-full max-w-5xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        {/* ===================================================== */}
        {/* HERO */}
        {/* ===================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-[20px] border border-cyan-200/15 bg-cyan-200/[0.07] shadow-[0_0_35px_rgba(103,232,249,0.06)]"
          >
            <img
              src={logo}
              alt="HagonoyTides"
              className="h-10 w-10 object-contain"
            />
          </motion.div>

          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-100/55">
              HagonoyTides
            </span>
          </div>

          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Built for a local problem.
            <span className="block text-cyan-200">Made for the community.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/40 sm:text-base">
            HagonoyTides started with a simple question: why should finding out
            about the tides around Hagonoy be harder than it needs to be?
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0b1425]/90 px-3 py-1.5 shadow-[0_8px_25px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <MapPin size={11} className="text-cyan-200/70" />

            <span className="text-[10px] text-white/40">Hagonoy, Bulacan</span>
          </div>
        </motion.section>

        {/* ===================================================== */}
        {/* THE PROBLEM */}
        {/* ===================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="mt-14"
        >
          <div className="grid gap-4 md:grid-cols-[0.75fr_1.25fr]">
            <div className="rounded-[24px] border border-white/[0.09] bg-[#0b1425]/90 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-300/10 bg-red-400/[0.06]">
                <Search
                  size={18}
                  strokeWidth={1.7}
                  className="text-red-300/70"
                />
              </div>

              <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-red-300/60">
                The problem
              </p>

              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">
                Tide information shouldn't be difficult to find.
              </h2>
            </div>

            <div className="rounded-[24px] border border-white/[0.09] bg-[#0b1425]/90 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-6">
              <p className="text-sm leading-6 text-white/55">
                Hagonoy is a community closely connected to water. For
                fishermen, boat operators, families, and residents living around
                waterways, knowing the tide can be useful for planning the day.
              </p>

              <p className="mt-4 text-sm leading-6 text-white/55">
                But getting that information in a simple, local, mobile-friendly
                format isn't always straightforward. Tide information can be
                scattered across different sources, difficult to interpret, or
                inconvenient to access when internet connectivity is unreliable.
              </p>

              <p className="mt-4 text-sm leading-6 text-white/55">
                That gap became the reason to build something simpler: one place
                where people can quickly check tide information without having
                to dig through complicated sources.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ===================================================== */}
        {/* ORIGIN */}
        {/* ===================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="mt-10"
        >
          <div className="relative overflow-hidden rounded-[24px] border border-cyan-200/[0.12] bg-gradient-to-br from-cyan-300/[0.07] via-[#0b1425]/95 to-[#07101f]/95 p-5 shadow-[0_15px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:p-7">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-300/[0.05] blur-[90px]" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200/15 bg-cyan-200/[0.07]">
                  <Lightbulb
                    size={18}
                    strokeWidth={1.7}
                    className="text-cyan-200"
                  />
                </div>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-cyan-200/55">
                    Where it started
                  </p>

                  <h2 className="text-xl font-semibold text-white">
                    A small idea with a practical purpose.
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-5 text-sm leading-6 text-white/45 sm:grid-cols-2">
                <p>
                  HagonoyTides wasn't created as a large commercial project. It
                  started from a local perspective — noticing a useful piece of
                  information that could be made easier to access.
                </p>

                <p>
                  The goal was never to make tide forecasting complicated. The
                  goal was to take available information, present it clearly,
                  and make the experience work well on the devices people
                  already carry.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ===================================================== */}
        {/* FUNDING / DATA INFRASTRUCTURE */}
        {/* ===================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="mt-10"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {/* No funding */}
            <div className="rounded-[22px] border border-white/[0.09] bg-[#0b1425]/90 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-300/10 bg-amber-400/[0.05]">
                <CircleDollarSign
                  size={18}
                  strokeWidth={1.7}
                  className="text-amber-300/70"
                />
              </div>

              <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-amber-300/50">
                No funding
              </p>

              <h2 className="mt-1 text-lg font-semibold text-white">
                Built without a budget.
              </h2>

              <p className="mt-2 text-xs leading-5 text-white/35">
                HagonoyTides was built independently, without institutional
                funding or a dedicated project budget. It is a personal effort
                to solve a problem that felt worth solving.
              </p>
            </div>

            {/* Data infrastructure */}
            <div className="rounded-[22px] border border-white/[0.09] bg-[#0b1425]/90 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-300/10 bg-blue-400/[0.05]">
                <Database
                  size={18}
                  strokeWidth={1.7}
                  className="text-blue-300/70"
                />
              </div>

              <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-blue-300/50">
                Data infrastructure
              </p>

              <h2 className="mt-1 text-lg font-semibold text-white">
                Open data, centralized for Hagonoy.
              </h2>

              <p className="mt-2 text-xs leading-5 text-white/35">
                HagonoyTides integrates tide information from several
                open-source APIs and processes those sources through a
                centralized backend, database, and API built for the project.
                This provides one consistent place to organize, process, cache,
                and deliver the available tide information.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ===================================================== */}
        {/* ACCURACY DISCLAIMER */}
        {/* ===================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="mt-5"
        >
          <div className="rounded-[22px] border border-amber-300/[0.10] bg-amber-400/[0.035] p-5 shadow-[0_10px_35px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-300/10 bg-amber-400/[0.06]">
                <TriangleAlert
                  size={17}
                  strokeWidth={1.7}
                  className="text-amber-300/70"
                />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-amber-300/60">
                  Important
                </p>

                <h2 className="mt-1 text-sm font-semibold text-white/85">
                  Tide information may not always be perfectly accurate.
                </h2>

                <p className="mt-2 text-xs leading-5 text-white/40">
                  HagonoyTides does not operate a dedicated tide observation
                  station and does not have a single authoritative source that
                  guarantees the accuracy of every tide value shown. The
                  application relies on data obtained from external open-source
                  APIs, which are integrated and processed through the project's
                  own backend.
                </p>

                <p className="mt-2 text-xs leading-5 text-white/35">
                  Tide conditions can also be affected by weather, wind,
                  atmospheric pressure, local waterways, and other environmental
                  factors. For activities where inaccurate tide information
                  could create a safety risk, users should verify conditions
                  with appropriate official or local sources before making
                  decisions.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ===================================================== */}
        {/* SOLUTION */}
        {/* ===================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="mt-12"
        >
          <div className="text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-200/60">
              The solution
            </p>

            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Make useful information feel effortless.
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-white/35 sm:text-sm">
              Instead of adding complexity, HagonoyTides focuses on a
              straightforward experience built around the way people actually
              use their phones.
            </p>
          </div>

          {/* Offline */}
          <div className="relative mt-7 overflow-hidden rounded-[24px] border border-emerald-300/[0.12] bg-gradient-to-br from-emerald-400/[0.06] via-[#0b1425]/95 to-[#07101f]/95 p-5 shadow-[0_15px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-7">
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-emerald-400/[0.05] blur-[80px]" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-400/[0.07]">
                    <WifiOff
                      size={17}
                      strokeWidth={1.8}
                      className="text-emerald-300"
                    />
                  </div>

                  <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-emerald-300/80">
                    Offline Ready
                  </span>
                </div>

                <h2 className="text-xl font-semibold tracking-tight text-white">
                  Your tides stay with you.
                </h2>

                <p className="mt-2 text-xs leading-5 text-white/45 sm:text-sm">
                  Once tide data has been loaded, it can be cached locally on
                  your device. That means you can still check previously loaded
                  forecasts when your connection is unavailable.
                </p>
              </div>

              <div className="shrink-0 rounded-2xl border border-white/[0.08] bg-black/25 p-4">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10">
                    <WifiOff size={18} className="text-emerald-300/80" />

                    <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white/80">
                      Offline Mode
                    </p>

                    <p className="mt-0.5 text-[9px] text-emerald-300/60">
                      Previously loaded data
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ===================================================== */}
        {/* PWA */}
        {/* ===================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="mt-10"
        >
          <div className="grid gap-3 sm:grid-cols-[1.3fr_0.7fr]">
            <div className="relative overflow-hidden rounded-[24px] border border-white/[0.09] bg-[#0b1425]/90 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-6">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-300/[0.035] blur-[60px]" />

              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200/10 bg-cyan-200/[0.05]">
                  <Download
                    size={18}
                    strokeWidth={1.7}
                    className="text-cyan-200/80"
                  />
                </div>

                <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-200/55">
                  Progressive Web App
                </p>

                <h2 className="mt-1 text-xl font-semibold tracking-tight text-white">
                  Take HagonoyTides with you.
                </h2>

                <p className="mt-2 max-w-lg text-xs leading-5 text-white/40 sm:text-sm">
                  HagonoyTides can be installed directly from your browser. Add
                  it to your home screen and launch it whenever you need it —
                  without downloading a traditional app.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[9px] text-white/40">
                    No App Store required
                  </span>

                  <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[9px] text-white/40">
                    Home screen ready
                  </span>

                  <span className="rounded-full border border-emerald-300/10 bg-emerald-400/[0.04] px-3 py-1.5 text-[9px] text-emerald-300/50">
                    Offline capable
                  </span>
                </div>
              </div>
            </div>

            {/* Floating phone */}
            <div className="relative flex min-h-[210px] items-center justify-center overflow-hidden rounded-[24px] border border-white/[0.09] bg-[#08101e]/95 backdrop-blur-xl">
              <div className="absolute h-32 w-32 rounded-full bg-cyan-300/[0.05] blur-[55px]" />

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex h-28 w-24 flex-col items-center justify-center rounded-[20px] border border-white/10 bg-white/[0.045] shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
              >
                <img
                  src={logo}
                  alt="HagonoyTides"
                  className="h-10 w-10 object-contain"
                />

                <span className="mt-2 text-[8px] font-semibold text-white/60">
                  HagonoyTides
                </span>

                <div className="mt-3 h-1 w-8 rounded-full bg-cyan-200/25" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ===================================================== */}
        {/* CROWDSOURCED DATA / CHAT */}
        {/* ===================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="mt-12"
        >
          <div className="relative overflow-hidden rounded-[24px] border border-cyan-200/[0.12] bg-gradient-to-br from-cyan-300/[0.055] via-[#0b1425]/95 to-[#07101f]/95 p-5 shadow-[0_15px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-7">
            <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-cyan-300/[0.045] blur-[80px]" />

            <div className="relative">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-cyan-200/15 bg-cyan-200/[0.07]">
                  <MessageCircle
                    size={19}
                    strokeWidth={1.7}
                    className="text-cyan-200"
                  />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-200/55">
                      The bigger idea
                    </p>

                    <span className="rounded-full border border-cyan-200/10 bg-cyan-200/[0.05] px-2 py-0.5 text-[7px] font-bold uppercase tracking-wider text-cyan-200/60">
                      Community
                    </span>
                  </div>

                  <h2 className="mt-1 text-xl font-semibold tracking-tight text-white">
                    Turn the community into another source of information.
                  </h2>

                  <p className="mt-3 max-w-2xl text-xs leading-5 text-white/40 sm:text-sm">
                    The general chat is designed with a bigger purpose in mind:
                    creating a place where people around Hagonoy can share
                    real-time, location-relevant observations and information
                    with one another.
                  </p>

                  <p className="mt-3 max-w-2xl text-xs leading-5 text-white/40 sm:text-sm">
                    When multiple people share what they are seeing around their
                    area, those observations can become useful crowdsourced
                    context alongside the available tide information.
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[18px] border border-white/[0.07] bg-black/20 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-200/[0.06]">
                      <Users
                        size={16}
                        className="text-cyan-200/80"
                        strokeWidth={1.7}
                      />
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold text-white/75">
                        Real-time community context
                      </h3>

                      <p className="mt-0.5 text-[9px] text-white/30">
                        Information from people on the ground
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-[11px] leading-5 text-white/30">
                    Local observations can provide context that a static
                    forecast cannot always communicate.
                  </p>
                </div>

                <div className="rounded-[18px] border border-white/[0.07] bg-black/20 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/[0.06]">
                      <LockKeyhole
                        size={16}
                        className="text-emerald-300/80"
                        strokeWidth={1.7}
                      />
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold text-white/75">
                        Fully anonymous
                      </h3>

                      <p className="mt-0.5 text-[9px] text-white/30">
                        No public identity required
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-[11px] leading-5 text-white/30">
                    Users can participate without exposing a personal profile or
                    real-world identity.
                  </p>
                </div>
              </div>

              <div className="mt-3 rounded-[18px] border border-amber-300/[0.08] bg-amber-400/[0.025] p-4">
                <div className="flex gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-amber-300/60"
                    strokeWidth={1.7}
                  />

                  <div>
                    <h3 className="text-xs font-semibold text-white/70">
                      Location-based identifier
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-white/30">
                      The system uses a location-based identifier to associate
                      conversations with an area and help reduce misleading or
                      misplaced details. It is not intended to reveal a user's
                      personal identity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ===================================================== */}
        {/* TIDY AI */}
        {/* ===================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="mt-10"
        >
          <div className="relative overflow-hidden rounded-[24px] border border-cyan-200/[0.10] bg-[#0b1425]/90 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-6">
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-300/[0.04] blur-[70px]" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-cyan-200/15 bg-cyan-200/[0.07]">
                <Sparkles
                  size={19}
                  strokeWidth={1.7}
                  className="text-cyan-200"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold text-white">Tidy AI</h2>

                  <span className="rounded-full bg-cyan-200/[0.07] px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wider text-cyan-200/60">
                    AI
                  </span>
                </div>

                <p className="mt-1.5 max-w-2xl text-xs leading-5 text-white/40 sm:text-sm">
                  Tidy turns today's tide information into a short,
                  understandable summary, helping users spend less time
                  interpreting numbers and more time getting the information
                  they need.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ===================================================== */}
        {/* FEATURES */}
        {/* ===================================================== */}

        <section className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-200/55">
              What came from the idea
            </p>

            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">
              Simple things that matter.
            </h2>
          </motion.div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                  whileHover={{ y: -2 }}
                  className="rounded-[20px] border border-white/[0.08] bg-[#0b1425]/90 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-colors hover:border-cyan-200/10 hover:bg-[#0d182b]"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-200/10 bg-cyan-200/[0.05]">
                    <Icon
                      size={16}
                      strokeWidth={1.7}
                      className="text-cyan-200/80"
                    />
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-white/85">
                    {feature.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-white/35">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ===================================================== */}
        {/* DEVELOPER */}
        {/* ===================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="mt-14"
        >
          <div className="relative overflow-hidden rounded-[24px] border border-white/[0.09] bg-[#0b1425]/90 p-6 text-center shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8">
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-300/[0.04] blur-[70px]" />

            <div className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[15px] border border-cyan-200/15 bg-cyan-200/[0.07]">
                <img
                  src={logo}
                  alt="HagonoyTides"
                  className="h-7 w-7 object-contain"
                />
              </div>

              <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-200/55">
                Built locally
              </p>

              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">
                Made by someone from Hagonoy.
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-white/40 sm:text-sm">
                HagonoyTides was developed by{" "}
                <span className="font-medium text-white/70">
                  Limuel Camangon
                </span>
                , a web developer and resident of Hagonoy, Bulacan.
              </p>

              <p className="mx-auto mt-4 max-w-xl text-xs leading-5 text-white/30">
                What started as a simple idea became a way to make useful local
                information easier to access — built independently, without
                funding, and with the goal of serving the community it came
                from.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[9px] text-white/35">
                  Web Developer
                </span>

                <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[9px] text-white/35">
                  Hagonoy Resident
                </span>

                <span className="rounded-full border border-cyan-200/10 bg-cyan-200/[0.04] px-3 py-1.5 text-[9px] text-cyan-200/50">
                  Built Independently
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ===================================================== */}
        {/* PHILOSOPHY */}
        {/* ===================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="mt-10"
        >
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[20px] border border-white/[0.08] bg-[#0b1425]/90 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <Zap size={18} className="text-cyan-200/70" strokeWidth={1.7} />

              <h3 className="mt-4 text-sm font-semibold text-white/80">Fast</h3>

              <p className="mt-1.5 text-xs leading-5 text-white/30">
                Lightweight interactions designed to get you to the forecast
                quickly.
              </p>
            </div>

            <div className="rounded-[20px] border border-white/[0.08] bg-[#0b1425]/90 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <ShieldCheck
                size={18}
                className="text-cyan-200/70"
                strokeWidth={1.7}
              />

              <h3 className="mt-4 text-sm font-semibold text-white/80">
                Privacy-minded
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-white/30">
                Community interaction is designed around anonymous participation
                rather than public personal identities.
              </p>
            </div>

            <div className="rounded-[20px] border border-white/[0.08] bg-[#0b1425]/90 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <Heart size={18} className="text-cyan-200/70" strokeWidth={1.7} />

              <h3 className="mt-4 text-sm font-semibold text-white/80">
                Community-first
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-white/30">
                Built around making useful local information easier for everyone
                to access.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ===================================================== */}
        {/* CLOSING */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 max-w-xl text-center"
        >
          <Waves
            size={20}
            className="mx-auto text-cyan-200/40"
            strokeWidth={1.5}
          />

          <p className="mt-4 text-xs leading-5 text-white/25">
            HagonoyTides is a small independent project with a simple goal: make
            local tide information more accessible, more understandable, and
            more useful to the community.
          </p>
        </motion.div>
      </main>

      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}
      <div className="relative w-full">
        <div className="mx-auto flex w-full justify-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default About;
