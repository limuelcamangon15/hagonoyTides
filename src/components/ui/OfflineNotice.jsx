import { WifiOff } from "lucide-react";
import React from "react";

function OfflineNotice() {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 top-20 z-30 flex items-center gap-2 rounded-full bg-amber-500/[0.12] px-4 py-2 text-white shadow-[0_18px_60px_-36px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      <WifiOff size={18} className="animate-bounce" />
      <p className="text-sm font-medium">Offline Mode</p>
    </div>
  );
}

export default OfflineNotice;
