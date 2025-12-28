import Skeleton from "../ui/Skeleton";

function MessageSkeleton({ senderLocationWidth, messageWidth, dateWidth }) {
  return (
    <div className="flex flex-col gap-1 px-5 py-2 rounded-2xl w-full bg-gray-500/30 animate-pulse border-white/10">
      <Skeleton className={`${senderLocationWidth} h-3`} />
      <Skeleton className={`${messageWidth} h-5`} />
      <Skeleton className={`${dateWidth} h-3 self-end`} />
    </div>
  );
}

export default MessageSkeleton;
