import { supabase } from "@/lib/supabaseClient";
import { Product } from "@/types/Product";

export const getProducts = async (): Promise<Product[] | null> => {
  const res = await supabase.from("products").select(`
        *,
          categories (
    id,
    name
  ),
        product_sizes(*),
        product_extras(*)
    `);
  return res.data;
};
