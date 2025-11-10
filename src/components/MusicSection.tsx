import { Button } from "@/components/ui/button";

const MusicSection = () => {
  const spotifyTracks = [
    {
      title: "Latest Track 1",
      embedUrl: "https://open.spotify.com/embed/artist/4aJnzV0YAC8PHc1pTLHcun",
    },
    {
      title: "Latest Track 2",
      embedUrl: "https://open.spotify.com/embed/artist/4aJnzV0YAC8PHc1pTLHcun",
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
            Stream my latest releases on Spotify
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {spotifyTracks.map((track, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <iframe
                src={track.embedUrl}
                width="100%"
                height="380"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a
              href="https://open.spotify.com/artist/4aJnzV0YAC8PHc1pTLHcun"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All on Spotify
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
