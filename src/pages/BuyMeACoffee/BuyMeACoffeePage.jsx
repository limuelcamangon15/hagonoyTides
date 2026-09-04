import BuyMeACoffee from "../../components/BuyMeACoffee/BuyMeACoffee";
import Navbar from "../../components/Navbar/Navbar";
import "../../index.css";

export default function BuyMeACoffeePage() {
  return (
    <div className="relative flex min-h-dvh w-full max-w-full items-center justify-center overflow-x-hidden">
      <Navbar />

      <BuyMeACoffee />
    </div>
  );
}
