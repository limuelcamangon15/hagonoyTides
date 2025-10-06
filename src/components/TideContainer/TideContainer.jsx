import { useEffect, useRef, useState } from 'react';
import Tide from '../Tide/Tide';
import './tide-container.css'

function TideContainer() {
    const [data, setData] = useState({});
    const [dateIndex, setDateIndex] = useState(new Date().getMonth());
    const [tides, setTides] = useState([]);

    useEffect(() => {
        fetch("https://bahagonoyapi.web.app/hagonoyTides.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.monthlyTide[dateIndex].month);
                setTides(data.monthlyTide[dateIndex].dailyTide);
                setData(data);
            })
    }, [dateIndex]);


    return (
        <>
            <div className="flex flex-wrap flex-row justify-center items-center w-full gap-1">
                <button className={`text-white font-semibold ${dateIndex == 0 ? `bg-[#0E2DA6]/30 border-white` : `bg-white/30 border-transparent`} border  p-0.5 rounded-md transition duration-500`} onClick={() => setDateIndex(0)}>Jan</button>
                <button className={`text-white font-semibold ${dateIndex == 1 ? `bg-[#0E2DA6]/30 border-white` : `bg-white/30 border-transparent`} border  p-0.5 rounded-md transition duration-500`} onClick={() => setDateIndex(1)}>Feb</button>
                <button className={`text-white font-semibold ${dateIndex == 2 ? `bg-[#0E2DA6]/30 border-white` : `bg-white/30 border-transparent`} border  p-0.5 rounded-md transition duration-500`} onClick={() => setDateIndex(2)}>Mar</button>
                <button className={`text-white font-semibold ${dateIndex == 3 ? `bg-[#0E2DA6]/30 border-white` : `bg-white/30 border-transparent`} border  p-0.5 rounded-md transition duration-500`} onClick={() => setDateIndex(3)}>Apr</button>
                <button className={`text-white font-semibold ${dateIndex == 4 ? `bg-[#0E2DA6]/30 border-white` : `bg-white/30 border-transparent`} border  p-0.5 rounded-md transition duration-500`} onClick={() => setDateIndex(4)}>May</button>
                <button className={`text-white font-semibold ${dateIndex == 5 ? `bg-[#0E2DA6]/30 border-white` : `bg-white/30 border-transparent`} border  p-0.5 rounded-md transition duration-500`} onClick={() => setDateIndex(5)}>Jun</button>
                <button className={`text-white font-semibold ${dateIndex == 6 ? `bg-[#0E2DA6]/30 border-white` : `bg-white/30 border-transparent`} border  p-0.5 rounded-md transition duration-500`} onClick={() => setDateIndex(6)}>Jul</button>
                <button className={`text-white font-semibold ${dateIndex == 7 ? `bg-[#0E2DA6]/30 border-white` : `bg-white/30 border-transparent`} border  p-0.5 rounded-md transition duration-500`} onClick={() => setDateIndex(7)}>Aug</button>
                <button className={`text-white font-semibold ${dateIndex == 8 ? `bg-[#0E2DA6]/30 border-white` : `bg-white/30 border-transparent`} border  p-0.5 rounded-md transition duration-500`} onClick={() => setDateIndex(8)}>Sep</button>
                <button className={`text-white font-semibold ${dateIndex == 9 ? `bg-[#0E2DA6]/30 border-white` : `bg-white/30 border-transparent`} border  p-0.5 rounded-md transition duration-500`} onClick={() => setDateIndex(9)}>Oct</button>
                <button className={`text-white font-semibold ${dateIndex == 10 ? `bg-[#0E2DA6]/30 border-white` : `bg-white/30 border-transparent`} border  p-0.5 rounded-md transition duration-500`} onClick={() => setDateIndex(10)}>Nov</button>
                <button className={`text-white font-semibold ${dateIndex == 11 ? `bg-[#0E2DA6]/30 border-white` : `bg-white/30 border-transparent`} border  p-0.5 rounded-md transition duration-500`} onClick={() => setDateIndex(11)}>Dec</button>
            </div>

            <div className="flex flex-col gap-5 sm:h-60 md:h-1/4">
                <div className="flex justify-between px-5 items-center w-full">
                    <h1 className='text-white font-semibold text-xl'>
                        {
                            data.monthlyTide &&
                            data.monthlyTide[dateIndex] &&
                            data.monthlyTide[dateIndex].month || 'Loading...'
                        }
                    </h1>
                    <h1 className='text-white font-semibold text-xl'>{data.year}</h1>
                </div>


                <div className="flex flex-row gap-5 px-5 w-full h-full overflow-auto overflow-y-hidden">
                    <div className="flex flex-row gap-5 w-full">
                        {
                            tides.map((tide, key) => <Tide tide={tide} key={key} dateIndex={dateIndex} />)
                        }
                    </div>
                </div>

            </div>
        </>
    );
}

export default TideContainer;
