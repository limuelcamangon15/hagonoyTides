function Skeleton({ className = "", ...props }) {
  return (
    <div
      data-slot="skeleton"
      className={`skeleton-shimmer rounded-xl ${className}`}
      {...props}
    />
  );
}

export default Skeleton;
