import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Ticket } from "lucide-react";

const TourSection = () => {
  const tourDates = [
    {
      date: "Dec 15, 2025",
      city: "Los Angeles",
      venue: "The Roxy Theatre",
      country: "USA",
    },
    {
      date: "Dec 22, 2025",
      city: "New York",
      venue: "Webster Hall",
      country: "USA",
    },
    {
      date: "Jan 5, 2026",
      city: "London",
      venue: "Electric Brixton",
      country: "UK",
    },
    {
      date: "Jan 12, 2026",
      city: "Toronto",
      venue: "Velvet Underground",
      country: "Canada",
    },
  ];

  return (
    <section id="tour" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Tour <span className="text-primary">Dates</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Catch me live at these upcoming shows
          </p>
        </div>

        <div className="space-y-4">
          {tourDates.map((show, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-colors hover-lift p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 flex-1">
                  <div className="flex items-center gap-3 text-primary min-w-[140px]">
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold">{show.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-semibold text-foreground">
                        {show.city}, {show.country}
                      </p>
                      <p className="text-sm text-muted-foreground">{show.venue}</p>
                    </div>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow">
                  <Ticket className="mr-2 h-4 w-4" />
                  Get Tickets
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourSection;
