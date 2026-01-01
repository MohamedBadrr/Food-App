"use client";
import MenuItem from "./MenuItem";
import { getProducts } from "@/services/products/getProducts";
import { QUERY_KEYS } from "@/constants/QueryKeies";
import { useCustomQuery } from "../hooks/useCustomQuery";
import WithLoadingAndErrors from "@/HOCs/WithLoadingAndErrors";
import MenuPageLoading from "@/skeletons/product/MenuPageLoading";

const MenuItems = () => {
  const { data, isLoading, isError } = useCustomQuery({
    queryKey: QUERY_KEYS.PRODUCTS,
    queryFn: getProducts,
  });
  console.log("data", data);

  return (
    <>
      <WithLoadingAndErrors
        LoadingComponent={<MenuPageLoading />}
        isError={isError}
        isLoading={isLoading}
        lengthOfData={data?.length as number}
        noDataMessage="No items for now, coming soon."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.map((item) => (
            <MenuItem
              description={item.description}
              id={item.id}
              image={item.image}
              price={item.price}
              key={item.id}
              created_at={item.created_at}
              name={item.name}
              product_extras={item.product_extras}
              product_sizes={item.product_sizes}
            />
          ))}
        </div>
      </WithLoadingAndErrors>
    </>
  );
};

export default MenuItems;
