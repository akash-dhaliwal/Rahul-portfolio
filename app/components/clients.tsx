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

        {/* Client Logos */}
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
          className="w-full px-1 sm:px-3 md:px-6 lg:px-10 xl:px-14"
        >
          {/* Exactly 5 logos in one row */}
          <div className="flex w-full items-center justify-between gap-0">
            {clients.map((logo, index) => (
              <div
                key={`client-${index}`}
                className="flex w-1/5 min-w-0 items-center justify-center overflow-visible px-[5px]"
              >
                <Image
                  src={logo}
                  alt={`Trusted Client ${index + 1}`}
                  width={500}
                  height={300}
                  className="
                    block
                    w-[115%]
                    max-w-none
                    h-auto
                    object-contain
                    brightness-110
                    transition-transform
                    duration-300
                    hover:scale-110
                  "
                  sizes="20vw"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
