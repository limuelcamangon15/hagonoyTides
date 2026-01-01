import Skeleton from "../ui/Skeleton";

function TideContainerSkeleton() {
  return (
    <div className="flex flex-col  gap-1 bg-gray-500/30 rounded-3xl w-full md:w-40 h-30 p-2">
      <div className="flex justify-between gap-1">
        <Skeleton className="w-15 h-3" />
        <Skeleton className="w-8 h-3" />
      </div>

      <Skeleton className="w-full h-5" />
      <Skeleton className="w-full h-5" />
      <Skeleton className="w-full h-5" />
      <Skeleton className="w-full h-5" />
    </div>
  );
}

export default TideContainerSkeleton;
