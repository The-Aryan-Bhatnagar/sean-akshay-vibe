import { Button } from "@/components/ui/button";

const MusicSection = () => {
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

        <div className="rounded-lg overflow-hidden animate-fade-in-up shadow-lg max-w-2xl mx-auto">
          <iframe
            src="https://open.spotify.com/embed/artist/4aJnzV0YAC8PHc1pTLHcun"
            width="100%"
            height="500"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>

        <div className="text-center mt-12">
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
