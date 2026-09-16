
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const clients = [
  "/assets/clents/client1.png",
  "/assets/clents/client2.png",
  "/assets/clents/client3.png",
  "/assets/clents/client4.png",
  "/assets/clents/client5.png",
  "/assets/clents/client6.png",
  "/assets/clents/client7.png",
  "/assets/clents/client8.png",
  "/assets/clents/client9.png",
  "/assets/clents/client10.png",
  "/assets/clents/client11.png",
  "/assets/clents/client12.png",
];

export default function Clients() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="clients"
      ref={ref}
      className="relative w-full overflow-hidden py-20 md:py-24 lg:py-28"
    >
      {/* Main Container */}
      <div className="relative z-10 w-full">
        {/* Section Header - Same Style as Services */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={
            inView
              ? { y: 0, opacity: 1 }
              : { y: 50, opacity: 0 }
          }
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 lg:mb-20 text-center px-4"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[var(--primary)] leading-tight mb-4">
            Our Trusted Clients
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto">
            Proud to work with brands and clients who trust our creative
            expertise
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-40 z-20 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-40 z-20 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none" />

          {/* Moving Track */}
          <div className="flex w-max animate-[clientMarquee_28s_linear_infinite] hover:[animation-play-state:paused]">
            {/* First Set */}
            <div className="flex items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 px-3 sm:px-4 md:px-8">
              {clients.map((logo, index) => (
                <div
                  key={`client-${index}`}
                  className="group relative flex h-28 w-44 sm:h-32 sm:w-52 md:h-36 md:w-60 lg:h-40 lg:w-64 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] px-6 sm:px-8 md:px-10 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12]"
                >
                  <Image
                    src={logo}
                    alt={`Trusted Client ${index + 1}`}
                    width={240}
                    height={140}
                    className="h-auto max-h-20 sm:max-h-24 md:max-h-28 w-auto max-w-full object-contain opacity-100 brightness-110 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Duplicate Set */}
            <div className="flex items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 px-3 sm:px-4 md:px-8">
              {clients.map((logo, index) => (
                <div
                  key={`client-duplicate-${index}`}
                  className="group relative flex h-28 w-44 sm:h-32 sm:w-52 md:h-36 md:w-60 lg:h-40 lg:w-64 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] px-6 sm:px-8 md:px-10 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12]"
                >
                  <Image
                    src={logo}
                    alt={`Trusted Client ${index + 1}`}
                    width={240}
                    height={140}
                    className="h-auto max-h-20 sm:max-h-24 md:max-h-28 w-auto max-w-full object-contain opacity-100 brightness-110 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        @keyframes clientMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
