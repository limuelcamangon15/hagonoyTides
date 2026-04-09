function AiIntroNotification() {
  return (
    <div className="w-full px-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-3 py-2 shadow-lg shadow-black/30">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

          <h3 className="text-white">
            Meet <span className="font-bold text">Tidy</span>!
          </h3>
        </div>
        <p className="text-white/80 text-xs">
          Tidy is your AI assistant for HagonoyTides! Stay informed about tide
          forecasts, flood alerts, and safety tips. Tidy helps you monitor tides
          and keep you safe during high tides and floods in Hagonoy, Bulacan.
        </p>
      </div>
    </div>
  );
}

export default AiIntroNotification;
