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

        {/* Clients Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={
            inView
              ? { y: 0, opacity: 1 }
              : { y: 50, opacity: 0 }
          }
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="w-full overflow-x-auto scrollbar-hide"
        >
          <div
            className="
              grid
              grid-cols-5
              gap-3
              sm:gap-4
              md:gap-6
              lg:gap-8
              min-w-[700px]
              md:min-w-0
              px-4
              sm:px-6
              md:px-8
              lg:px-10
              max-w-[1800px]
              mx-auto
            "
          >
            {clients.map((logo, index) => (
              <div
                key={`client-${index}`}
                className="
                  group
                  relative
                  h-24
                  sm:h-28
                  md:h-36
                  lg:h-44
                  xl:h-48
                  w-full
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  md:rounded-2xl
                  border
                  border-white/15
                  bg-white/[0.08]
                  px-3
                  sm:px-4
                  md:px-6
                  lg:px-8
                  transition-all
                  duration-300
                  hover:border-white/30
                  hover:bg-white/[0.12]
                "
              >
                <Image
                  src={logo}
                  alt={`Trusted Client ${index + 1}`}
                  width={300}
                  height={180}
                  className="
                    h-auto
                    max-h-14
                    sm:max-h-16
                    md:max-h-20
                    lg:max-h-28
                    xl:max-h-32
                    w-auto
                    max-w-full
                    object-contain
                    opacity-100
                    brightness-110
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
