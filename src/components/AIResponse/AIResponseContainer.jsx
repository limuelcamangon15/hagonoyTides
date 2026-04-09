import { BotIcon } from "lucide-react";

function AIResponseContainer({ content }) {
  return (
    <div className="flex flex-col gap-1 m-3">
      <div className="flex items-center gap-2">
        <div className="flex gap-1 items-center">
          <BotIcon size={25} className="text-white" />
          <p className="text-md text-white font-bold">Tidy</p>
        </div>

        <div className="flex gap-1 items-center text-white/80 text-xs">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Online
        </div>
      </div>

      <div
        className={`
          ${!content && "animate-pulse"}
          rounded-2xl
          rounded-tl-none
          bg-linear-to-tr
        from-green-400/20
        via-green-400/40
        to-green-400/10
          backdrop-blur-md
          border border-white/10
          text-white/90
          text-sm
          py-2
          px-3
        `}
      >
        {content ? (
          content
        ) : (
          <div className="flex items-center w-full justify-center space-x-2">
            <span className="animate-pulse text-white/80">
              Hey wait a minute, Im analyzing tides for today
            </span>
            <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce-delay"></span>
            <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce-delay animation-delay-150"></span>
            <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce-delay animation-delay-300"></span>
          </div>
        )}
      </div>
    </div>
  );
}

export default AIResponseContainer;
