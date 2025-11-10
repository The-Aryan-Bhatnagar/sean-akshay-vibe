import { Button } from "@/components/ui/button";

const MusicSection = () => {
  // Individual tracks - Add your Spotify track embed URLs here
  const spotifyTracks = [
    {
      title: "Taara",
      embedUrl: "https://open.spotify.com/embed/track/TRACK_ID", // Replace with actual track ID
    },
    {
      title: "Dooba",
      embedUrl: "https://open.spotify.com/embed/track/TRACK_ID", // Replace with actual track ID
    },
    {
      title: "Teraa Ho Na Sakaa",
      embedUrl: "https://open.spotify.com/embed/track/TRACK_ID", // Replace with actual track ID
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  title={track.title}
                ></iframe>
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
