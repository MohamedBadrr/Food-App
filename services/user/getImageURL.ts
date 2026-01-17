export const getImageUrl = async (imageFile?: File | null) => {
  if (!imageFile) return null;

  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("pathName", "profile_images");

  const res = await fetch("/api/upload", { method: "POST", body: formData });
  const json = await res.json();

  if (!res.ok) throw new Error(json?.error || "Upload failed");
  return json.url as string;
};
