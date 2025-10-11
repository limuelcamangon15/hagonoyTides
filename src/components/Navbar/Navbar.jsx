import logo from "../../assets/bahagonoy-icon-white.png";
import { NavLink } from "react-router";
import "./nav-bar.css";
import "../../index.css";

function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-between items-center fixed top-0 px-2 py-2 bg-[#E8CACA]/50 w-screen h-fit box-shadow">
        <div className="flex flex-row gap-2 items-center">
          <img src={logo} alt="HagonoyTides Icon" className="w-10" />

          <h1 className="hidden md:block text-xl text-white font-bold transition duration-600">
            Hagonoy<span className="text-[#060F28]">Tides</span>
          </h1>
        </div>

        <h1 className="md:hidden sm:block text-xl text-white font-bold transition duration-600">
          Hagonoy<span className="text-[#060F28]">Tides</span>
        </h1>

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

        <button className="md:block xl:hidden cursor-pointer px-1 py-1 font-bold text-white text-lg">
          ☰
        </button>
      </nav>
    </>
  );
}

export default Navbar;
