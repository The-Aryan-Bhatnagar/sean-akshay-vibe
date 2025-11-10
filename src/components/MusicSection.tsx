import { Button } from "@/components/ui/button";

const MusicSection = () => {
  // Individual tracks
  const spotifyTracks = [
    {
      embedUrl: "https://open.spotify.com/embed/track/4Cq2JdlBJ5IfdbPGextwyy",
    },
    {
      embedUrl: "https://open.spotify.com/embed/track/7c9COxXbs88OZLLQyOWo6N",
    },
    {
      embedUrl: "https://open.spotify.com/embed/track/7EEmwFot4kseYyBKCXmVl4",
    },
    {
      embedUrl: "https://open.spotify.com/embed/track/4jBSyQMtAloSLMsDOWCQTV",
    },
  ];

  // YouTube videos - Add your YouTube video IDs here
  const youtubeVideos = [
    {
      title: "Taara - Official Music Video",
      videoId: "VIDEO_ID", // Replace with actual video ID
    },
    {
      title: "Dooba - Official Music Video",
      videoId: "VIDEO_ID", // Replace with actual video ID
    },
  ];

  return (
    <section id="music" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Spotify Section */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Latest <span className="text-primary">Music</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Stream my latest releases on Spotify
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {spotifyTracks.map((track, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden animate-fade-in-up shadow-lg hover:shadow-xl transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <iframe
                  src={track.embedUrl}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            ))}
          </div>

          {/* Artist Profile Player */}
          <div className="rounded-lg overflow-hidden animate-fade-in-up shadow-lg max-w-2xl mx-auto mb-12">
            <iframe
              src="https://open.spotify.com/embed/artist/4aJnzV0YAC8PHc1pTLHcun"
              width="100%"
              height="380"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-lg"
            ></iframe>
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

        {/* YouTube Section */}
        <div>
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Music <span className="text-primary">Videos</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Watch my latest music videos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {youtubeVideos.map((video, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden animate-fade-in-up shadow-lg hover:shadow-xl transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    loading="lazy"
                    className="rounded-lg"
                    title={video.title}
                  ></iframe>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a
                href="https://www.youtube.com/channel/UC-PShwYLTLCcshR9iKBJGyg"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All on YouTube
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
