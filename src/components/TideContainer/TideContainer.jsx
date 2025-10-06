import { useEffect, useRef, useState } from 'react';
import Tide from '../Tide/Tide';
import './tide-container.css'

function TideContainer() {
    const [data, setData] = useState({});
    const [tides, setTides] = useState([]);

    useEffect(() => {
        fetch("https://bahagonoyapi.web.app/hagonoyTides.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.monthlyTide[9].dailyTide);
                setTides(data.monthlyTide[9].dailyTide);
                setData(data);
            })
    }, []);

    return (
        <>
            <div className="flex flex-col gap-5 h-1/4">
                <div className="flex justify-between px-5 items-center w-full">
                    <h1 className='text-white font-semibold text-xl'>{data.year}</h1>
                    <h1 className='text-white font-semibold text-xl'>{data.year}</h1>
                </div>


                <div className="flex flex-row gap-5 px-5 w-full h-full overflow-auto overflow-y-hidden">
                    <div className="flex flex-row gap-5 w-full">
                        {
                            tides.map((tide, key) => <Tide tide={tide} key={key} />)
                        }
                    </div>
                </div>

            </div>
        </>
    );
}

export default TideContainer;
