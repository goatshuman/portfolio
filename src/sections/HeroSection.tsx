import { motion } from "framer-motion";
import { config } from "@/data/config";
import { Github, FileText } from "lucide-react";
import { BlurIn, BoxReveal } from "@/components/RevealAnimations";
import ScrollDownIcon from "@/components/ScrollDownIcon";

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-screen">
      <div className="grid md:grid-cols-2">
        <div className="h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2] col-span-1 flex flex-col justify-start md:justify-center items-center md:items-start pt-28 sm:pt-0 sm:pb-32 md:p-24 lg:p-40 xl:p-48">
          <div>
            <BlurIn delay={0.7}>
              <p className="md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3 cursor-default sm:text-xl md:text-xl whitespace-nowrap">
                Hi, I am
              </p>
            </BlurIn>
            <BlurIn delay={1}>
              <h1 className="font-black text-6xl text-slate-800 dark:text-white ml-1 text-left cursor-default sm:text-7xl md:text-9xl leading-none">
                {config.author}
              </h1>
            </BlurIn>
            <BlurIn delay={1.2}>
              <p className="md:self-start md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3 cursor-default sm:text-xl md:text-xl whitespace-nowrap">
                AI Enthusiast
              </p>
            </BlurIn>
          </div>

          <div className="mt-8 md:ml-2 flex flex-col gap-3 w-full max-w-xs">
            <motion.a
              href={config.resume}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.4 }}
              className="flex items-center justify-center gap-2 bg-foreground text-background rounded-md px-5 py-2.5 text-sm font-medium hover:opacity-80 transition-opacity w-full"
              data-testid="link-resume"
            >
              <FileText size={16} />
              Resume
            </motion.a>
            <div className="flex gap-3">
              <BoxReveal delay={2.2} width="100%">
                <a
                  href={config.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 border border-border rounded-md px-5 py-2.5 text-sm font-medium hover:bg-white/5 transition-colors w-full"
                  data-testid="link-github"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </BoxReveal>
            </div>
          </div>
        </div>
        <div className="hidden md:grid col-span-1" />
      </div>

      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </section>
  );
}
