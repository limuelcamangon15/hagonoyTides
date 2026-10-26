import Skeleton from "../ui/Skeleton";

function MessageSkeleton({ senderLocationWidth, messageWidth, dateWidth }) {
  return (
    <div className="flex w-full flex-col gap-1 rounded-2xl bg-white/[0.02] px-3 py-3">
      {/* Sender skeleton */}
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.02]">
          <Skeleton className="h-4 w-4 rounded-full" />
        </div>

        <Skeleton className={`${senderLocationWidth} h-3 rounded-full`} />

        <Skeleton className={`${dateWidth} ml-auto h-2.5 rounded-full`} />
      </div>

      {/* Message skeleton */}
      <div className="mt-2">
        <Skeleton className={`${messageWidth} h-4 rounded-full`} />
      </div>
    </div>
  );
}

export default MessageSkeleton;
