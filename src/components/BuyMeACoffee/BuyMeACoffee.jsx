import { NavLink } from "react-router";
import { ArrowLeft, Coffee, Heart, Waves } from "lucide-react";
import supportHagonoyTides from "../../assets/supportHagonoyTides.jpg";
import Footer from "../Footer/Footer";

export default function BuyMeACoffee() {
  return (
    <main className="min-h-dvh w-full max-w-full overflow-x-hidden px-4 pt-24 text-white sm:px-5">
      <div className="mx-auto flex min-h-[calc(100dvh-12rem)] w-full max-w-2xl flex-col items-center justify-center text-center">
        {/* Small Header */}
        <div className="mb-5 flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur-xl">
          <Coffee className="h-3.5 w-3.5 shrink-0 text-amber-300/80" />

          <span className="truncate text-[10px] font-medium uppercase tracking-[0.16em] text-white/45">
            Support HagonoyTides
          </span>
        </div>

        {/* Title */}
        <h1 className="max-w-full text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
          Help keep HagonoyTides going.
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-6 text-white/45">
          This project started from a simple goal: to make local tide and
          weather information easier for the Hagonoy community to access.
        </p>

        {/* QR Card */}
        <div className="relative mt-8 max-w-full rounded-[28px] border border-white/[0.12] bg-white/[0.045] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.20)] backdrop-blur-2xl">
          <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-cyan-300/[0.025]" />

          <div className="relative">
            <img
              src={supportHagonoyTides}
              alt="GCash QR Code to Support Hagonoy Tides"
              className="h-80 w-70 max-w-full rounded-2xl object-cover sm:h-100 sm:w-90"
            />
          </div>

          <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.14em] text-white/30">
            Support HagonoyTides via GCash
          </p>
        </div>

        {/* Purpose */}
        <section className="mt-10 w-full">
          <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-5 text-left sm:p-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] border border-cyan-200/10 bg-cyan-200/[0.06]">
                <Waves className="h-5 w-5 text-cyan-200/70" strokeWidth={1.7} />
              </div>

              <div className="min-w-0">
                <h2 className="text-sm font-semibold text-white/80">
                  Why this project exists
                </h2>

                <p className="mt-2 text-[12px] leading-6 text-white/40">
                  HagonoyTides is a simple student-led community project born
                  from a personal experience. As a community member, I saw how
                  difficult it can be to get timely local information when tide
                  schedules and other important information are still commonly
                  monitored through paper-based calendars.
                </p>

                <p className="mt-3 text-[12px] leading-6 text-white/40">
                  The goal is simple: make useful local information more
                  accessible, convenient, and available on a device people
                  already carry with them every day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Continuous Support */}
        <section className="mt-4 w-full">
          <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-5 text-left sm:p-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] border border-amber-200/10 bg-amber-200/[0.05]">
                <Heart
                  className="h-5 w-5 text-amber-200/65"
                  strokeWidth={1.7}
                />
              </div>

              <div className="min-w-0">
                <h2 className="text-sm font-semibold text-white/80">
                  A little support goes a long way
                </h2>

                <p className="mt-2 text-[12px] leading-6 text-white/40">
                  HagonoyTides is currently a small project built without
                  funding. Any support helps with hosting, maintenance,
                  development, and keeping the project available to the
                  community.
                </p>

                <p className="mt-3 text-[12px] leading-6 text-white/40">
                  There is no big organization behind this — just a student and
                  community member trying to build something useful. Supporting
                  the project, even with the price of a coffee, helps keep that
                  goal moving forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Small footer label */}
        <p className="mt-8 text-[9px] uppercase tracking-[0.16em] text-white/20">
          Built by a student, for the community
        </p>
      </div>

      {/* Site Footer */}
      <div className="mt-12 flex w-full justify-center">
        <Footer />
      </div>
    </main>
  );
}
