import { CartItem } from "@/store/cart.store";

export const getTotalCartQuantity = (cart: CartItem[]) => {
  return cart.reduce((quantity, item) => {
    return quantity + (item.quantity || 0);
  }, 0);
};

