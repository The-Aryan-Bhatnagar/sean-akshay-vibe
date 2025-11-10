import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroPhoto1 from "@/assets/hero-photo-1.jpg";
import heroPhoto2 from "@/assets/hero-photo-2.jpg";
import heroPhoto3 from "@/assets/hero-photo-3.jpg";

const HeroSection = () => {
  const images = [heroPhoto1, heroPhoto2, heroPhoto3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Sean Akshay performance ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in-up">
        <h1 className="text-7xl md:text-9xl font-bold mb-8 text-white tracking-tight">
          SEAN AKSHAY
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
