"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Palette, Video, Zap, Building2, Camera, Megaphone } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Video Editing",
    description:
      "Professional video editing that transforms raw footage into engaging and polished visual stories. From social media content to cinematic projects, every edit is crafted with attention to pacing, visuals, sound, and storytelling.",
    image: "/assets/services/service-image1.png",
    icon: <Video className="w-8 h-8" />,
    features: [
      "Reels & Shorts",
      "Cinematic Editing",
      "Color Grading",
      "Sound Design",
    ],
  },
  {
    id: 2,
    title: "Brand Promotions",
    description:
      "Creative promotional content designed to make your brand stand out. Combining strong visuals, engaging storytelling, and modern editing techniques to create content that connects with your audience.",
    image: "/assets/services/service-image2.png",
    icon: <Megaphone className="w-8 h-8" />,
    features: [
      "Brand Videos",
      "Social Campaigns",
      "Promotional Reels",
      "Creative Content",
    ],
  },
  {
    id: 3,
    title: "TVC Commercial & Ad Films",
    description:
      "High-quality commercial and advertising films created to communicate your product or brand message with impact. From concept and visuals to editing and final delivery, every detail is crafted for professional results.",
    image: "/assets/services/service-image3.png",
    icon: <Zap className="w-8 h-8" />,
    features: [
      "TVC Commercials",
      "Ad Films",
      "Product Ads",
      "Cinematic Visuals",
    ],
  },
  {
    id: 4,
    title: "Live Event Coverage",
    description:
      "Professional coverage of live events with dynamic visuals that capture the atmosphere, energy, and important moments. Ideal for concerts, corporate events, launches, weddings, and special occasions.",
    image: "/assets/services/service-image4.png",
    icon: <Camera className="w-8 h-8" />,
    features: [
      "Event Coverage",
      "Multi-Camera Setup",
      "Highlight Videos",
      "Live Moments",
    ],
  },
  {
    id: 5,
    title: "Product Photography & Videography",
    description:
      "Professional product visuals created to showcase your products in the best possible way. From clean commercial photography to engaging product videos, every shot is designed to attract attention and communicate value.",
    image: "/assets/services/service-image5.png",
    icon: <Palette className="w-8 h-8" />,
    features: [
      "Product Photography",
      "Product Videos",
      "Commercial Shoots",
      "Creative Visuals",
    ],
  },
  {
    id: 6,
    title: "Digital Marketing",
    description:
      "Creative digital marketing solutions that help brands build a stronger online presence. From social media content to promotional campaigns, we combine creative design and video with digital strategies.",
    image: "/assets/services/service-image6.png",
    icon: <Building2 className="w-8 h-8" />,
    features: [
      "Social Media",
      "Content Strategy",
      "Campaign Creatives",
      "Brand Growth",
    ],
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="services"
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-24 lg:py-28"
    >
      {/* Main Container */}
      <div className="relative z-10 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-5rem)] max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 lg:mb-20 text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[var(--primary)] leading-tight mb-4">
            Services
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto">
            Creative solutions that bring your brand, products, and stories to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Service Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:border-white/40 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-2xl">
                {/* Image Section */}
                <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 md:p-10">
                  <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6 md:mb-8">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                      >
                        <p className="text-xs sm:text-sm md:text-base text-white/90 font-medium text-center">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
