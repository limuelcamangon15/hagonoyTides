import { User2Icon } from "lucide-react";
import "./message.css";

function Message({ senderLocation, message, date }) {
  return (
    <div className="px-5 py-2 rounded-2xl w-full bg-zinc-800 border border-white/10">
      <div className="flex gap-3 ">
        <div className="flex items-center justify-center bg-gray-400 min-w-8 min-h-8 rounded-full">
          <User2Icon className="text-gray-900" />
        </div>
        <p className="text-white/50 text-xs">Someone from {senderLocation}</p>
      </div>

      <p className="text-white/80 pl-3">{message}</p>
      <p className="text-white/50 text-xs text-right">{date}</p>
    </div>
  );
}

export default Message;
