import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import { Home, Info, Mail, X, Menu, Waves, ChevronRight } from "lucide-react";
import logo from "../../assets/bahagonoy-icon-white.png";
import "./nav-bar.css";
import "../../index.css";

function Navbar() {
  const [show, setShow] = useState(false);

  function toggleMenu() {
    setShow((prev) => !prev);
  }

  function closeMenu() {
    setShow(false);
  }

  // Mobile View: disable main content scroll when navbar is toggled
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  // Auto close mobile navbar when screen width widens
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1280) {
        setShow(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigation = [
    {
      name: "Home",
      path: "/home",
      icon: Home,
    },
    {
      name: "About",
      path: "/about",
      icon: Info,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: Mail,
    },
  ];

  return (
    <nav
      className={`
        fixed
        z-[100]
        left-1/2
        -translate-x-1/2
        overflow-hidden
        border
        border-white/[0.13]
        bg-[#07132d]/[0.68]
        shadow-[0_12px_45px_rgba(0,0,0,0.18)]
        backdrop-blur-[28px]
        backdrop-saturate-150
        transition-all
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          show
            ? "top-0 h-[100dvh] w-full rounded-none"
            : "top-3 h-[64px] w-[calc(100%-24px)] max-w-[1400px] rounded-[22px]"
        }
      `}
    >
      {/* Main Navbar Bar */}
      <div
        className={`
          relative
          flex
          h-[64px]
          w-full
          items-center
          justify-between
          px-3
          sm:px-5
          ${show ? "border-b border-white/[0.08]" : ""}
        `}
      >
        {/* Brand */}
        <NavLink
          to="/home"
          onClick={closeMenu}
          aria-label="HagonoyTides Home"
          className="
            group
            flex
            items-center
            gap-2.5
            rounded-2xl
            px-2
            py-1.5
            transition-all
            duration-200
            hover:bg-white/[0.04]
            active:scale-[0.97]
          "
        >
          {/* Logo */}
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-[12px]
              bg-transparent
            "
          >
            <img
              src={logo}
              alt="HagonoyTides"
              className="
                h-9
                w-9
                object-contain
              "
            />
          </div>

          {/* Brand name */}
          <div className="flex flex-col justify-center leading-none">
            <h1
              className="
                text-[17px]
                font-semibold
                tracking-[-0.025em]
                text-white
                sm:text-[18px]
              "
            >
              Hagonoy
              <span className="text-cyan-200">Tides</span>
            </h1>

            <span
              className="
                mt-1
                hidden
                text-[8px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-white/35
                sm:block
              "
            >
              Local-Tide Monitoring
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.035] p-1">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  group
                  relative
                  flex
                  items-center
                  gap-2
                  rounded-full
                  px-4
                  py-2
                  text-[13px]
                  font-medium
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? `
                        bg-white/[0.12]
                        text-white
                        shadow-[inset_0_1px_1px_rgba(255,255,255,0.10)]
                      `
                      : `
                        text-white/55
                        hover:bg-white/[0.06]
                        hover:text-white/90
                      `
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      className={`
                        h-4
                        w-4
                        transition-colors
                        ${
                          isActive
                            ? "text-cyan-200"
                            : "text-white/40 group-hover:text-white/70"
                        }
                      `}
                      strokeWidth={1.8}
                    />

                    <span>{item.name}</span>

                    {isActive && (
                      <span
                        className="
                          absolute
                          bottom-0.5
                          left-1/2
                          h-0.5
                          w-3
                          -translate-x-1/2
                          rounded-full
                          bg-cyan-200
                          shadow-[0_0_8px_rgba(165,243,252,0.7)]
                        "
                      />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label={show ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={show}
          className="
            xl:hidden
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-white/[0.10]
            bg-white/[0.06]
            text-white
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]
            transition-all
            duration-200
            hover:bg-white/[0.10]
            active:scale-90
          "
        >
          {show ? (
            <X className="h-5 w-5" strokeWidth={2} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Sheet */}
      <div
        className={`
          relative
          flex
          h-[calc(100dvh-64px)]
          w-full
          flex-col
          px-5
          pb-8
          pt-8
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            show
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
          }
          xl:hidden
        `}
      >
        {/* Mobile intro */}
        <div className="mb-8 px-2">
          <div className="mb-3 flex items-center gap-2">
            <Waves className="h-4 w-4 text-cyan-200" strokeWidth={1.8} />

            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100/55">
              Hagonoy Community
            </span>
          </div>

          <h2 className="max-w-sm text-3xl font-semibold tracking-[-0.04em] text-white">
            Stay connected with
            <span className="text-cyan-200"> Hagonoy.</span>
          </h2>

          <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
            Local information, coastal conditions, and a community built around
            Hagonoy.
          </p>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col gap-2">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) => `
                  group
                  flex
                  min-h-[68px]
                  items-center
                  gap-4
                  rounded-[20px]
                  border
                  px-4
                  transition-all
                  duration-200
                  active:scale-[0.98]
                  ${
                    isActive
                      ? `
                        border-white/[0.14]
                        bg-white/[0.09]
                        shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]
                      `
                      : `
                        border-transparent
                        bg-white/[0.025]
                        hover:border-white/[0.08]
                        hover:bg-white/[0.06]
                      `
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-[14px]
                        border
                        transition-all
                        ${
                          isActive
                            ? "border-cyan-200/20 bg-cyan-200/[0.10] text-cyan-100"
                            : "border-white/[0.08] bg-white/[0.04] text-white/45 group-hover:text-white/70"
                        }
                      `}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <span
                        className={`
                          text-[16px]
                          font-medium
                          tracking-[-0.015em]
                          ${isActive ? "text-white" : "text-white/65"}
                        `}
                      >
                        {item.name}
                      </span>

                      <span className="mt-0.5 text-[11px] text-white/30">
                        {item.name === "Home" && "Current conditions & tides"}
                        {item.name === "About" && "Learn about HagonoyTides"}
                        {item.name === "Contact" && "Get in touch with us"}
                      </span>
                    </div>

                    <ChevronRight
                      className={`
                        h-4
                        w-4
                        transition-all
                        ${
                          isActive
                            ? "translate-x-0 text-cyan-200/60"
                            : "text-white/20 group-hover:translate-x-0.5 group-hover:text-white/40"
                        }
                      `}
                    />
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Mobile bottom community card */}
        <div className="mt-auto">
          <div
            className="
              relative
              overflow-hidden
              rounded-[22px]
              border
              border-white/[0.09]
              bg-white/[0.045]
              p-4
              backdrop-blur-xl
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-12
                -top-12
                h-28
                w-28
                rounded-full
                bg-cyan-300/[0.07]
                blur-2xl
              "
            />

            <div className="relative flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-emerald-400/15
                  bg-emerald-400/[0.08]
                "
              >
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
              </div>

              <div>
                <p className="text-sm font-medium text-white/75">
                  Hagonoy community
                </p>

                <p className="mt-0.5 text-[11px] text-white/35">
                  Your local coastal companion
                </p>
              </div>
            </div>
          </div>

          <p className="mt-5 text-center text-[10px] font-medium uppercase tracking-[0.16em] text-white/20">
            HagonoyTides
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
