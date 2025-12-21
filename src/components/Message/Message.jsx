import "./message.css";

function Message({ senderLocation, message, date }) {
  return (
    <div className="px-5 py-2 rounded-2xl w-full bg-zinc-800 border border-white/10">
      <p className="text-white/50 text-xs">Someone from {senderLocation}</p>
      <p className="text-white/80 pl-3">{message}</p>
      <p className="text-white/50 text-xs text-right">{date}</p>
    </div>
  );
}

export default Message;
