export type Project = {
  title: string;
  description: string;
  category: string;
  src: string;
  live: string;
  repo?: string;
  techStack: string[];
};

const projects: Project[] = [
  {
    title: "FitPulse",
    description: "A fitness tracker landing page with a clean, modern design. Built to showcase workout stats, health goals, and motivational UI in a high-performance static site.",
    category: "Landing Page",
    src: "https://opengraph.githubassets.com/1/goatshuman/fitpulse",
    live: "https://github.com/goatshuman/fitpulse",
    repo: "https://github.com/goatshuman/fitpulse",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "BuildFlow",
    description: "A developer productivity platform landing page. Designed for teams that want to ship faster — clean layout, feature highlights, and a compelling call-to-action.",
    category: "Landing Page",
    src: "https://opengraph.githubassets.com/1/goatshuman/buildflow",
    live: "https://github.com/goatshuman/buildflow",
    repo: "https://github.com/goatshuman/buildflow",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Luminary Cafe",
    description: "A stunning cafe and restaurant website with rich visuals, menu displays, and an elegant layout. Perfect blend of design and usability for a hospitality brand.",
    category: "Restaurant",
    src: "https://opengraph.githubassets.com/1/goatshuman/luminary-cafe",
    live: "https://github.com/goatshuman/luminary-cafe",
    repo: "https://github.com/goatshuman/luminary-cafe",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Nexa Tasks",
    description: "A task management SaaS landing page built to convert. Features pricing tables, feature highlights, and a slick dark UI that communicates productivity and trust.",
    category: "SaaS",
    src: "https://opengraph.githubassets.com/1/goatshuman/nexa-tasks",
    live: "https://github.com/goatshuman/nexa-tasks",
    repo: "https://github.com/goatshuman/nexa-tasks",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "SnapVault",
    description: "A photography portfolio site with a minimal, editorial design. Showcases galleries, full-screen image previews, and a clean grid layout built for visual storytelling.",
    category: "Portfolio",
    src: "https://opengraph.githubassets.com/1/goatshuman/snapvault",
    live: "https://github.com/goatshuman/snapvault",
    repo: "https://github.com/goatshuman/snapvault",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
];

export default projects;
