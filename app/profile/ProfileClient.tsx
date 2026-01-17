"use client";
import { useState } from "react";
import ImageSection from "./ImageSection";
import UpdateProfile from "./UpdateProfileForm";
import { UserProfile } from "../../services/user/getMe";

export default function ProfileClient({ profile }: { profile: UserProfile }) {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="w-full flex gap-5 flex-col lg:flex-row items-center lg:items-start lg:justify-start">
      <div className="items-center justify-center flex flex-col w-full lg:w-[25%]">
        <ImageSection userImage={profile.image} onFileSelected={setFile} />
      </div>

      <div className="w-full">
        <UpdateProfile profile={profile} selectedFile={file} />
      </div>
    </div>
  );
}
