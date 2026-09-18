"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

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

const LOGOS_PER_PAGE = 6;

export default function Clients() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(clients.length / LOGOS_PER_PAGE);

  const startIndex = page * LOGOS_PER_PAGE;

  const currentClients = clients.slice(
    startIndex,
    startIndex + LOGOS_PER_PAGE
  );

  const isFirstPage = page === 0;
  const isLastPage = page === totalPages - 1;

  const handleNext = () => {
    if (!isLastPage) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstPage) {
      setPage((prev) => prev - 1);
    }
  };

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
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
          <div className="relative w-full max-w-7xl mx-auto overflow-hidden">

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={page}
                initial={{
                  x: page > 0 ? "100%" : "-100%",
                  opacity: 0.5,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                exit={{
                  x: page > 0 ? "-100%" : "100%",
                  opacity: 0.5,
                }}
                transition={{
                  x: {
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  opacity: {
                    duration: 0.45,
                    ease: "easeOut",
                  },
                }}
                className="
                  grid
                  grid-cols-3
                  md:grid-cols-6
                  items-center
                  gap-x-1
                  gap-y-6
                  sm:gap-x-2
                  sm:gap-y-8
                  md:gap-x-3
                  lg:gap-x-4
                  xl:gap-x-5
                "
              >
                {currentClients.map((logo, index) => (
                  <div
                    key={`${page}-${index}`}
                    className="
                      flex
                      w-full
                      min-w-0
                      items-center
                      justify-center
                      px-[2px]
                      sm:px-[3px]
                      md:px-[2px]
                    "
                  >
                    <Image
                      src={logo}
                      alt={`Trusted Client ${startIndex + index + 1}`}
                      width={600}
                      height={350}
                      className="
                        block
                        w-full
                        h-auto
                        max-h-28
                        sm:max-h-32
                        md:max-h-36
                        lg:max-h-44
                        xl:max-h-52
                        object-contain
                        brightness-110
                        transition-transform
                        duration-300
                        hover:scale-105
                      "
                      sizes="
                        (max-width: 767px) 32vw,
                        (max-width: 1023px) 16vw,
                        16vw
                      "
                    />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-10 md:mt-12">

            {/* Previous Button */}
            <button
              type="button"
              onClick={handlePrevious}
              disabled={isFirstPage}
              aria-label="Previous clients"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-[var(--primary)]/50
                bg-white/5
                px-5
                py-3
                sm:px-6
                sm:py-3.5
                md:px-7
                md:py-4
                text-sm
                sm:text-base
                md:text-lg
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[var(--primary)]
                hover:border-[var(--primary)]
                hover:scale-105
                active:scale-95
                disabled:cursor-not-allowed
                disabled:opacity-30
                disabled:hover:bg-white/5
                disabled:hover:border-[var(--primary)]/50
                disabled:hover:scale-100
              "
            >
              <ArrowLeft
                className="
                  w-5
                  h-5
                  sm:w-6
                  sm:h-6
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
              />

              <span>Previous</span>
            </button>

            {/* Load More / Next Button */}
            <button
              type="button"
              onClick={handleNext}
              disabled={isLastPage}
              aria-label="Next clients"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[var(--primary)]
                px-5
                py-3
                sm:px-6
                sm:py-3.5
                md:px-7
                md:py-4
                text-sm
                sm:text-base
                md:text-lg
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-xl
                active:scale-95
                disabled:cursor-not-allowed
                disabled:opacity-30
                disabled:hover:scale-100
                disabled:hover:shadow-lg
              "
            >
              <span>Load More</span>

              <ArrowRight
                className="
                  w-5
                  h-5
                  sm:w-6
                  sm:h-6
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>

          {/* Page Indicator */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-5">
              {Array.from({ length: totalPages }).map((_, index) => (
                <span
                  key={index}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-500
                    ${
                      index === page
                        ? "w-7 bg-[var(--primary)]"
                        : "w-1.5 bg-white/30"
                    }
                  `}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
