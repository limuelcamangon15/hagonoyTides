import Skeleton from "../ui/Skeleton";

function MessageInputSkeleton() {
  return (
    <div className="w-full rounded-[22px] bg-[#091524]/80 px-2 py-2 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.8)] ring-1 ring-white/[0.02]">
      <div className="flex items-center gap-2">
        {/* Input skeleton */}
        <Skeleton className="h-10 min-w-0 flex-1 rounded-[17px]" />

        {/* Send button skeleton */}
        <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
      </div>
    </div>
  );
}

export default MessageInputSkeleton;
