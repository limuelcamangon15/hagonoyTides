import Skeleton from "../ui/Skeleton";

function MessageSkeleton({ senderLocationWidth, messageWidth, dateWidth }) {
  return (
    <div className="flex flex-col gap-1 px-5 py-2 rounded-2xl w-full bg-gray-500/30 animate-pulse border-white/10">
      <div className="flex gap-3 ">
        <div className="flex items-center justify-center bg-gray-500 min-w-8 min-h-8 rounded-full">
          <Skeleton />
        </div>
        <Skeleton className={`${senderLocationWidth} h-3`} />
      </div>
      <Skeleton className={`${messageWidth} h-5`} />
      <Skeleton className={`${dateWidth} h-3 self-end`} />
    </div>
  );
}

export default MessageSkeleton;
