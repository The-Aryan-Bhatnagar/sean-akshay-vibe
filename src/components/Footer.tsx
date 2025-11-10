import { Instagram, Facebook, Youtube, Music, Apple, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/seanakshay", label: "Instagram" },
    { icon: Music, href: "https://open.spotify.com/artist/4aJnzV0YAC8PHc1pTLHcun", label: "Spotify" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UC-PShwYLTLCcshR9iKBJGyg", label: "YouTube" },
    { icon: Facebook, href: "https://www.facebook.com/SEANAKSHAY01/", label: "Facebook" },
    { icon: Apple, href: "https://music.apple.com/in/artist/sean-akshay/1500987521", label: "Apple Music" },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <h2 className="font-signature text-5xl text-primary text-glow">
            Sean Akshay
          </h2>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover-lift"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          {/* Contact */}
          <a
            href="mailto:contact@seanakshay.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>contact@seanakshay.com</span>
          </a>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground border-t border-border pt-8 w-full">
            <p>&copy; {currentYear} Sean Akshay. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
