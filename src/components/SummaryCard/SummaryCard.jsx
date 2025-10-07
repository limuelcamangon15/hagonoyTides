import './summary-card.css';

function SummaryCard({ lowTides, highTides }) {

    return (
        <>
            <div className="flex flex-row justify-between p-5 gap-5 mt-20 mx-auto rounded-3xl bg-[#E8CACA] w-[95%] h-35 custom-inset-shadow">
                <div className="relative flex flex-col h-full p-3 gap-7 rounded-xl bg-black/50 w-95 custom-drop-shadow">
                    <p className="text-xs font-semibold text-white md:text-sm">Total High Tides</p>
                    <p className="absolute font-bold text-white md:text-2xl sm:text-xl bottom-2 right-3">{highTides}</p>
                </div>

                <div className="relative flex flex-col h-full p-3 gap-7 rounded-xl bg-black/50 w-95 custom-drop-shadow">
                    <p className="text-xs font-semibold text-white md:text-sm">Total Low Tides</p>
                    <p className="absolute text-2xl font-bold text-white bottom-2 right-3">{lowTides}</p>
                </div>

                <div className="relative flex flex-col h-full p-3 gap-7 rounded-xl bg-black/50 w-95 custom-drop-shadow">
                    <p className="text-xs font-semibold text-white md:text-sm">Highest Tide</p>
                    <p className="absolute font-bold text-white md:text-2xl sm:text-xl bottom-2 right-3">5.2</p>
                </div>
            </div>
        </>
    )
}

export default SummaryCard;