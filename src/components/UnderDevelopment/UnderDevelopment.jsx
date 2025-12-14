import "./under-development.css";

function UnderDevelopment({ label }) {
  return (
    <div>
      <section className="flex flex-col items-center gap-3">
        <p className="text-white/50 italic text-center animate-pulse">
          {label}
        </p>

        {/* Bouncing dots */}
        <div className="flex space-x-2 mt-2">
          <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce-delay"></span>
          <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce-delay animation-delay-150"></span>
          <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce-delay animation-delay-300"></span>
        </div>
      </section>
    </div>
  );
}

export default UnderDevelopment;
