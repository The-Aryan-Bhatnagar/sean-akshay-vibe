const NewsSection = () => {
  const news = [
    {
      date: "October 26, 2023",
      title: "New Single Out Now – Teraa Ho Naa Sakaaa",
      description:
        "Sean Akshay's latest single, 'Teraa Ho Naa Sakaaa,' is a heartfelt track that explores themes of love and loss. Stream it now on all major platforms.",
    },
    {
      date: "September 15, 2023",
      title: "Live Studio Session in Agra",
      description:
        "We went behind the scenes with Sean in his Agra studio for an exclusive live performance of his upcoming tracks.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground">
          News & Updates
        </h2>
        <div className="space-y-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-card border-l-4 border-primary rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
