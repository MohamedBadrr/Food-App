import { supabase } from "@/lib/supabaseClient";
import { UpdateProfileFormValues } from "@/validations/types";

export const updateMyProfile = async (data: UpdateProfileFormValues) => {
  const { data: updated, error } = await supabase
    .from("users")
    .update(data)
    .eq("id", data.id)
    .select()
    .single();

    if(error)
        throw new Error(error instanceof Error ? error.message : "user not found")

    return updated;
};

