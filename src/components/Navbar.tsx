import { Instagram, Facebook, Linkedin, Youtube, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/seanakshay", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Music, href: "#", label: "Spotify" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-glass border-b border-border/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("tour")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Tour
            </button>
            <button
              onClick={() => scrollToSection("music")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Music
            </button>
            <button
              onClick={() => scrollToSection("beats")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Beats
            </button>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="font-signature text-4xl text-primary text-glow">
              Sean Akshay
            </h1>
          </div>

          {/* Right Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover-lift"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
