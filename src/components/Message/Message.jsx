import React from "react";
import { formatDate } from "../../utils/dateFormatter";

function Message({ senderLocation, message, date }) {
  const now = new Date().toISOString();
  console.log("HEY", formatDate(now));
  return (
    <div className="px-5 py-2 rounded-lg w-full bg-zinc-800 ">
      <p className="text-white/50 text-xs">Someone from {senderLocation}</p>
      <p className="text-white/80 pl-3">{message}</p>
      <p className="text-white/50 text-xs text-right">{date}</p>
    </div>
  );
}

export default Message;
