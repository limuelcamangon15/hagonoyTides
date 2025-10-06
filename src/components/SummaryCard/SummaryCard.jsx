import './summary-card.css';

function SummaryCard() {

    return (
        <>
            <div className="flex flex-row justify-between p-5 gap-5 mt-20 mx-auto rounded-3xl bg-[#E8CACA] w-[95%] h-35 custom-inset-shadow">
                <div className="flex flex-col gap-7 p-3 rounded-xl bg-black/50 w-95 h-full custom-drop-shadow relative">
                    <p className="text-white text-xs md:text-sm font-semibold">Total High Tides</p>
                    <p className="text-white text-2xl font-bold absolute bottom-2 right-3">100</p>
                </div>

                <div className="flex flex-col gap-7 p-3 rounded-xl bg-black/50 w-95 h-full custom-drop-shadow relative">
                    <p className="text-white text-xs md:text-sm font-semibold">Total Low Tides</p>
                    <p className="text-white text-2xl font-bold absolute bottom-2 right-3">120</p>
                </div>

                <div className="flex flex-col gap-7 p-3 rounded-xl bg-black/50 w-95 h-full custom-drop-shadow relative">
                    <p className="text-white text-xs md:text-sm font-semibold">Highest Tide</p>
                    <p className="text-white text-2xl font-bold absolute bottom-2 right-3">5.2</p>
                </div>
            </div>
        </>
    )
}

export default SummaryCard;