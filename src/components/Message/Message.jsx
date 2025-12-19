import React from "react";

function Message({ senderLocation, message, date }) {
  return (
    <div className="px-5 py-2 rounded-lg w-full bg-zinc-800">
      <p className="text-white/50">{senderLocation}</p>
      <p className="text-white/80">{message}</p>
      <p className="text-white/50 text-xs">{date}</p>
    </div>
  );
}

export default Message;
