import { useState } from "react";
import { motion } from "framer-motion";
import { config } from "@/data/config";
import { Send, Loader2, CheckCircle, Github, Instagram, Mail } from "lucide-react";
import { SiDiscord } from "react-icons/si";

export default function ContactSection() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSuccess(true);
    setFullName(""); setEmail(""); setMessage("");
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <section id="contact" className="min-h-screen max-w-7xl mx-auto px-6 md:px-10 py-20">
      <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
        <h2 className="bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-4 mb-4 bg-gradient-to-b from-black/80 to-black/50 dark:from-white/80 dark:to-white/20">
          LET&apos;S WORK
          <br />TOGETHER
        </h2>
      </a>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 dark:bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8"
          data-testid="contact-form-card"
        >
          <h3 className="text-2xl font-bold text-foreground mb-2">Contact Form</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Reach me directly at{" "}
            <a href={`mailto:${config.email}`} className="text-foreground underline underline-offset-2" data-testid="link-email">
              {config.email}
            </a>{" "}
            or drop your info below.
          </p>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3 py-8 text-center"
              data-testid="success-message"
            >
              <CheckCircle className="text-green-400" size={40} />
              <p className="text-foreground font-medium">Message sent!</p>
              <p className="text-muted-foreground text-sm">I'll get back to you as soon as possible.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" data-testid="contact-form">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-xs text-muted-foreground" htmlFor="fullname">Full name</label>
                  <input
                    id="fullname"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your Name"
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-white/30 transition"
                    data-testid="input-fullname"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-xs text-muted-foreground" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-white/30 transition"
                    data-testid="input-email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-muted-foreground" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-white/30 transition resize-none"
                  data-testid="input-message"
                />
                <p className="text-xs text-muted-foreground">I'll never share your data with anyone else. Pinky promise!</p>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 bg-foreground text-background rounded-lg px-5 py-3 text-sm font-medium hover:opacity-80 transition-opacity disabled:opacity-50"
                data-testid="button-submit"
              >
                {loading ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending...</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Info panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-6 pt-4 md:pt-8"
        >
          <div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I'm Anshuman — a developer and AI enthusiast. I love building things that are fast, clean, and actually useful. Let's make something great.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { label: "Email", value: config.email, href: `mailto:${config.email}`, icon: <Mail size={14} /> },
              { label: "GitHub", value: "goatshuman", href: config.social.github, icon: <Github size={14} /> },
              { label: "Instagram", value: "v15back", href: config.social.instagram, icon: <Instagram size={14} /> },
              { label: "Discord", value: "goatshuman", href: config.social.discord, icon: <SiDiscord size={14} /> },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 border-b border-white/5 pb-3">
                <span className="text-xs text-muted-foreground w-20 flex items-center gap-1.5">{item.icon}{item.label}</span>
                <a href={item.href} target="_blank" rel="noreferrer" className="text-sm text-foreground hover:underline" data-testid={`link-contact-${item.label.toLowerCase()}`}>
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
