import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import SummaryCard from './components/SummaryCard/SummaryCard';
import TideContainer from './components/TideContainer/TideContainer';
import './index.css'

function App() {

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

        freshData.forEach(mt => {
          mt.dailyTide.forEach(dt => {
            dt.tide.forEach(t => {
              if (t.tideLevel >= 3.0) {
                highCount++;
              }
              else {
                lowCount++;
              }
            })
          })
        });

        setTotalHighTides(highCount);
        setTotalLowTides(lowCount);

      })

  }, []);



  return (
    <>
      <div className="flex flex-col gap-5 bg-[#060F28] w-screen h-screen">
        <Navbar />

        <section className="flex flex-col w-full min-h-screen gap-5 xl:px-70">
          <SummaryCard lowTides={totalLowTides} highTides={totalHighTides} />

          <TideContainer />
        </section>
      </div>
    </>
  );
}

export default App;
