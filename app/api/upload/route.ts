import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type FormDataFile = Blob & { name?: string };

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as FormDataFile | null;
    const pathName = String(formData.get("pathName") ?? "profile_images");

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const fileBuffer = await file.arrayBuffer();
    const base64File = Buffer.from(fileBuffer).toString("base64");
    const dataUri = `data:${(file).type || "image/jpeg"};base64,${base64File}`;

    const uploadResponse = await cloudinary.uploader.upload(dataUri, {
      folder: pathName,
    });

    return NextResponse.json({ url: uploadResponse.secure_url });
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err?.message : "Failed to upload image" },
      { status: 500 }
    );
  }
}
