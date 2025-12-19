import React from "react";

function Message({ senderLocation, message, date }) {
  return (
    <div className="p-3 rounded-lg w-full bg-yellow-800/80">
      <p className="text-white/50">{senderLocation}</p>
      <p className="text-white/80">{message}</p>
      <p className="text-white/50 text-xs">{date}</p>
    </div>
  );
}

export default Message;
