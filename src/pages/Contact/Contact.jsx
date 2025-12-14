import Navbar from "../../components/Navbar/Navbar";
import UnderDevelopment from "../../components/UnderDevelopment/UnderDevelopment";
import "../../index.css";

function Contact() {
  return (
    <>
      <div className="flex items-center justify-center w-screen min-h-dvh">
        <Navbar />

        <div className="w-full">
          <UnderDevelopment label={"This page is under development."} />
        </div>
      </div>
    </>
  );
}

export default Contact;
