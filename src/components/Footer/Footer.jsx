import { BiLogoGmail, BiLogoInstagram } from "react-icons/bi";

function Footer() {
  return (
    <div className="w-full h-fit p-5">
      <p className="text-xs lg:md text-white/70 text-center">
        &copy; {new Date().getFullYear()} HagonoyTides All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
