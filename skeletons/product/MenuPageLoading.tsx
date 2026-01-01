import ProductSkeleton from "./ProductSkeleton";

const MenuPageLoading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 12 }, (_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  );
};

export default MenuPageLoading;
