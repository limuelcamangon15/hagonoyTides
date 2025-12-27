function Skeleton({ className = "", ...props }) {
  return (
    <div
      data-slot="skeleton"
      className={`bg-gray-500/80 animate-pulse rounded-xl ${className}`}
      {...props}
    />
  );
}

export default Skeleton;
