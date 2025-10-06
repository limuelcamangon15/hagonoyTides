import './tide.css';
import highTideIcon from '../../assets/high-tide-icon.png';
import lowTideIcon from '../../assets/low-tide-icon.png';

function Tide({ tide: { date, day, isoDate, tide } }) {

    return (
        <>
            <div className="flex flex-col min-w-[50%] h-full bg-[#D9D9D9]/30 border border-white  rounded-xl custom-inner-shadow relative">
                <div className="flex justify-between items-center w-full px-2 absolute top-1 ">
                    <h1 className='text-white font-semibold text-sm'>{day}</h1>
                    <h1 className='text-white font-semibold text-sm'>{date}</h1>
                </div>

                <div className="flex justify-center items-center mt-7 h-fit w-full pb-5">
                    <div className="flex flex-col items-center justify-center gap-1.5 h-fit w-full mx-2">
                        {
                            tide.map((t, key) => <div key={key} className="flex flex-row justify-between px-2 rounded-md border border-white w-full h-fit bg-white/30">
                                <p className='text-white '>{t.tideLevel.toFixed(1)}</p>
                                <img src={highTideIcon} alt="Tide Icon" className='w-6' />
                                <p className='text-white '>{t.time}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tide;