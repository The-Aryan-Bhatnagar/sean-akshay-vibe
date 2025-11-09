import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Music2 } from "lucide-react";

const MusicSection = () => {
  const releases = [
    {
      title: "Midnight Vibes",
      type: "Single",
      year: "2024",
    },
    {
      title: "Summer Nights EP",
      type: "EP",
      year: "2024",
    },
    {
      title: "Dreams & Reality",
      type: "Album",
      year: "2023",
    },
    {
      title: "Late Night Sessions",
      type: "Mixtape",
      year: "2023",
    },
  ];

  return (
    <section id="music" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Latest <span className="text-primary">Music</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Stream my latest releases on all platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {releases.map((release, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all hover-lift hover-glow group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Music2 className="w-20 h-20 text-primary/30" />
                </div>
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-16 h-16 p-0"
                  >
                    <Play className="w-6 h-6 ml-1" />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {release.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {release.type} • {release.year}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Releases
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
