import Hero from "./components/Hero";
import Clients from "./components/clients";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hope Films | Film & Media Production Company in Punjab",

  description:
    "Hope Films is a film and media production company specializing in TVC commercials, ad films, brand promotions, video editing, live event coverage, product photography, videography and digital marketing.",

  keywords: [
    "Hope Films",
    "Film Production Company",
    "Media Production Company",
    "Video Production",
    "TVC Commercials",
    "Ad Films",
    "Brand Promotion",
    "Corporate Videos",
    "Video Editing",
    "Live Event Coverage",
    "Product Photography",
    "Product Videography",
    "Digital Marketing",
    "Film Production Punjab",
    "Video Production Punjab",
    "Faridkot Video Production",
  ],

  authors: [{ name: "Hope Films" }],
  creator: "Hope Films",
  publisher: "Hope Films",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hopefilms.in",
    siteName: "Hope Films",
    title: "Hope Films | Film & Meida Production",
    description:
      "Hope Films brings brands and stories to life through TVC commercials, ad films, brand promotions, cinematic video production, live event coverage, product photography, videography and digital content.",
    images: [
      {
        url: "https://github.com/akash-dhaliwal/Rahul-portfolio/blob/main/public/assets/tabicon.png",
        alt: "Hope Films - Film & Media Production",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hope Films | Film & Meida Production",
    description:
      "Creative film and media production for brands, businesses and events. TVCs, ad films, brand promotions, video editing, event coverage, product visuals and digital content.",
    images: ["https://github.com/akash-dhaliwal/Rahul-portfolio/blob/main/public/assets/tabicon.png?raw=true"],
  },
};



export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Unified Pure Black Background for All Sections */}
      <div className="relative w-full bg-[#0A0A0A]">
        <div className="relative z-10">
          {/* Clients Section */}
          <Clients />

          {/* Projects Section */}
          <Projects />

          {/* Services Section */}
          <Services />

          {/* About Section */}
          <About />

          {/* Contact Section */}
          <Contact />
        </div>
      </div>
    </>
  );
}
