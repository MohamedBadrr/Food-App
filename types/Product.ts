// types/Product.ts

export type ProductSize = {
  id: string;
  product_id: string;
  name: "SMALL" | "MEDIUM" | "LARGE";
  price: number;
};
export type Category = {
  id: string;
  name: string;
};
export type ProductExtra = {
  id: string;
  product_id: string;
  name: "CHEESE" | "BACON" | "TOMATO" | "ONION" | "PEPPER";
  price: number;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  display_order: number;
  price: number;
  category_id: string;
 categories: Category | null;
  created_at: string;
  updated_at: string;

  product_sizes: ProductSize[];
  product_extras: ProductExtra[];
};
