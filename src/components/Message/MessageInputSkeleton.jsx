import Skeleton from "../ui/Skeleton";

function MessageInputSkeleton() {
  return (
    <div className="flex flex-row gap-2 px-5 py-2 rounded-2xl w-full bg-gray-500/30 animate-pulse border-white/10">
      <Skeleton className={`w-full h-10`} />
      <Skeleton className={`w-15 h-10 !rounded-full`} />
    </div>
  );
}

export default MessageInputSkeleton;
