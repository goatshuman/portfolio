import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import projects, { Project } from "@/data/projects";

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
      data-testid="project-modal-overlay"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="bg-zinc-900/95 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-auto"
        data-testid="project-modal"
      >
        <div className="relative">
          <img
            src={project.src}
            alt={project.title}
            className="w-full h-56 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
            data-testid="button-close-modal"
          >
            <X size={16} />
          </button>
          <span className="absolute bottom-4 left-4 bg-white/10 backdrop-blur text-white text-xs rounded-full px-3 py-1">
            {project.category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span key={tech} className="bg-white/5 border border-white/10 text-white/70 text-xs rounded-full px-3 py-1" data-testid={`tech-badge-${tech}`}>
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white text-black rounded-lg px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors"
              data-testid="link-project-live"
            >
              <ExternalLink size={14} />
              Visit
            </a>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-white/20 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-white/5 transition-colors"
                data-testid="link-project-repo"
              >
                <Github size={14} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.4 }}
        onClick={() => setOpen(true)}
        className="relative cursor-pointer group rounded-xl overflow-hidden"
        style={{ aspectRatio: "3/2" }}
        data-testid={`card-project-${index}`}
      >
        <img
          src={project.src}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
        <div className="absolute bottom-0 left-0 p-5">
          <p className="text-white font-bold text-lg leading-tight">{project.title}</p>
          <span className="inline-block mt-1.5 bg-white text-black text-xs rounded-full px-2.5 py-0.5">
            {project.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur rounded-full p-2">
          <ExternalLink size={14} className="text-white" />
        </div>
      </motion.div>

      <AnimatePresence>
        {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 md:px-10 md:min-h-screen py-20">
      <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
        <h2 className="bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-4 mb-16 bg-gradient-to-b from-black/80 to-black/50 dark:from-white/80 dark:to-white/20">
          Projects
        </h2>
      </a>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
