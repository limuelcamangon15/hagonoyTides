import { BiLogoGmail, BiLogoInstagram } from "react-icons/bi";

function Footer() {
  return (
    <div className="w-full h-fit p-5">
      <p className="text-xs lg:md text-white/70 text-center">
        &copy; {new Date().getFullYear()} HagonoyTides. All rights reserved.
      </p>

      <p className="text-xs lg:md text-white/70 text-center">
        Powered By{" "}
        <span className="bg-transparent bg-gradient-to-r from-green-800 to-green-400 bg-clip-text font-semibold">
          Lims
        </span>{" "}
        {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;
