"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  youtubeUrl: string;
}

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
    >
      {projects.map((project) => (
        <motion.a
          key={project.id}
          href={project.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          variants={{
            hidden: {
              y: 50,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              },
            },
          }}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          className="group relative block cursor-pointer"
        >
          <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:border-[var(--primary)]/50 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-2xl">

            {/* Image */}
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-72 xl:h-80 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-black/40 backdrop-blur-sm border border-[var(--primary)]/40 text-[var(--primary)] text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium">
                  {project.category}
                </span>
              </div>

              {/* External Link Icon */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-[var(--primary)]/80 backdrop-blur-sm rounded-full p-2">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Watch Video */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-[var(--primary)] text-white px-5 py-2.5 rounded-full font-semibold text-sm sm:text-base shadow-lg">
                  Watch Video →
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* YouTube Link Text */}
              <div className="mt-5 flex items-center gap-2 text-[var(--primary)] font-semibold text-sm sm:text-base">
                <span>Watch on YouTube</span>

                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}

