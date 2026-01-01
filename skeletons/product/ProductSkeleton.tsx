import Skeleton from "react-loading-skeleton";
const ProductSkeleton = () => {
  return (
    <div className="w-full!">
      <Skeleton className="h-66.5! md:h-55.5! rounded-t-lg" />
      <div className="flex items-center flex-col justify-center">
        <Skeleton className="mt-5 w-30! " />
        <Skeleton className="mt-5 w-15! h-2 " />
        <Skeleton className="mt-1 w-50! h-1 " />
        <Skeleton className="mt-1 w-50! h-1 " />
        <Skeleton className="mt-1 w-50! h-1 " />
      </div>
      <Skeleton className="mt-4 h-6 rounded-2xl!" />
    </div>
  );
};

export default ProductSkeleton;
