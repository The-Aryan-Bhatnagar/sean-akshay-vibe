import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ShoppingCart, Waves } from "lucide-react";

const BeatsSection = () => {
  const beats = [
    {
      title: "Trap Anthem",
      bpm: 140,
      key: "C Minor",
      price: "$29.99",
    },
    {
      title: "Lo-Fi Dreams",
      bpm: 85,
      key: "A Major",
      price: "$24.99",
    },
    {
      title: "Hard Drill",
      bpm: 145,
      key: "D Minor",
      price: "$34.99",
    },
    {
      title: "R&B Smooth",
      bpm: 92,
      key: "F Major",
      price: "$27.99",
    },
    {
      title: "Boom Bap Classic",
      bpm: 95,
      key: "G Minor",
      price: "$29.99",
    },
    {
      title: "Future Bass",
      bpm: 128,
      key: "E Major",
      price: "$32.99",
    },
  ];

  return (
    <section id="beats" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Buy <span className="text-primary">Beats</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Premium beats for your next hit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beats.map((beat, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all hover-lift hover-glow group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Waves className="w-6 h-6 text-primary" />
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground"
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {beat.title}
                </h3>
                
                <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                  <span>{beat.bpm} BPM</span>
                  <span>•</span>
                  <span>{beat.key}</span>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-2xl font-bold text-primary">
                    {beat.price}
                  </span>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Buy
                  </Button>
                </div>
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
            Browse All Beats
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeatsSection;
