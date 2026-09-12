"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full bg-black overflow-hidden"
    >
      {/* YouTube Video */}
      <div className="relative w-full aspect-video">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/TlMlgzh-BwA?autoplay=1&mute=1&loop=1&playlist=TlMlgzh-BwA&controls=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0"
          title="Highlight Section"
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
        />

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs font-medium tracking-wider uppercase">
              Scroll
            </span>

            <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
