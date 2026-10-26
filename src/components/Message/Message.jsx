import { User2Icon } from "lucide-react";
import "./message.css";

function Message({ senderLocation, message, date }) {
  return (
    <article className="group w-full rounded-2xl px-3 py-2.5 transition-colors duration-200 hover:bg-white/[0.015]">
      {/* Sender */}
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300/[0.16] to-cyan-500/[0.06] text-cyan-100/80">
          <User2Icon className="h-[15px] w-[15px]" strokeWidth={1.8} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex min-w-0 items-center gap-2">
            <p className="truncate text-[12px] font-medium tracking-[-0.01em] text-white/65">
              Someone from{" "}
              <span className="text-white/80">{senderLocation}</span>
            </p>

            <span className="shrink-0 text-[10px] font-medium tracking-wide text-white/25">
              {date}
            </span>
          </div>

          <p className="mt-1 whitespace-pre-wrap break-words text-[15px] leading-[1.6] tracking-[-0.01em] text-white/88">
            {message}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Message;
