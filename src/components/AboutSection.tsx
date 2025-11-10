const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground">
          The Journey of Sean Akshay
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-lg">
            <div className="w-full h-[500px] bg-muted flex items-center justify-center text-muted-foreground">
              [Your Photo Here]
            </div>
          </div>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Sean Akshay is an independent artist from Agra, India, whose music paints a vivid picture of
              modern life, love, and ambition. He began his journey by turning personal stories into
              powerful rhymes, blending Hindi rap with contemporary pop and chillwave sounds.
            </p>
            <p>
              Inspired by both global icons and the raw energy of his hometown, Sean's sound is a unique
              fusion of emotional depth and rhythmic complexity. He writes, produces, and performs his
              own work, maintaining full creative control to deliver an authentic and unfiltered
              experience.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 italic text-foreground">
              "Every emotion is a fuel; rhythm and rhyme set the fire."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
