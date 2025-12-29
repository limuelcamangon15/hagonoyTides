function Footer() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 w-full md:w-4/5 h-fit p-5">
        <p className="text-xs lg:md text-white/70 text-center">
          &copy; {new Date().getFullYear()} HagonoyTides. All rights reserved.
        </p>

        <p className="text-xs lg:md text-white/70 text-center">
          Powered By{" "}
          <span className=" text-green-700 font-semibold">
            Lims {new Date().getFullYear()}
          </span>
        </p>
      </div>
    </>
  );
}

export default Footer;
