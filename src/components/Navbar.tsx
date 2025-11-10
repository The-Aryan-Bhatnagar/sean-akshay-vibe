import { Instagram, Facebook, Linkedin, Youtube, Music } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

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
            <Link
              to="/"
              className={`hover:text-primary transition-colors font-medium ${
                location.pathname === "/" ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/tour"
              className={`hover:text-primary transition-colors font-medium ${
                location.pathname === "/tour" ? "text-primary" : "text-foreground"
              }`}
            >
              Tour
            </Link>
            <Link
              to="/music"
              className={`hover:text-primary transition-colors font-medium ${
                location.pathname === "/music" ? "text-primary" : "text-foreground"
              }`}
            >
              Music
            </Link>
            <Link
              to="/beats"
              className={`hover:text-primary transition-colors font-medium ${
                location.pathname === "/beats" ? "text-primary" : "text-foreground"
              }`}
            >
              Beats
            </Link>
          </div>

          {/* Center Logo */}
          <Link to="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-2xl font-bold text-white tracking-wider hover:text-gray-300 transition-colors">
              SEAN AKSHAY
            </h1>
          </Link>

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
