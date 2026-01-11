"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const GoogleButtonSignin = () => {
  return (
    <Button
      variant={"outline"}
      className="w-full flex items-center justify-center gap-2"
      onClick={() => signIn("google")}
    >
      <Image
        alt="googleSVG image"
        src={"/assets/icons/googleSVG.svg"}
        width={50}
        height={50}
        className="w-[30px]! h-[30px]!"
      />
      Sign in With Google
    </Button>
  );
};

export default GoogleButtonSignin;
