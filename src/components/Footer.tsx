import { config } from "@/data/config";
import { Github, Instagram, Mail } from "lucide-react";
import { SiDiscord } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 flex w-full shrink-0 flex-col items-center gap-4 border-t border-border/30 px-4 py-8 sm:flex-row md:px-10 sm:justify-between bg-background/50 backdrop-blur-sm">
      <p className="text-xs text-muted-foreground">
        © {year} {config.author}. All rights reserved.
      </p>
      <div className="flex items-center gap-5">
        <a href={config.social.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-github" aria-label="GitHub">
          <Github size={16} />
        </a>
        <a href={config.social.instagram} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-instagram" aria-label="Instagram">
          <Instagram size={16} />
        </a>
        <a href={config.social.discord} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-discord" aria-label="Discord">
          <SiDiscord size={16} />
        </a>
        <a href={`mailto:${config.email}`} className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-email" aria-label="Email">
          <Mail size={16} />
        </a>
      </div>
      <nav className="flex gap-4 sm:gap-6 z-10">
        {["Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            data-testid={`link-footer-${item.toLowerCase()}`}
          >
            {item}
          </a>
        ))}
      </nav>
    </footer>
  );
}
