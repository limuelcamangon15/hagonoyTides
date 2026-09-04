import { motion } from "framer-motion";
import {
  Waves,
  PhoneCall,
  Building2,
  Siren,
  ShieldAlert,
  Facebook,
  ExternalLink,
  Mail,
  MessageCircle,
  MapPin,
  Heart,
  Clock,
} from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "../../index.css";

function Contact() {
  return (
    <div className="min-h-dvh w-full overflow-x-hidden bg-[#050a16] text-white">
      <Navbar />

      {/* Ambient Background */}
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
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-[20px] border border-cyan-200/15 bg-cyan-200/[0.07] shadow-[0_0_35px_rgba(103,232,249,0.06)]"
          >
            <MessageCircle
              size={29}
              strokeWidth={1.7}
              className="text-cyan-200"
            />
          </motion.div>

          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.7)]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-100/55">
              HagonoyTides
            </span>
          </div>

          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Need to get in touch?
            <span className="block text-cyan-200">We're here to help.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/40 sm:text-base">
            Whether you have a question about HagonoyTides, want to report
            something, or need to reach a local office, here are the appropriate
            channels.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0b1425]/80 px-3 py-1.5 backdrop-blur-xl">
            <MapPin size={11} className="text-cyan-200/70" />

            <span className="text-[10px] text-white/40">Hagonoy, Bulacan</span>
          </div>
        </motion.section>

        {/* ===================================================== */}
        {/* EMERGENCY CONTACTS */}
        {/* ===================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-14"
        >
          <div className="relative overflow-hidden rounded-[24px] border border-red-300/[0.12] bg-gradient-to-br from-red-400/[0.055] via-[#0b1425]/95 to-[#07101f]/95 p-5 shadow-[0_15px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-7">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-red-400/[0.045] blur-[80px]" />

            <div className="relative">
              {/* Header */}
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-red-300/15 bg-red-400/[0.07]">
                  <PhoneCall
                    size={19}
                    strokeWidth={1.7}
                    className="text-red-300"
                  />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-red-300/60">
                    Emergency & Local Assistance
                  </p>

                  <h2 className="mt-1 text-xl font-semibold tracking-tight text-white">
                    Need help? Know who to call.
                  </h2>

                  <p className="mt-2 max-w-2xl text-xs leading-5 text-white/40 sm:text-sm">
                    For life-threatening emergencies or situations requiring
                    immediate assistance, always call{" "}
                    <span className="font-semibold text-red-300">911</span>. The
                    local contacts below are provided for specific municipal and
                    disaster-related concerns.
                  </p>
                </div>
              </div>

              {/* 911 */}
              <a
                href="tel:911"
                className="mt-6 flex items-center justify-between rounded-[20px] border border-red-300/15 bg-red-400/[0.08] p-4 transition-all duration-200 hover:border-red-300/25 hover:bg-red-400/[0.12] active:scale-[0.98]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-400/10">
                    <PhoneCall
                      size={17}
                      strokeWidth={1.8}
                      className="text-red-300"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">911</p>

                    <p className="mt-0.5 text-[10px] text-red-200/50">
                      All emergencies
                    </p>
                  </div>
                </div>

                <span className="rounded-full border border-red-300/10 bg-red-300/[0.06] px-3 py-1.5 text-[9px] font-semibold text-red-200/70">
                  Emergency
                </span>
              </a>

              {/* Local Contacts */}
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {/* Mayor */}
                <a
                  href="tel:+63447944445"
                  className="group rounded-[20px] border border-white/[0.08] bg-black/20 p-4 transition-all duration-200 hover:border-white/[0.14] hover:bg-white/[0.04] active:scale-[0.98]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-400/[0.07]">
                      <Building2
                        size={16}
                        strokeWidth={1.7}
                        className="text-blue-300/80"
                      />
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold text-white/80">
                        Hagonoy Mayor's Office
                      </h3>

                      <p className="mt-0.5 text-[10px] text-white/30">
                        Municipal concerns
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm font-medium tracking-wide text-white/60">
                      +63 (44) 794-4445
                    </p>

                    <PhoneCall
                      size={14}
                      className="text-white/20 transition-colors group-hover:text-blue-300/70"
                    />
                  </div>
                </a>

                {/* MDRRMO */}
                <a
                  href="tel:+63447935811"
                  className="group rounded-[20px] border border-white/[0.08] bg-black/20 p-4 transition-all duration-200 hover:border-white/[0.14] hover:bg-white/[0.04] active:scale-[0.98]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/[0.07]">
                      <Siren
                        size={16}
                        strokeWidth={1.7}
                        className="text-amber-300/80"
                      />
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold text-white/80">
                        MDRRMO
                      </h3>

                      <p className="mt-0.5 text-[10px] text-white/30">
                        Disaster & local response
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm font-medium tracking-wide text-white/60">
                      +63 44-793-5811
                    </p>

                    <PhoneCall
                      size={14}
                      className="text-white/20 transition-colors group-hover:text-amber-300/70"
                    />
                  </div>
                </a>
              </div>

              {/* Disclaimer */}
              <div className="mt-4 flex gap-2 rounded-[16px] border border-white/[0.06] bg-white/[0.025] p-3">
                <ShieldAlert
                  size={14}
                  className="mt-0.5 shrink-0 text-white/25"
                  strokeWidth={1.7}
                />

                <p className="text-[10px] leading-5 text-white/25">
                  HagonoyTides is not an emergency response service. Contact
                  information is provided for convenience and should not replace
                  official emergency channels.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ===================================================== */}
        {/* MAYOR / COMMUNITY */}
        {/* ===================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-10"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {/* Mayor Facebook */}
            <div className="rounded-[22px] border border-white/[0.09] bg-[#0b1425]/80 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-300/10 bg-blue-400/[0.05]">
                <Facebook
                  size={18}
                  strokeWidth={1.7}
                  className="text-blue-300/80"
                />
              </div>

              <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-blue-300/50">
                Official local updates
              </p>

              <h2 className="mt-1 text-lg font-semibold text-white">
                Follow the Mayor's Office
              </h2>

              <p className="mt-2 text-xs leading-5 text-white/35">
                For municipal announcements, public updates, and information
                from the Mayor's Office, check their official Facebook page.
              </p>

              <a
                href="https://www.facebook.com/AteCharoSyAlvarado"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 rounded-2xl border border-blue-300/10 bg-blue-400/[0.05] px-4 py-3 text-xs font-semibold text-blue-200/70 transition-all duration-200 hover:border-blue-300/20 hover:bg-blue-400/[0.09] hover:text-white active:scale-[0.97]"
              >
                <div className="rounded-full p-1 bg-[#1447e6]">
                  <Facebook
                    size={14}
                    fill="white"
                    strokeWidth={1.8}
                    color="white"
                  />
                </div>
                Mayor's Facebook Page
                <ExternalLink size={12} strokeWidth={1.8} />
              </a>
            </div>

            {/* Availability */}
            <div className="rounded-[22px] border border-white/[0.09] bg-[#0b1425]/80 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/10 bg-emerald-400/[0.05]">
                <Clock
                  size={18}
                  strokeWidth={1.7}
                  className="text-emerald-300/80"
                />
              </div>

              <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-300/50">
                Local assistance
              </p>

              <h2 className="mt-1 text-lg font-semibold text-white">
                Contact the right office.
              </h2>

              <p className="mt-2 text-xs leading-5 text-white/35">
                Municipal offices may have their own operating hours and
                response procedures. For immediate emergencies, don't wait for
                office hours — call 911.
              </p>

              <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/[0.07] bg-black/20 px-3 py-2.5">
                <ShieldAlert
                  size={14}
                  className="text-emerald-300/60"
                  strokeWidth={1.7}
                />

                <span className="text-[10px] text-white/30">
                  Emergency response:{" "}
                  <span className="text-emerald-300/60">911</span>
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ===================================================== */}
        {/* DEVELOPER CONTACT */}
        {/* ===================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-12"
        >
          <div className="relative overflow-hidden rounded-[24px] border border-cyan-200/[0.12] bg-gradient-to-br from-cyan-300/[0.055] via-[#0b1425]/90 to-[#07101f]/95 p-5 shadow-[0_15px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-7">
            <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-cyan-300/[0.045] blur-[80px]" />

            <div className="relative">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-cyan-200/15 bg-cyan-200/[0.07]">
                    <Heart
                      size={19}
                      strokeWidth={1.7}
                      className="text-cyan-200"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-200/55">
                      Developer
                    </p>

                    <h2 className="mt-1 text-xl font-semibold tracking-tight text-white">
                      Have something to say?
                    </h2>

                    <p className="mt-2 max-w-xl text-xs leading-5 text-white/40 sm:text-sm">
                      For technical concerns, suggestions, feedback, or
                      questions about HagonoyTides, you can reach its developer
                      directly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-[20px] border border-white/[0.08] bg-black/20 p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white/85">
                      Limuel Camangon
                    </p>

                    <p className="mt-1 text-[10px] leading-5 text-white/35">
                      Web Developer · IT Student at Bulacan State University
                      <br />
                      Hagonoy, Bulacan
                    </p>
                  </div>

                  <a
                    href="https://www.facebook.com/lims.1506"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
        flex
        min-h-11
        w-full
        shrink-0
        items-center
        justify-center
        gap-2
        rounded-2xl
        border
        border-blue-400/10
        bg-blue-400/[0.045]
        px-4
        py-2.5
        text-xs
        font-semibold
        text-white/65
        transition-all
        duration-200
        hover:border-blue-400/20
        hover:bg-blue-400/[0.08]
        hover:text-white
     
        active:scale-[0.97]
        sm:w-auto
      "
                  >
                    <div className="rounded-full p-1 bg-[#1447e6]">
                      <Facebook
                        size={14}
                        fill="white"
                        strokeWidth={1.8}
                        color="white"
                      />
                    </div>
                    Contact via Facebook
                  </a>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-2">
                <Mail
                  size={13}
                  className="mt-0.5 shrink-0 text-white/20"
                  strokeWidth={1.7}
                />

                <p className="text-[10px] leading-5 text-white/25">
                  HagonoyTides is an independent project developed with the
                  intention of making useful local information easier to access.
                  Feedback and suggestions are always welcome.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ===================================================== */}
        {/* IMPORTANT NOTE */}
        {/* ===================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-10"
        >
          <div className="rounded-[22px] border border-amber-300/[0.09] bg-[#0b1425]/80 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.20)] backdrop-blur-xl sm:p-6">
            <div className="flex gap-3">
              <ShieldAlert
                size={18}
                strokeWidth={1.7}
                className="mt-0.5 shrink-0 text-amber-300/60"
              />

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-amber-300/50">
                  Important
                </p>

                <h2 className="mt-1 text-sm font-semibold text-white/80">
                  HagonoyTides information is provided for general reference.
                </h2>

                <p className="mt-2 text-xs leading-5 text-white/35">
                  Tide information presented by HagonoyTides may not always be
                  perfectly accurate or current. The project relies on data
                  gathered from external sources and does not operate its own
                  official tide-measurement station. Conditions in the field may
                  differ from forecasted or calculated tide information.
                </p>

                <p className="mt-3 text-xs leading-5 text-white/35">
                  Do not rely solely on HagonoyTides for navigation, fishing
                  safety, rescue operations, evacuation decisions, or other
                  situations where inaccurate information could put people or
                  property at risk. Always verify critical information with
                  appropriate official authorities and local sources.
                </p>
              </div>
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
            HagonoyTides is a small independent project built to make local
            information easier to access. When something important is at stake,
            always rely on official emergency and government channels.
          </p>
        </motion.div>
      </main>

      {/* Centered Footer */}
      <div className="relative flex w-full justify-center">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
