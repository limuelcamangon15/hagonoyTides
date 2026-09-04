import { User2Icon } from "lucide-react";
import "./message.css";

function Message({ senderLocation, message, date }) {
  return (
    <article
      className="
        group
        w-full
        rounded-[22px]
        border border-white/[0.10]
        bg-white/[0.055]
        px-4
        py-2
        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
        backdrop-blur-xl
        transition-all
        duration-200
        hover:bg-white/[0.07]
        hover:border-white/[0.14]
        hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)]
      "
    >
      {/* Sender */}
      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            border border-white/[0.12]
            bg-gradient-to-br
            from-white/[0.16]
            to-white/[0.05]
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]
          "
        >
          <User2Icon
            className="h-[17px] w-[17px] text-white/65"
            strokeWidth={1.8}
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[12px] font-medium tracking-[-0.01em] text-white/55">
            Someone from <span className="text-white/75">{senderLocation}</span>
          </p>
        </div>
      </div>

      {/* Message */}
      <p
        className="
          mt-3
          whitespace-pre-wrap
          break-words
          pl-0
          text-[15px]
          leading-[1.55]
          tracking-[-0.01em]
          text-white/[0.86]
        "
      >
        {message}
      </p>

      {/* Date */}
      <div className="mt-2 flex justify-end">
        <p className="text-[10px] font-medium tracking-wide text-white/30">
          {date}
        </p>
      </div>
    </article>
  );
}

export default Message;
