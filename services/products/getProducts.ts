import { supabase } from "@/lib/supabaseClient";
import { Product } from "@/types/Products";


export const getProducts = async (): Promise<Product[] | null> => {
    const res = await supabase.from("products").select(`
        *,
        product_sizes(*),
        product_extras(*)
    `);
    return res.data;
};