import { NavLink } from "react-router";
import { Coffee } from "lucide-react";

function Footer() {
  return (
    <footer
      className="
        flex
        w-full
        md:w-4/5
        flex-col
        gap-4
        border-t
        border-white/10
        p-5
        text-white/70
      "
    >
      {/* Top Row */}
      <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
        <p className="text-center text-xs">
          &copy; {new Date().getFullYear()} HagonoyTides. All rights reserved.
        </p>

        {/* Small Sitemap */}
        <nav className="flex items-center gap-3 text-[10px] text-white/40">
          <span className="text-white/20">Sitemap</span>

          <NavLink to="/home" className="transition-colors hover:text-white/80">
            Home
          </NavLink>

          <span className="text-white/15">•</span>

          <NavLink
            to="/about"
            className="transition-colors hover:text-white/80"
          >
            About
          </NavLink>

          <span className="text-white/15">•</span>

          <NavLink
            to="/contact"
            className="transition-colors hover:text-white/80"
          >
            Contact
          </NavLink>

          <span className="text-white/15">•</span>

          <NavLink
            to="/limuelcamangon/buy-me-a-coffee"
            className="transition-colors hover:text-white/80"
          >
            Support the website
          </NavLink>
        </nav>
      </div>

      {/* Project Note */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[10px] leading-5 text-white/30">
          HagonoyTides is fully designed and developed by a student with zero
          funding, built with the goal of creating something useful for the
          Hagonoy Bulacan community.
        </p>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-between">
        {/* Support */}
        <NavLink
          to="/limuelcamangon/buy-me-a-coffee"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            gap-1.5
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            px-3
            py-1.5
            text-[10px]
            font-medium
            text-white/45
            transition-all
            duration-200
            hover:border-amber-300/20
            hover:bg-amber-300/[0.06]
            hover:text-white/80
          "
        >
          <Coffee className="h-3 w-3 text-amber-300/70" />
          Buy me a coffee & support HagonoyTides
        </NavLink>

        {/* Developer */}
        <p className="text-center text-[10px] text-white/35">
          Developed by{" "}
          <a
            href="https://limuelcamangon.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              font-semibold
              text-green-600
              transition-colors
              hover:text-green-500
            "
          >
            Limuel Camangon
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
