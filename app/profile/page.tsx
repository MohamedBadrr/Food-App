import { auth } from "@/auth";
import Image from "next/image";
import UpdateProfile from "./UpdateProfileForm";
import { getMe } from "../../services/user/getMe";

const ProfilePage = async () => {
  const session = await auth();
  const profile = await getMe();

  return (
    <main className="py-20 container">
      <div className="flex flex-col gap-10 ">
        <div className="items-center flex flex-col justify-center gap-3">
          <h1 className="text-[55px] font-playfair text-center">My Profile</h1>
          <div className=" w-full flex gap-5 flex-col lg:flex-row md:flex items-center justify-center lg:items-start lg:justify-start">
            <div className="items-center justify-center flex  w-full lg:w-[25%] ">
              <Image
                width={200}
                height={200}
                src={session?.user.image ?? "/assets/profileIamge.png"}
                alt="profile image"
                className="rounded-full"
              />
            </div>
            <div className="w-full ">
              <UpdateProfile profile={profile} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
