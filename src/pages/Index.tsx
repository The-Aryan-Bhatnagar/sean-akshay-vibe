import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TourSection from "@/components/TourSection";
import MusicSection from "@/components/MusicSection";
import BeatsSection from "@/components/BeatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TourSection />
      <MusicSection />
      <BeatsSection />
      <Footer />
    </div>
  );
};

export default Index;
