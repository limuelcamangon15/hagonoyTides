import logo from "../../assets/bahagonoy-icon-white.png";
import { NavLink } from "react-router";
import "./nav-bar.css";
import "../../index.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);

  function toggleMenu() {
    setShow(!show);
  }

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

  return (
    <>
      <nav
        className={`flex flex-row backdrop-blur-md bg-white/40 justify-between items-center z-10 fixed top-0 p-2 w-screen h-fit transition-all duration-700 ease-in-out ${
          show ? "min-h-screen" : "min-h-[4rem]"
        }`}
      >
        {/* Logo Section */}
        <div
          className={`flex flex-row gap-2 items-center absolute top-2.5 xl:static`}
        >
          <img src={logo} alt="HagonoyTides Icon" className="w-10" />

          {/* System Name */}
          <h1 className="block text-xl text-white font-bold transition duration-600">
            Hagonoy<span className="text-[#060F28]">Tides</span>
          </h1>
        </div>

        {/* Navigation Buttons for Desktop View */}
        <div className="hidden xl:flex gap-8 mr-5 items-center text-white font-semibold transition ease-in-out duration-500">
          <NavLink
            className="px-2 py-1 rounded-md transition ease-in-out duration-400 hover:bg-white/15"
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className="px-2 py-1 rounded-md transition ease-in-out duration-400 hover:bg-white/15"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="px-2 py-1 rounded-md transition ease-in-out duration-400 hover:bg-white/15"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>

        {/* Navigation for Mobile View */}
        {show && (
          <div className="flex flex-col justify-center items-center gap-10 w-full text-xl text-white font-semibold transition-all duration-500">
            <NavLink
              className="px-2 py-1 rounded-md transition ease-in-out duration-400 w-1/4 text-center hover:bg-white/15"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className="px-2 py-1 rounded-md transition ease-in-out duration-400 w-1/4 text-center hover:bg-white/15"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="px-2 py-1 rounded-md transition ease-in-out duration-400 w-1/4 text-center hover:bg-white/15"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        )}

        <button
          className={`md:block xl:hidden cursor-pointer px-1 py-1 font-bold text-white text-lg absolute top-2.5 xl:static right-2`}
          onClick={toggleMenu}
        >
          <i
            className={`fa-solid  text-3xl mt-1 w-[25px] hover:text-white/60 text-white transition ease-in-out duration-200 ${
              show ? "fa-xmark" : "fa-bars"
            }`}
          ></i>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
