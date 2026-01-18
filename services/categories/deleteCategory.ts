import { supabase } from "@/lib/supabaseClient";

export const deleteCategory = async (categoryId: string) => {
  const { error } = await supabase
    .from("categories")
    .delete()
    .eq("id", categoryId);

  if (error) {
    throw new Error(error.message);
  }

  return true;
};
