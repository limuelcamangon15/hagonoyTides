import Skeleton from "../ui/Skeleton";

function MessageInputSkeleton() {
  return (
    <div
      className="
        w-full
        rounded-[22px]
        border border-white/[0.10]
        bg-white/[0.055]
        p-1.5
        shadow-[0_8px_30px_rgba(0,0,0,0.10)]
        backdrop-blur-2xl
      "
    >
      <div className="flex items-center gap-2">
        {/* Input skeleton */}
        <Skeleton
          className="
            h-10
            min-w-0
            flex-1
            rounded-[17px]
          "
        />

        {/* Send button skeleton */}
        <Skeleton
          className="
            h-10
            w-10
            shrink-0
            !rounded-full
          "
        />
      </div>
    </div>
  );
}

export default MessageInputSkeleton;
