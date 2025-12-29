import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import TideContainer from "../../components/TideContainer/TideContainer";
import SummaryCard from "../../components/SummaryCard/SummaryCard";
import Footer from "../../components/Footer/Footer";
import GeneralChat from "../../components/GeneralChat/GeneralChat";
import Weather from "../../components/Weather/Weather";
import Snowfall from "react-snowfall";
import { motion, AnimatePresence } from "framer-motion";
import "../../index.css";

function Home() {
  const [monthlyTides, setMonthlyTides] = useState([]);
  const [totalHighTides, setTotalHighTides] = useState(0);
  const [totalLowTides, setTotalLowTides] = useState(0);

  useEffect(() => {
    fetch("https://bahagonoyapi.web.app/hagonoyTides.json")
      .then((res) => res.json())
      .then((data) => {
        const freshData = data.monthlyTide;

        console.log(data.monthlyTide);
        setMonthlyTides(data.monthlyTide);

        let highCount = 0;
        let lowCount = 0;

        freshData.forEach((mt) => {
          mt.dailyTide.forEach((dt) => {
            dt.tide.forEach((t) => {
              if (t.tideLevel >= 3.0) {
                highCount++;
              } else {
                lowCount++;
              }
            });
          });
        });

        setTotalHighTides(highCount);
        setTotalLowTides(lowCount);
      });
  }, []);

  function isTodayDecember() {
    const monthToday = new Date().getMonth() + 1;

    return monthToday == 12;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isTodayDecember() && (
          <Snowfall enable3DRotation={true} color="#ffffff" />
        )}
        <div className="flex flex-col items-center gap-5 custom-bg w-full min-h-dvh">
          <Navbar />
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex flex-col w-full flex-1 gap-5 xl:px-70"
          >
            {/*<SummaryCard lowTides={totalLowTides} highTides={totalHighTides} />*/}

            <Weather />

            <TideContainer />

            <GeneralChat />
          </motion.section>
          <Footer />
        </div>
      </AnimatePresence>
    </>
  );
}

export default Home;
