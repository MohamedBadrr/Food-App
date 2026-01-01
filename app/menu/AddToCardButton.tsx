"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { PickSize } from "./PickSize";
import Divider from "@/components/shared/Divider";
import Extras from "./Extras";
import { Product } from "@/types/Products";

const AddToCardButton = (item: Product) => {
  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <Button
          className="rounded-full w-full! my-2
      hover:bg-white/90 hover:text-primary
      group-hover:bg-white group-hover:text-primary "
          size="sm"
        >
          Add Dish
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25 bg-white max-h-[80vh] overflow-y-auto">
        <DialogHeader className="flex items-center">
          <Image
            src={item.image}
            alt={item.name}
            width={150}
            height={150}
            className="mb-2"
          />
          <DialogTitle>{item.name}</DialogTitle>
          <DialogDescription className="text-center">
            {item.description}
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <Divider />

          <PickSize itemPrice={item.price} sizes={item.product_sizes} />
          <Divider />
          <Extras extras={item.product_extras} />
        </div>
        <DialogFooter className="flex flex-col">
          <Button
            type="submit"
            size={"sm"}
            className="rounded-full px-4 py-4 w-full"
          >
            Add Dish To Basket
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddToCardButton;
