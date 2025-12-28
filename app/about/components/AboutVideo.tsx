"use client";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const AboutVideo = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(
    null
  );

  const handlePlay = () => {
    if (videoElement) {
      videoElement.play();
    }
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleVideoPlay = () => {
    setIsPaused(false);
  };

  return (
    <>
      <div className="relative w-full h-172.5">
        <video
          ref={(el) => setVideoElement(el)}
          className="w-full h-full object-cover"
          src="/assets/about video.mp4"
          poster="/assets/video.png"
          onPause={handlePause}
          onPlay={handleVideoPlay}
          controls={!isPaused}
        />
        {isPaused && (
          <div
            className="absolute inset-0 flex flex-col gap-10 items-center justify-center pointer-events-none"
            style={{ zIndex: 2 }}
          >
            <Button
              onClick={handlePlay}
              type="button"
              variant="default"
              size="icon"
              className="pointer-events-auto bg-white p-10 hover:bg-primary/50"
            >
              <Play className="text-primary" />
            </Button>
            <p className="text-white text-[30px] md:text-[55px] font-playfair w-[40%] text-center">
              Feel the authentic & original taste from us
            </p>
          </div>
        )}
      </div>
      <div className="container py-20 flex flex-col md:flex-row gap-20">
        <div className="flex gap-6 ">
          <Image
            src={"/assets/icons/easyIcon.png"}
            alt="Multi Icon"
            width={50}
            height={10}
            className="w-12! h-12!"
          />
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Multi Cuisine</h3>
            <p className="text-[12px] opacity-90">
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <Image
            src={"/assets/icons/multiIcon.png"}
            alt="Easy Icon"
            width={50}
            height={10}
            className="w-12! h-12!"
          />
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Easy to Order</h3>
            <p className="text-[12px] opacity-90">
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <Image
            src={"/assets/icons/fast.png"}
            alt="Easy Icon"
            width={50}
            height={10}
            className="w-12! h-12!"
          />
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Fast Delivery</h3>
            <p className="text-[12px] opacity-90">
              In the new era of technology we look in the future with certainty
              life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutVideo;
