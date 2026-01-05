import Skeleton from "../ui/Skeleton";

function TideContainerSkeleton({ countOfSkeletons }) {
  const skeletonsArray = new Array(countOfSkeletons).fill(countOfSkeletons);

  return (
    <div className="flex flex-col gap-2 bg-gray-500/30 rounded-2xl min-w-38 md:w-40 h-full p-2">
      <div className="flex justify-between gap-10">
        <Skeleton className="w-15 h-4" />
        <Skeleton className="w-5 h-4" />
      </div>

      <div className="flex flex-col gap-1 w-full min-h-fit max-h-fit">
        {skeletonsArray.map((_, index) => (
          <Skeleton key={index} className="w-full h-7" />
        ))}
      </div>
    </div>
  );
}

export default TideContainerSkeleton;
