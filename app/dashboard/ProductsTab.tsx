"use client";

import { QUERY_KEYS } from "@/constants/QueryKeies";
import WithLoadingAndErrors from "@/HOCs/WithLoadingAndErrors";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getProducts } from "@/services/products/getProducts";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Edit, TrashIcon } from "lucide-react";
const ProductsTab = () => {
  const { data, isLoading, isError } = useCustomQuery({
    queryKey: QUERY_KEYS.PRODUCTS,
    queryFn: getProducts,
  });

  return (
    <WithLoadingAndErrors
      LoadingComponent={<></>}
      isError={isError}
      isLoading={isLoading}
      lengthOfData={data?.length as number}
      noDataMessage="No items for now, coming soon."
    >
      <div className="my-10 flex items-center justify-between w-full">
        <h1 className="text-[35px] font-playfair font-bold text-primary">
          All Products
        </h1>
        <Button>Add New Product</Button>
      </div>
      <div className="overflow-hidden rounded-lg my-5 border">
        <Table className="" style={{ borderRadius: 5 }}>
          <TableHeader className="p-8! bg-gray-200 font-semibold italic">
            <TableRow className="p-8!">
              <TableHead className="w-[100px]">#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className=" ">price</TableHead>
              <TableHead className=" ">Extras</TableHead>
              <TableHead className=" text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item, index) => (
              <TableRow
                key={item.id}
                className="hover:bg-gray-200 transition-all duration-300"
              >
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  <div className="space-y-2 ">
                    <Image
                      alt={item.name}
                      src={item.image ?? "/assets/placholderIamge.jpg"}
                      width={40}
                      height={40}
                      className="w-10! h-10! rounded-full"
                    />
                    <p>{item.name}</p>
                  </div>
                </TableCell>
                <TableCell>{item.categories?.name}</TableCell>
                <TableCell className=" ">{item.price}$</TableCell>
                <TableCell className=" ">
                  {item.product_extras.map((extra) => (
                    <span key={extra.id} className="me-2">
                      {extra.name},
                    </span>
                  ))}
                </TableCell>
                <TableCell className=" ">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant={"outline"} size={"icon"}>
                      <Edit />
                    </Button>
                    <Button size={"icon"}>
                      <TrashIcon />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </WithLoadingAndErrors>
  );
};

export default ProductsTab;
