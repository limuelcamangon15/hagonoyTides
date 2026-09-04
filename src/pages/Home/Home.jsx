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
import { sileo } from "sileo";
import OfflineNotice from "../../components/ui/OfflineNotice";

function Home() {
  const [monthlyTides, setMonthlyTides] = useState([]);
  const [totalHighTides, setTotalHighTides] = useState(0);
  const [totalLowTides, setTotalLowTides] = useState(0);

  const [isOffline, setIsOffline] = useState(false);

  /*useEffect(() => {
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
  }, []);*/

  function isTodayDecember() {
    const monthToday = new Date().getMonth() + 1;

    return monthToday == 12;
  }

  useEffect(() => {
    if (!navigator.onLine) {
      setIsOffline(true);

      sileo.warning({
        title: "You are currently offline.",
        description: (
          <div>
            <p className="text-yellow-500/50! text-center font-medium!">
              Offline mode is now enabled.
            </p>
          </div>
        ),
      });
    } else {
      setIsOffline(false);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isTodayDecember() && (
          <Snowfall enable3DRotation={true} color="#ffffff" />
        )}
        <div className="flex flex-col items-center gap-5 bg-[#050a16] w-full min-h-dvh">
          {/* Ambient background */}
          <div className="pointer-events-none fixed inset-0 overflow-hidden">
            <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-cyan-400/[0.045] blur-[110px]" />
            <div className="absolute right-[-15%] top-[25%] h-96 w-96 rounded-full bg-blue-500/[0.035] blur-[130px]" />
            <div className="absolute bottom-[-20%] left-[20%] h-96 w-96 rounded-full bg-emerald-400/[0.025] blur-[130px]" />
          </div>

          <Navbar />
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="flex flex-col w-full flex-1 gap-5 xl:px-70"
          >
            {/*<SummaryCard lowTides={totalLowTides} highTides={totalHighTides} />*/}

            {isOffline && (
              <motion.div variants={itemVariants}>
                <OfflineNotice />
              </motion.div>
            )}

            <motion.div variants={itemVariants}>
              <Weather />
            </motion.div>

            <motion.div variants={itemVariants}>
              <TideContainer />
            </motion.div>

            <motion.div variants={itemVariants}>
              <GeneralChat />
            </motion.div>
          </motion.section>
          <Footer />
        </div>
      </AnimatePresence>
    </>
  );
}

export default Home;
