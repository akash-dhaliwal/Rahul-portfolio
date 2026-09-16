"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  "/assets/clents/client1.png",
  "/assets/clents/client2.png",
  "/assets/clents/client3.png",
  "/assets/clents/client4.png",
  "/assets/clents/client5.png",
  "/assets/clents/client6.png",
];

export default function Clients() {
  return (
    <section
      id="clients"
      className="relative w-full overflow-hidden bg-[#0A0A0A] py-20 md:py-28"
    >
      {/* Section Heading */}
      <div className="mx-auto mb-12 max-w-7xl px-6 text-center md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-white/50">
            Trusted By
          </p>

          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Our Clients
          </h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#0A0A0A] to-transparent md:w-40" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#0A0A0A] to-transparent md:w-40" />

        <div className="flex w-max animate-[marquee_25s_linear_infinite]">
          {/* First Set */}
          <div className="flex items-center gap-8 px-4 md:gap-16 md:px-8">
            {clients.map((logo, index) => (
              <div
                key={`client-${index}`}
                className="flex h-24 w-40 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] md:h-32 md:w-52"
              >
                <Image
                  src={logo}
                  alt={`Client ${index + 1}`}
                  width={180}
                  height={100}
                  className="max-h-16 w-auto max-w-full object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 md:max-h-20"
                />
              </div>
            ))}
          </div>

          {/* Duplicate Set for Infinite Marquee */}
          <div className="flex items-center gap-8 px-4 md:gap-16 md:px-8">
            {clients.map((logo, index) => (
              <div
                key={`client-duplicate-${index}`}
                className="flex h-24 w-40 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] md:h-32 md:w-52"
              >
                <Image
                  src={logo}
                  alt={`Client ${index + 1}`}
                  width={180}
                  height={100}
                  className="max-h-16 w-auto max-w-full object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 md:max-h-20"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
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
