import ProjectGrid from "../components/ProjectGrid";
import { projects } from "../data/projects";

export const metadata = {
  title: "Projects | Rahul - Graphic Designer & Video Editor",
  description:
    "Explore Rahul's graphic design, branding, motion graphics, and video editing projects.",
};

export default function ProjectsPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `linear-gradient(
          to bottom right,
          var(--background),
          color-mix(in srgb, var(--foreground) 5%, var(--background)),
          var(--background)
        )`,
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
      </div>

      <div className="relative z-10 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-5rem)] max-w-7xl mx-auto py-24 md:py-32">

        {/* Header */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[var(--primary)] leading-tight mb-4">
            All Projects
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl">
            Explore my complete collection of graphic design, branding,
            motion graphics, and video production work.
          </p>
        </div>

        {/* All Projects */}
        <ProjectGrid projects={projects} />

      </div>
    </main>
  );
}
