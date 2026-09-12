"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full bg-black overflow-hidden"
    >
      <div className="relative w-full aspect-video">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/TlMlgzh-BwA?autoplay=1&mute=1&loop=1&playlist=TlMlgzh-BwA&controls=0&rel=0"
          title="Highlight Section"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </section>
  );
}
