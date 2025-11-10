import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import heroPhoto1 from "@/assets/hero-photo-1.jpg";
import heroPhoto2 from "@/assets/hero-photo-2.jpg";
import heroPhoto3 from "@/assets/hero-photo-3.jpg";

const HeroSection = () => {
  const defaultImages = [heroPhoto1, heroPhoto2, heroPhoto3];
  const [images, setImages] = useState<string[]>(defaultImages);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Fetch hero images from database
    const fetchImages = async () => {
      const { data } = await supabase
        .from('hero_images')
        .select('image_url')
        .eq('is_active', true)
        .order('display_order');
      
      if (data && data.length > 0) {
        setImages(data.map(img => img.image_url));
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

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

      {/* Content removed - photos only */}
    </section>
  );
};

export default HeroSection;
