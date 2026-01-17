import { supabase } from "@/lib/supabaseClient";
import { getImageUrl } from "./getImageURL";
import { UpdateProfileFormValues } from "@/validations/types";

export const updateMyProfile = async (data: UpdateProfileFormValues) => {
  const { file, image, ...rest } = data;

  const uploadedUrl = await getImageUrl(file);

  const payload = {
    ...rest,
    ...(uploadedUrl ? { image: uploadedUrl } : {}), 
  };

  const { data: updated, error } = await supabase
    .from("users")
    .update(payload)
    .eq("id", rest.id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return updated;
};
