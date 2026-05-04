import { WifiOff } from "lucide-react";
import React from "react";

function OfflineNotice() {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 top-20 z-30 flex items-center gap-2 rounded-full bg-amber-500/50 px-4 py-2 text-white shadow-lg backdrop-blur-sm">
      <WifiOff size={18} className="animate-bounce" />
      <p className="text-sm font-medium">Offline Mode</p>
    </div>
  );
}

export default OfflineNotice;
