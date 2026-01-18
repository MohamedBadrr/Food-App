import { supabase } from "@/lib/supabaseClient";

interface UpdateCategoryPayload {
  id: string;
  name: string;
}   

export const updateCategory = async ({
  id,
  name,
}: UpdateCategoryPayload) => {
  const { error } = await supabase
    .from("categories")
    .update({ name })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return true;
};
