import { Instagram, Facebook, Youtube, Music, Apple, Radio, Settings, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const location = useLocation();
  const { isAdmin } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/seanakshay", label: "Instagram" },
    { icon: Music, href: "https://open.spotify.com/artist/4aJnzV0YAC8PHc1pTLHcun", label: "Spotify" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UC-PShwYLTLCcshR9iKBJGyg", label: "YouTube" },
    { icon: Facebook, href: "https://www.facebook.com/SEANAKSHAY01/", label: "Facebook" },
    { icon: Apple, href: "https://music.apple.com/in/artist/sean-akshay/1500987521", label: "Apple Music" },
    { icon: Radio, href: "https://www.jiosaavn.com/artist/sean-akshay-songs/sDPCtKPn8ZA_", label: "JioSaavn" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${
      location.pathname === "/" ? "bg-transparent" : "backdrop-blur-glass"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="text-foreground hover:text-primary transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <div className="flex flex-col gap-6 mt-8">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium hover:text-primary transition-colors ${
                    location.pathname === "/" ? "text-primary" : "text-foreground"
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/tour"
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium hover:text-primary transition-colors ${
                    location.pathname === "/tour" ? "text-primary" : "text-foreground"
                  }`}
                >
                  Tour
                </Link>
                <Link
                  to="/music"
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium hover:text-primary transition-colors ${
                    location.pathname === "/music" ? "text-primary" : "text-foreground"
                  }`}
                >
                  Music
                </Link>
                <Link
                  to="/beats"
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium hover:text-primary transition-colors ${
                    location.pathname === "/beats" ? "text-primary" : "text-foreground"
                  }`}
                >
                  Beats
                </Link>
                {isAdmin && (
                  <Link
                    to="/admin"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    Admin
                  </Link>
                )}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Left Navigation - Desktop Only */}
          <div className="hidden md:flex items-center gap-8">
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
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wider hover:text-gray-300 transition-colors">
              SEAN AKSHAY
            </h1>
          </Link>

          {/* Right Social Icons - Desktop Only */}
          <div className="hidden md:flex items-center gap-3">
            {isAdmin && (
              <Link
                to="/admin"
                className="text-muted-foreground hover:text-primary transition-colors hover-lift"
                aria-label="Admin Panel"
              >
                <Settings className="w-5 h-5" />
              </Link>
            )}
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

          {/* Mobile Right Spacer */}
          <div className="md:hidden w-6"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
