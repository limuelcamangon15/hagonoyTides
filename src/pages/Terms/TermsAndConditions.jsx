import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "../../index.css";

function TermsAndConditions() {
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
            <FileText size={24} strokeWidth={1.7} />
          </div>

          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            Terms & Conditions
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
            <h2 className="text-lg font-semibold text-white">Acceptance</h2>
            <p className="mt-2">
              By using HagonoyTides, you agree to these terms. If you do not
              agree, please do not use the app.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Informational use</h2>
            <p className="mt-2">
              HagonoyTides is an independent informational and community project.
              It is not an official source and should not be used for navigation,
              boating, fishing safety, evacuation, or emergency decisions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Accuracy</h2>
            <p className="mt-2">
              Tide, weather, and community information may be inaccurate, delayed,
              or unavailable. Always verify important conditions with official or
              local sources.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Emergency use</h2>
            <p className="mt-2">
              HagonoyTides is not an emergency service. For emergencies, contact
              911 or the appropriate local authorities directly.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Acceptable use</h2>
            <p className="mt-2">
              Do not use the chat to spam, harass, impersonate others, share
              false information, or attempt to identify other users. Messages are
              public, so do not share personal or sensitive information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">User content</h2>
            <p className="mt-2">
              You are responsible for what you post. The developer may remove
              content that is harmful, misleading, or inappropriate.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Third-party services</h2>
            <p className="mt-2">
              The app relies on external services and providers. Their terms and
              availability may affect parts of HagonoyTides.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Ownership</h2>
            <p className="mt-2">
              HagonoyTides is an independent project. Its code, design, and
              content may not be copied or reused without permission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Changes</h2>
            <p className="mt-2">
              These terms may be updated as the project changes. Continued use of
              the app means you accept the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Contact</h2>
            <p className="mt-2">
              For questions about these terms, contact Limuel Camangon through the
              Contact page or at{" "}
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

export default TermsAndConditions;
