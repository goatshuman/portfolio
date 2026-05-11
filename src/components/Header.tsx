import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { config } from "@/data/config";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X, Github, Instagram, Mail } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { themeDisclaimers } from "@/data/constants";

const NAV_LINKS = [
  { title: "Home", href: "#hero" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [disclaimer, setDisclaimer] = useState("");

  const handleThemeToggle = () => {
    toggleTheme();
    const list = theme === "dark" ? themeDisclaimers.light : themeDisclaimers.dark;
    const msg = list[Math.floor(Math.random() * list.length)];
    setDisclaimer(msg);
    setTimeout(() => setDisclaimer(""), 3000);
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-14 md:h-16"
        style={{
          background: isOpen ? "hsl(var(--background) / 0.85)" : "transparent",
          backdropFilter: isOpen ? "blur(12px)" : "none",
          transition: "background 0.4s, backdrop-filter 0.4s",
        }}
      >
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          className="text-sm font-bold tracking-wide text-foreground hover:opacity-70 transition-opacity"
          data-testid="link-home"
        >
          {config.author}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid={`link-${link.title.toLowerCase()}`}
            >
              {link.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            data-testid="button-theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} className="text-white/80" /> : <Moon size={16} className="text-black/80" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            data-testid="button-menu"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} className="text-foreground" /> : <Menu size={18} className="text-foreground" />}
          </button>
        </div>
      </motion.header>

      {/* Disclaimer toast */}
      <AnimatePresence>
        {disclaimer && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] bg-black/90 text-white text-xs px-4 py-2 rounded-full border border-white/10 max-w-xs text-center"
          >
            {disclaimer}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-screen nav overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="nav-overlay"
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 28px)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 40px) 28px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 28px)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-4xl md:text-6xl font-bold text-foreground hover:opacity-50 transition-opacity"
                  data-testid={`mobile-link-${link.title.toLowerCase()}`}
                >
                  {link.title}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-6 mt-16"
            >
              <a href={config.social.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href={config.social.instagram} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href={config.social.discord} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Discord">
                <SiDiscord size={20} />
              </a>
              <a href={`mailto:${config.email}`} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
