import { supabase } from "@/lib/supabaseClient";
import { Category } from "@/types/Category";

export const getCategories = async (): Promise<Category[] | null> => {
  const res = await supabase
    .from("categories")
    .select("*, products(*)")
    .order("created_at", { ascending: true });
  return res.data;
};
