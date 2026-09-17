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
        {/* Section Header */}
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

        {/* Static Client Logos */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={
            inView
              ? { y: 0, opacity: 1 }
              : { y: 40, opacity: 0 }
          }
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="w-full px-3 sm:px-5 md:px-8 lg:px-12 xl:px-16"
        >
          <div className="grid grid-cols-5 gap-2 sm:gap-3 md:gap-5 lg:gap-8 max-w-7xl mx-auto">
            {clients.map((logo, index) => (
              <div
                key={`client-${index}`}
                className="group relative flex h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 items-center justify-center rounded-xl md:rounded-2xl border border-white/15 bg-white/[0.08] px-2 sm:px-3 md:px-5 lg:px-8 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12]"
              >
                <Image
                  src={logo}
                  alt={`Trusted Client ${index + 1}`}
                  width={300}
                  height={180}
                  className="w-full h-auto max-h-12 sm:max-h-14 md:max-h-20 lg:max-h-28 xl:max-h-32 object-contain opacity-100 brightness-110 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
