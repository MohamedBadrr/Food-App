import { supabase } from "@/lib/supabaseClient";

type AddCategoryPayload = {
  name: string;
};

export const addCategory = async ({ name }: AddCategoryPayload) => {
  const { data, error } = await supabase
    .from("categories")
    .insert([
      {
        name,
      },
    ])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
