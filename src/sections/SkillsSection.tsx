import { motion } from "framer-motion";
import { BoxReveal } from "@/components/RevealAnimations";
import { SKILLS } from "@/data/constants";

export default function SkillsSection() {
  const allSkills = Object.values(SKILLS);

  return (
    <section id="skills" className="w-full h-screen md:h-[150dvh]">
      <div className="top-[70px] sticky mb-96">
        <a
          href="#skills"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <BoxReveal width="100%">
            <h2 className="bg-clip-text text-4xl text-center text-transparent md:text-7xl bg-gradient-to-b from-black/80 to-black/50 dark:from-white/80 dark:to-white/20">
              SKILLS
            </h2>
          </BoxReveal>
        </a>

        <p className="mx-auto mt-4 max-w-3xl font-normal text-base text-center text-neutral-500 dark:text-neutral-300">
          (hint: hover the keyboard keys)
        </p>

        {/* Skills badges grid */}
        <div className="mt-12 px-6 md:px-24 flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
          {allSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-xs text-white/70 hover:bg-white/10 transition-colors group"
              data-testid={`skill-badge-${skill.name}`}
            >
              <img
                src={skill.icon}
                alt={skill.label}
                className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                style={{ filter: skill.color === "#fff" ? "brightness(0) invert(1)" : "none" }}
              />
              {skill.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
