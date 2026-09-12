import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rahul | Graphic Designer & Video Editor Portfolio",
  description:
    "Graphic Designer & Video Editor with expertise in Adobe Photoshop, Adobe Illustrator, Adobe After Effects, Adobe Premiere Pro, and Adobe XD. Passionate about creating visual stories that inspire and engage.",
  keywords: [
    "Graphic Designer",
    "Video Editor",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "Adobe XD",
  ],
  robots: "index, follow",
  openGraph: {
    images:
      "https://i.ibb.co/3PJzhXw/B58-A4-A9-C-C3-BE-4-E18-AEDD-8639-B169-A57-D.png",
    title: "Rahul | Graphic Designer & Video Editor Portfolio",
    description:
      "Graphic Designer & Video Editor with expertise in Adobe Photoshop, Adobe Illustrator, Adobe After Effects, Adobe Premiere Pro, and Adobe XD. Passionate about creating visual stories that inspire and engage.",
  },
  twitter: {
    images:
      "https://i.ibb.co/3PJzhXw/B58-A4-A9-C-C3-BE-4-E18-AEDD-8639-B169-A57-D.png",
    title: "Rahul | Graphic Designer & Video Editor Portfolio",
    description:
      "Graphic Designer & Video Editor with expertise in Adobe Photoshop, Adobe Illustrator, Adobe After Effects, Adobe Premiere Pro, and Adobe XD. Passionate about creating visual stories that inspire and engage.",
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Unified Pure Black Background for All Sections */}
      <div className="relative w-full bg-[#0A0A0A]">
        {/* Sections Container */}
        <div className="relative z-10">
          <About />
          <Projects />
          <Services />
          <Contact />
        </div>
      </div>
    </>
  );
}
