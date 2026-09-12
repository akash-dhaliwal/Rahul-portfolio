"use client";

import { useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      id="hero"
      className="relative w-full flex justify-center bg-black overflow-hidden"
    >
      <div className="relative w-full aspect-video">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/assets/Hope-films-hero.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}
