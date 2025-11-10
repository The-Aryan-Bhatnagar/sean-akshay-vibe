import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import NewsSection from "@/components/NewsSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <NewsSection />
    </div>
  );
};

export default Home;
