import Skeleton from "../ui/Skeleton";

function MessageSkeleton({ senderLocationWidth, messageWidth, dateWidth }) {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        gap-1
        rounded-[22px]
        border
        border-white/[0.08]
        bg-white/[0.045]
        px-4
        py-3.5
        shadow-[0_4px_20px_rgba(0,0,0,0.06)]
        backdrop-blur-xl
      "
    >
      {/* Sender skeleton */}
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
            border border-white/[0.08]
            bg-white/[0.07]
            animate-pulse
          "
        >
          <Skeleton />
        </div>

        <Skeleton
          className={`
            ${senderLocationWidth}
            h-3
            rounded-full
          `}
        />
      </div>

      {/* Message skeleton */}
      <div className="mt-2">
        <Skeleton
          className={`
            ${messageWidth}
            h-4
            rounded-full
          `}
        />
      </div>

      {/* Date skeleton */}
      <Skeleton
        className={`
          ${dateWidth}
          h-2.5
          self-end
          rounded-full
        `}
      />
    </div>
  );
}

export default MessageSkeleton;
