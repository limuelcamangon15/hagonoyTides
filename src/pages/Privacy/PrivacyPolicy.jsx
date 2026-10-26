import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "../../index.css";

function PrivacyPolicy() {
  return (
    <div className="min-h-dvh w-full overflow-x-hidden bg-[#050a16] text-white">
      <Navbar />

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-cyan-400/[0.045] blur-[110px]" />
        <div className="absolute right-[-15%] top-[25%] h-96 w-96 rounded-full bg-blue-500/[0.035] blur-[130px]" />
      </div>

      <main className="relative mx-auto w-full max-w-3xl px-4 pb-16 pt-24 sm:px-6">
        <motion.section
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-[18px] bg-cyan-400/[0.08] text-cyan-200/80">
            <Shield size={24} strokeWidth={1.7} />
          </div>

          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm leading-6 text-white/45">
            Last updated: October 26, 2026
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 space-y-6 text-sm leading-7 text-white/55"
        >
          <div>
            <h2 className="text-lg font-semibold text-white">Overview</h2>
            <p className="mt-2">
              HagonoyTides is an independent project built and maintained by Limuel
              Camangon. This policy explains what information is handled when you
              use the app.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">No accounts</h2>
            <p className="mt-2">
              HagonoyTides does not require registration or login. There are no
              user profiles, passwords, or personal accounts.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Community chat</h2>
            <p className="mt-2">
              Chat messages are public. When you send a message, your browser may
              request location access so a general area label can be attached to
              the message. That label is not meant to reveal your identity. Please
              do not include personal or sensitive information in messages.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Data stored on your device</h2>
            <p className="mt-2">
              Tide forecasts and some AI summaries are cached in your browser so
              the app can work offline. You can remove this data by clearing your
              browser storage.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">External services</h2>
            <p className="mt-2">
              HagonoyTides uses external services for tide data, weather, AI
              summaries, and backend processing. Those services may process
              requests according to their own privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Cookies and tracking</h2>
            <p className="mt-2">
              HagonoyTides does not use advertising or tracking cookies. The app
              stores only the data needed for caching and normal operation.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Changes</h2>
            <p className="mt-2">
              This policy may be updated as the project changes. Continued use of
              the app means you accept the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Contact</h2>
            <p className="mt-2">
              For privacy questions, contact Limuel Camangon through the Contact
              page or at{" "}
              <a
                href="https://limuelcamangon.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-200/80 transition-colors hover:text-cyan-100"
              >
                limuelcamangon.vercel.app
              </a>
              .
            </p>
          </div>
        </motion.section>
      </main>

      <div className="relative flex w-full justify-center">
        <Footer />
      </div>
    </div>
  );
}

export default PrivacyPolicy;
