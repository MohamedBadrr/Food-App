import { Product } from "./Product";

export type Category = {
  id: string;
  name: string;
  display_order: number;
  created_at: string;
  updated_at: string;

  products: Product[];
};