
function SkeletonCard() {
  return (
    <div className="w-72 rounded-xl border border-gray-200 bg-white p-4 shadow-sm animate-pulse">
      {/* Image Skeleton */}
      <div className="h-44 w-full rounded-lg bg-gray-200"></div>

      {/* Title Skeleton */}
      <div className="mt-4 h-5 w-3/4 rounded bg-gray-200"></div>

      {/* Rating Skeleton */}
      <div className="mt-3 h-4 w-1/2 rounded bg-gray-200"></div>

      {/* Price Skeleton */}
      <div className="mt-4 h-6 w-1/3 rounded bg-gray-200"></div>

      {/* Button Skeleton */}
      <div className="mt-4 h-10 w-full rounded-lg bg-gray-200"></div>
    </div>
  );
}

export default SkeletonCard;
