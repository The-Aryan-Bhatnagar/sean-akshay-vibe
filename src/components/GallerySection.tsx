import performance1 from "@/assets/performance-1.jpg";
import performance2 from "@/assets/performance-2.jpg";
import performance3 from "@/assets/performance-3.jpg";

const GallerySection = () => {
  const images = [
    { src: performance1, alt: "Sean Akshay performing at outdoor festival with massive crowd" },
    { src: performance2, alt: "Sean Akshay DJing at club with purple and red lighting" },
    { src: performance3, alt: "Sean Akshay performing at outdoor event with energetic crowd" },
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg hover-lift hover-glow group shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
