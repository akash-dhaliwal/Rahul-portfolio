"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
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

  /*
   * Automatically calculate how many pages are required.
   *
   * 12 logos = 2 pages
   * 18 logos = 3 pages
   * 20 logos = 4 pages
   * etc.
   */
  const totalPages = Math.ceil(clients.length / LOGOS_PER_PAGE);

  const startIndex = page * LOGOS_PER_PAGE;

  const currentClients = clients.slice(
    startIndex,
    startIndex + LOGOS_PER_PAGE
  );

  const hasMore = page < totalPages - 1;

  const handleLoadMore = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
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

        {/* Logos Area */}
        <div className="w-full px-1 sm:px-2 md:px-4 lg:px-6 xl:px-8">
          <div
            className="
              relative
              w-full
              max-w-7xl
              mx-auto
              overflow-hidden
              min-h-[190px]
              sm:min-h-[210px]
              md:min-h-[150px]
              lg:min-h-[180px]
              xl:min-h-[200px]
            "
          >
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={page}
                initial={{
                  x: "100%",
                }}
                animate={{
                  x: "0%",
                }}
                exit={{
                  x: "-100%",
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  inset-0
                  grid
                  grid-cols-3
                  md:grid-cols-6
                  items-center
                  gap-x-0
                  gap-y-5
                  sm:gap-y-7
                  md:gap-x-1
                  lg:gap-x-2
                  xl:gap-x-3
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
                      px-0
                      overflow-visible
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
                        max-h-24
                        sm:max-h-28
                        md:max-h-32
                        lg:max-h-40
                        xl:max-h-48
                        object-contain
                        brightness-110
                        transition-transform
                        duration-300
                        hover:scale-105
                      "
                      sizes="
                        (max-width: 767px) 33vw,
                        (max-width: 1023px) 16vw,
                        16vw
                      "
                    />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Load More Button */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={
                inView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 15 }
              }
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="flex justify-center mt-8 md:mt-10"
            >
              <button
                type="button"
                onClick={handleLoadMore}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  sm:gap-3
                  rounded-full
                  bg-[var(--primary)]
                  px-6
                  py-2.5
                  sm:px-7
                  sm:py-3
                  md:px-8
                  md:py-3.5
                  text-base
                  sm:text-lg
                  md:text-xl
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-xl
                  active:scale-95
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
            </motion.div>
          )}

          {/* Page Indicator */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-5">
              {Array.from({ length: totalPages }).map((_, index) => (
                <span
                  key={index}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      index === page
                        ? "w-6 bg-[var(--primary)]"
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
