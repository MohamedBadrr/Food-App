"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import type { Session } from "next-auth";
import { UserSettings } from "@/app/profile/UserSettings";
import { UserProfile } from "@/services/user/getMe";

interface AuthButtonProps {
  session: Session | null;
  profile: UserProfile;
}

const AuthButton = ({ session, profile }: AuthButtonProps) => {
  if (session) {
    return (
      <>
        <UserSettings profile={profile} />
      </>
    );
  } else
    return (
      <Link href={"/auth/login"}>
        <Button
          className="py-0!  text-[13px]! font-semibold font-playfair italic"
          variant={"default"}
        >
          Login
        </Button>
      </Link>
    );
};

export default AuthButton;
