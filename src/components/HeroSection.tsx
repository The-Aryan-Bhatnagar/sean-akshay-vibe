import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="container mx-auto px-6 text-center animate-fade-in-up">
        <h1 className="text-7xl md:text-9xl font-bold mb-8 text-foreground tracking-tight">
          SEAN AKSHAY
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Independent Rapper, Producer & Songwriter from Agra, India
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-[hsl(348,100%,50%)] hover:bg-[hsl(348,100%,45%)] text-white px-8 min-w-[200px]"
          >
            Listen on Spotify
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-muted-foreground text-foreground hover:bg-muted min-w-[200px]"
          >
            Watch on YouTube
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[hsl(348,100%,50%)] text-[hsl(348,100%,50%)] hover:bg-[hsl(348,100%,50%)] hover:text-white min-w-[200px]"
          >
            Book for Collab
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
