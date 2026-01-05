import { CartItem } from "@/store/cart.store";

export const getSubTotal = (cart: CartItem[]) => {
  return cart.reduce((total, cartItem) => {
    const extrasTotal = cartItem.extras?.reduce(
      (sum, extra) => sum + (extra.price || 0),
      0
    ) || 0;

    const itemTotal =
      cartItem.basePrice + 
      (cartItem.size?.price || 0) + 
      extrasTotal;

    return total + (itemTotal * (cartItem.quantity || 1));
  }, 0);
};