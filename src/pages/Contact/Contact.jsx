import { motion } from "framer-motion";
import {
  PhoneCall,
  Building2,
  Siren,
  ShieldAlert,
  Facebook,
  ExternalLink,
  MessageCircle,
  MapPin,
  Heart,
} from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "../../index.css";

function Contact() {
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
            <MessageCircle size={29} strokeWidth={1.7} className="text-cyan-200" />
          </div>

          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Need to get in touch?
            <span className="block text-cyan-200">We're here to help.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/45 sm:text-base">
            For questions about HagonoyTides, local assistance, or emergencies,
            use the channels below.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0b1425]/80 px-3 py-1.5 text-[10px] text-white/40 backdrop-blur-xl">
            <MapPin size={11} className="text-cyan-200/70" />
            Hagonoy, Bulacan
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="mt-12"
        >
          <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-red-400/[0.055] via-[#0b1425]/95 to-[#07101f]/95 p-5 shadow-[0_15px_50px_-45px_rgba(0,0,0,0.9)] ring-1 ring-red-300/[0.08] backdrop-blur-2xl sm:p-7">
            <div className="relative">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-red-400/[0.07]">
                  <PhoneCall size={19} strokeWidth={1.7} className="text-red-300" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-red-300/60">
                    Emergency & Local Assistance
                  </p>
                  <h2 className="mt-1 text-xl font-semibold tracking-tight text-white">
                    Need help? Know who to call.
                  </h2>
                  <p className="mt-2 max-w-2xl text-xs leading-5 text-white/40 sm:text-sm">
                    For life-threatening emergencies, call{" "}
                    <span className="font-semibold text-red-300">911</span>. The
                    local contacts below are for municipal and disaster-related
                    concerns.
                  </p>
                </div>
              </div>

              <a
                href="tel:911"
                className="mt-6 flex items-center justify-between rounded-[20px] bg-red-400/[0.08] p-4 transition-all duration-200 hover:bg-red-400/[0.12] active:scale-[0.98]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-400/[0.10]">
                    <PhoneCall size={17} strokeWidth={1.8} className="text-red-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">911</p>
                    <p className="mt-0.5 text-[10px] text-red-200/50">All emergencies</p>
                  </div>
                </div>
                <span className="rounded-full bg-red-300/[0.08] px-3 py-1.5 text-[9px] font-semibold text-red-200/70">
                  Emergency
                </span>
              </a>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <a
                  href="tel:+63447944445"
                  className="group rounded-[20px] bg-black/20 p-4 transition-all duration-200 hover:bg-white/[0.04] active:scale-[0.98]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-400/[0.07]">
                      <Building2 size={16} strokeWidth={1.7} className="text-blue-300/80" />
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
                    <PhoneCall size={14} className="text-white/20 transition-colors group-hover:text-blue-300/70" />
                  </div>
                </a>

                <a
                  href="tel:+63447935811"
                  className="group rounded-[20px] bg-black/20 p-4 transition-all duration-200 hover:bg-white/[0.04] active:scale-[0.98]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/[0.07]">
                      <Siren size={16} strokeWidth={1.7} className="text-amber-300/80" />
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
                    <PhoneCall size={14} className="text-white/20 transition-colors group-hover:text-amber-300/70" />
                  </div>
                </a>
              </div>

              <div className="mt-4 flex gap-2 rounded-[16px] bg-white/[0.025] p-3">
                <ShieldAlert size={14} className="mt-0.5 shrink-0 text-white/25" strokeWidth={1.7} />
                <p className="text-[10px] leading-5 text-white/25">
                  HagonoyTides is not an emergency response service. Contact
                  information is provided for convenience.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="mt-10 grid gap-3 sm:grid-cols-2"
        >
          <a
            href="https://www.facebook.com/AteCharoSyAlvarado"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[22px] bg-[#0b1425]/80 p-5 transition-all duration-200 hover:bg-[#0d182b] sm:p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/[0.05]">
              <Facebook size={18} strokeWidth={1.7} className="text-blue-300/80" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-white">
              Mayor's Office updates
            </h2>
            <p className="mt-2 text-xs leading-5 text-white/35">
              Follow the official Facebook page for municipal announcements.
            </p>
            <div className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-blue-400/[0.05] px-4 py-3 text-xs font-semibold text-blue-200/70 transition-all duration-200 group-hover:bg-blue-400/[0.09] group-hover:text-white">
              <div className="rounded-full bg-[#1447e6] p-1">
                <Facebook size={14} fill="white" strokeWidth={1.8} color="white" />
              </div>
              Mayor's Facebook Page
              <ExternalLink size={12} strokeWidth={1.8} />
            </div>
          </a>

          <div className="rounded-[22px] bg-[#0b1425]/80 p-5 shadow-[0_12px_40px_-36px_rgba(0,0,0,0.8)] sm:p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/[0.05]">
              <Heart size={18} strokeWidth={1.7} className="text-emerald-300/80" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-white">
              Developer contact
            </h2>
            <p className="mt-2 text-xs leading-5 text-white/35">
              For feedback, suggestions, or technical concerns about HagonoyTides.
            </p>
            <div className="mt-5 rounded-[20px] bg-black/20 p-4">
              <p className="text-sm font-semibold text-white/85">
                Limuel Camangon
              </p>
              <p className="mt-1 text-[10px] leading-5 text-white/35">
                Web Developer · Hagonoy, Bulacan
              </p>
              <a
                href="https://www.facebook.com/lims.1506"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-2xl bg-blue-400/[0.045] px-4 py-2.5 text-xs font-semibold text-white/65 transition-all duration-200 hover:bg-blue-400/[0.08] hover:text-white sm:w-auto"
              >
                <div className="rounded-full bg-[#1447e6] p-1">
                  <Facebook size={14} fill="white" strokeWidth={1.8} color="white" />
                </div>
                Contact via Facebook
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="mt-10 rounded-[22px] bg-amber-400/[0.04] p-5 ring-1 ring-amber-300/[0.08] sm:p-6"
        >
          <div className="flex gap-3">
            <ShieldAlert
              size={18}
              strokeWidth={1.7}
              className="mt-0.5 shrink-0 text-amber-300/60"
            />
            <div>
              <h2 className="text-sm font-semibold text-white/80">
                HagonoyTides information is provided for general reference.
              </h2>
              <p className="mt-2 text-xs leading-5 text-white/35">
                Tide information may not always be perfectly accurate or current.
                Do not rely solely on HagonoyTides for navigation, fishing safety,
                rescue operations, evacuation decisions, or other high-risk
                situations.
              </p>
            </div>
          </div>
        </motion.section>
      </main>

      <div className="relative flex w-full justify-center">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
