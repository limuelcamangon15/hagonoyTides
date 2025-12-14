import "./general-chat.css";

function GeneralChat() {
  return (
    <>
      {/** Title Header */}
      <section className="w-full">
        <h1 className="text-white text-lg font-semibold px-5">General Chat</h1>
      </section>

      {/** Main Conversation */}
      <div className="flex flex-1 justify-center items-center bg-white/10 rounded-lg w-full backdrop-blur-2xl overflow-hidden">
        <section className="flex flex-col items-center gap-3">
          <p className="text-white/50 italic text-center animate-pulse">
            This feature is under development
          </p>

          {/* Bouncing dots */}
          <div className="flex space-x-2 mt-2">
            <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce-delay"></span>
            <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce-delay animation-delay-150"></span>
            <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce-delay animation-delay-300"></span>
          </div>
        </section>
      </div>
    </>
  );
}

export default GeneralChat;
