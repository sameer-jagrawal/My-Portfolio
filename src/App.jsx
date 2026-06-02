import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Atom,
  Award,
  Boxes,
  BriefcaseBusiness,
  Braces,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cloud,
  Database,
  Download,
  ExternalLink,
  FileCode,
  GitBranch,
  Github,
  GraduationCap,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Moon,
  Palette,
  Rocket,
  Send,
  Server,
  Sparkles,
  Star,
  UserRound,
  Wind,
  X,
  Zap,
} from "lucide-react";

const navItems = ["Home", "About", "Education", "Skills", "Projects", "Certificates", "Testimonials", "Contact"];

const roles = ["MERN Stack Developer", "React UI Builder", "Frontend Engineer", "Animation Lover", "Problem Solver"];

const stats = [
  { value: "9+", label: "Months Practice" },
  { value: "10+", label: "Projects" },
  { value: "6+", label: "Certificates" },
];

const featureCards = [
  { icon: Rocket, title: "MERN Stack", text: "Full-stack thinking with React, Node, Express and MongoDB." },
  { icon: Zap, title: "Fast UI", text: "Interfaces that feel responsive, lively and easy to scan." },
  { icon: Code2, title: "Clean Code", text: "Component-driven structure with reusable data and motion patterns." },
  { icon: Sparkles, title: "Micro Motion", text: "Scroll reveals, floating cards, magnetic hover states and animated text." },
];

const education = [
  {
    icon: GraduationCap,
    title: "Bachelor Degree",
    place: "University of Rajasthan, Jaipur",
    year: "2022",
    score: "CGPA 7.8/10",
    tags: ["Self-learning", "Web Development", "JavaScript", "Problem Solving"],
  },
  {
    icon: Award,
    title: "Higher Secondary",
    place: "Kendriya Vidyalaya No. 4, Jaipur",
    year: "2019",
    score: "76%",
    tags: ["Arts", "English", "Hindi", "Social Science"],
  },
  {
    icon: Star,
    title: "Secondary School",
    place: "Kendriya Vidyalaya No. 4, Jaipur",
    year: "2017",
    score: "70%",
    tags: ["Mathematics", "Science", "English", "Hindi"],
  },
];

const skillTabs = {
  Frontend: [
    ["React.js", 88],
    ["JavaScript ES6+", 90],
    ["HTML5", 96],
    ["Tailwind CSS", 92],
    ["Redux Toolkit", 74],
  ],
  Backend: [
    ["Node.js", 82],
    ["Express.js", 80],
    ["REST APIs", 84],
    ["Authentication", 76],
  ],
  Database: [
    ["MongoDB", 83],
    ["Mongoose", 78],
    ["Aggregation", 70],
  ],
  Tools: [
    ["Git & GitHub", 88],
    ["Postman", 84],
    ["Vercel", 82],
    ["Responsive QA", 86],
  ],
};

const skillMarquee = ["MongoDB", "Express", "React", "Node.js", "JavaScript", "HTML5", "CSS3", "Tailwind", "Git", "Postman", "GitHub"];

const techMeta = {
  React: { icon: Atom, color: "#c77dff" },
  "React.js": { icon: Atom, color: "#c77dff" },
  "Node.js": { icon: Server, color: "#c77dff" },
  Express: { icon: Server, color: "#f5f5f5" },
  "Express.js": { icon: Server, color: "#f5f5f5" },
  MongoDB: { icon: Leaf, color: "#b13cff" },
  Mongoose: { icon: Database, color: "#ff2a55" },
  JavaScript: { icon: Braces, color: "#c77dff" },
  "JavaScript ES6+": { icon: Braces, color: "#c77dff" },
  HTML5: { icon: FileCode, color: "#ff2a55" },
  CSS3: { icon: Palette, color: "#c77dff" },
  "Tailwind CSS": { icon: Wind, color: "#b13cff" },
  Tailwind: { icon: Wind, color: "#b13cff" },
  "Redux Toolkit": { icon: Boxes, color: "#b13cff" },
  "Git & GitHub": { icon: GitBranch, color: "#ff2a55" },
  Git: { icon: GitBranch, color: "#ff2a55" },
  GitHub: { icon: Github, color: "#ffffff" },
  Postman: { icon: Send, color: "#ff2a55" },
  Vercel: { icon: Cloud, color: "#ffffff" },
  "Next.js": { icon: Code2, color: "#ffffff" },
  "REST APIs": { icon: Braces, color: "#c77dff" },
  Authentication: { icon: CheckCircle2, color: "#c77dff" },
  Aggregation: { icon: Database, color: "#b13cff" },
  "Responsive QA": { icon: Sparkles, color: "#c77dff" },
  CSS: { icon: Palette, color: "#c77dff" },
  Responsive: { icon: Sparkles, color: "#c77dff" },
  "UI Design": { icon: Palette, color: "#c77dff" },
  APIs: { icon: Braces, color: "#c77dff" },
};

const projects = [
  {
    title: "Swoo Tech Mart",
    type: "Full-stack e-commerce",
    description:
      "Product browsing, filters, authentication, cart, order flow and admin controls wrapped in a polished responsive storefront.",
    stack: ["Next.js", "React", "Redux", "Tailwind", "MongoDB"],
    live: "https://swoo-ishop.vercel.app/",
    code: "https://github.com/dishantsaini25/Ishop-Frontend.git",
    accent: "from-purple-950 via-purple-900 to-carbon",
  },
  {
    title: "BusyGrowth",
    type: "Digital agency site",
    description:
      "A crisp service website with conversion-focused sections, responsive composition and clean visual hierarchy.",
    stack: ["React", "CSS", "Responsive", "UI Design"],
    live: "https://busygrowth.in/",
    code: "https://github.com/dishantsaini25/busyGrowth.git",
    accent: "from-purple-800 via-purple-950 to-carbon",
  },
  {
    title: "Mini Web Apps",
    type: "API utility collection",
    description:
      "Movie search, weather lookup and translator tools built around external APIs with lightweight interaction design.",
    stack: ["HTML5", "CSS3", "JavaScript", "APIs"],
    live: "https://api-project-ruddy-nine.vercel.app/movie.html",
    code: "https://github.com/dishantsaini25/Api-Project.git",
    accent: "from-purple-700 via-purple-900 to-carbon",
  },
];

const certificates = [
  "Responsive Magic",
  "Cascading Creativity",
  "JavaScript DOMinate",
  "Cyber Secure User",
  "Ethical Hacking",
  "IT Essentials",
];

const testimonials = [
  {
    name: "Project Mentor",
    text: "Sameer keeps pushing until the interface feels finished, not just functional.",
  },
  {
    name: "Hackathon Teammate",
    text: "He is quick with React layouts and patient with the little details that make a product feel better.",
  },
  {
    name: "Learning Partner",
    text: "Strong self-learning habit, clean communication and a habit of shipping visible progress.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 46, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const delay = deleting ? 42 : 82;
    const pause = !deleting && text === word ? 1100 : deleting && text === "" ? 260 : delay;
    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      } else {
        setText(word.slice(0, deleting ? text.length - 1 : text.length + 1));
      }
    }, pause);
    return () => clearTimeout(timer);
  }, [deleting, text, wordIndex, words]);

  return text;
}

function scrollToId(label) {
  const el = document.getElementById(label.toLowerCase());
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function TechBadge({ name, compact = false }) {
  const meta = techMeta[name] || { icon: Code2, color: "#c77dff" };
  const Icon = meta.icon;

  return (
    <span className={`tech-badge ${compact ? "tech-badge-compact" : ""}`} style={{ "--brand": meta.color }}>
      <span className="tech-icon">
        <Icon size={compact ? 15 : 18} strokeWidth={2.2} />
      </span>
      <span>{name}</span>
    </span>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="max-w-3xl mx-auto mb-12 text-center"
    >
      <span className="section-chip">{eyebrow}</span>
      <h2 className="mt-5 text-4xl font-semibold font-display text-soft md:text-5xl">
        {title.split(" ").slice(0, -1).join(" ")}{" "}
        <span className="text-gradient">{title.split(" ").slice(-1)}</span>
      </h2>
      <p className="mt-5 text-lg leading-8 text-soft/60">{text}</p>
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-soft/10 bg-ink/70 backdrop-blur-2xl"
    >
      <nav className="flex items-center justify-between h-20 px-5 mx-auto max-w-7xl">
        <button onClick={() => scrollToId("Home")} className="flex items-center gap-3 group">
          <span className="grid text-sm font-semibold text-white bg-purple-600 rounded-full size-10 place-items-center shadow-glow">S</span>
          <span className="text-2xl font-semibold font-display text-soft">Sameer<span className="text-purple-500">.</span></span>
        </button>

        <div className="items-center hidden gap-1 lg:flex">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollToId(item)} className="nav-link">
              {item}
            </button>
          ))}
          <a href="/resume.pdf" className="inline-flex items-center gap-2 px-5 py-2.5 ml-2 text-sm font-semibold text-white transition bg-purple-600 rounded-full shadow-glow hover:bg-purple-500">
            <Download size={16} /> Resume
          </a>
        </div>

        <button className="icon-button lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="px-5 py-5 border-t border-soft/10 bg-carbon/95 lg:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToId(item);
                    setOpen(false);
                  }}
                  className="px-4 py-3 font-semibold text-left rounded-xl text-soft/80 hover:bg-soft/10"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Hero() {
  const typed = useTypewriter(roles);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 160]);
  const opacity = useTransform(scrollY, [0, 650], [1, 0.12]);

  return (
    <section id="home" className="relative flex items-center min-h-screen px-5 pb-24 overflow-hidden pt-28">
      <div className="hero-grid" />
      <motion.div style={{ y, opacity }} className="absolute hidden border rounded-full right-8 top-28 h-72 w-72 border-violet/30 md:block" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={stagger} initial="hidden" animate="show" className="relative z-10">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold border rounded-md border-purple-500/30 bg-purple-500/10 text-purple-400 shadow-glow">
            <span className="bg-purple-500 rounded-full size-2 animate-pulse" /> Available for Work
          </motion.span>
          <motion.h1 variants={fadeUp} className="mt-8 font-display text-5xl font-semibold leading-[1.02] text-soft md:text-6xl xl:text-7xl">
            Hi, I&apos;m <span className="block text-purple-500">Sameer Jagrawal</span>
          </motion.h1>
          <motion.div variants={fadeUp} className="mt-6 text-2xl font-semibold min-h-10 font-display text-soft/82 md:text-3xl">
            I build as a <span className="text-purple-500">{typed}</span><span className="text-purple-400">|</span>
          </motion.div>
          <motion.p variants={fadeUp} className="max-w-2xl mt-6 text-lg leading-8 text-soft/60">
            A modern MERN portfolio experience with scroll-first storytelling, animated cards, clean sections and UI moments that appear exactly when the visitor earns them.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-9">
            <button onClick={() => scrollToId("Projects")} className="primary-button">
              View My Work <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollToId("Contact")} className="secondary-button">
              Get In Touch
            </button>
          </motion.div>
          <motion.div variants={fadeUp} className="flex gap-3 mt-8">
            <a className="icon-button" href="https://github.com/" aria-label="GitHub"><Github /></a>
            <a className="icon-button" href="https://www.linkedin.com/" aria-label="LinkedIn"><Linkedin /></a>
            <button className="icon-button" onClick={() => scrollToId("Contact")} aria-label="Contact"><Mail /></button>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.82, rotate: -8 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.9, delay: 0.25 }} className="relative w-full max-w-lg mx-auto">
          <div className="portrait-shell">
            <div className="absolute border border-dashed rounded-full inset-5 animate-orbit border-purple-500/30" />
            <div className="absolute inset-14 animate-[orbit_12s_linear_infinite_reverse] rounded-full border border-purple-400/25" />
            {["React", "Node", "MongoDB", "Express"].map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.12, type: "spring" }}
                className={`orbit-pill orbit-pill-${index}`}
              >
                {item}
              </motion.span>
            ))}
            <div className="portrait-card">
              <div className="scan-line" />
              <div className="text-center">
                <div className="grid mx-auto text-5xl font-semibold text-white bg-purple-600 border rounded-full size-36 place-items-center border-soft/15 shadow-glow">
                  SJ
                </div>
                <p className="mt-5 text-2xl font-semibold font-display text-soft">Frontend-focused MERN Developer</p>
                <p className="mt-2 text-sm text-soft/60">React / Tailwind / Motion / Clean UI</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 35, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.85 + index * 0.15 }}
                className="stat-card"
              >
                <div className="text-3xl font-semibold text-purple-500">{stat.value}</div>
                <div className="mt-2 text-xs font-semibold text-soft/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.button
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        onClick={() => scrollToId("About")}
        className="absolute items-center hidden gap-2 text-sm font-semibold -translate-x-1/2 bottom-6 left-1/2 text-soft/50 md:flex"
      >
        Scroll Down <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeading eyebrow="About Me" title="Who I Am" text="A frontend-focused developer crafting animated, responsive and practical web experiences." />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="relative p-8 overflow-hidden glass-panel min-h-96">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(118,60,172,0.42),transparent_34%),radial-gradient(circle_at_75%_70%,rgba(199,125,255,0.24),transparent_30%)]" />
          <div className="relative flex flex-col justify-between h-full">
            <UserRound className="text-purple-500 size-14" />
            <div>
              <p className="text-5xl font-semibold font-display text-soft">9+</p>
              <p className="mt-2 text-soft/60">Months of focused practice</p>
            </div>
            <div className="p-5 border rounded-2xl border-soft/10 bg-ink/50">
              <p className="text-sm uppercase tracking-[0.32em] text-purple-500">Current Focus</p>
              <p className="mt-2 text-2xl font-semibold text-soft">React interfaces that move beautifully.</p>
            </div>
          </div>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="grid gap-6">
          <motion.div variants={fadeUp} className="p-8 glass-panel">
            <h3 className="text-3xl font-semibold font-display text-soft">Sameer Jagrawal</h3>
            <p className="mt-2 font-semibold text-purple-500">MERN Stack Developer</p>
            <p className="mt-6 leading-8 text-soft/60">
              I build clean, responsive web products with React and Tailwind CSS. This portfolio is designed to feel alive while staying readable: every section reveals through scroll, cards react to movement, and important information appears in layers.
            </p>
            <div className="grid gap-4 mt-7 sm:grid-cols-2">
              {[
                ["Name", "Sameer Jagrawal"],
                ["Role", "MERN Developer"],
                ["Location", "India"],
                ["Status", "Available for Work"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-soft/10 bg-soft/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-soft/40">{label}</p>
                  <p className="mt-2 font-semibold text-soft">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featureCards.map(({ icon: Icon, title, text }) => (
              <motion.div key={title} variants={fadeUp} whileHover={{ y: -10, rotate: 1.5 }} className="mini-card">
                <Icon className="text-purple-500 size-9" />
                <h4 className="mt-5 text-xl font-semibold font-display text-soft">{title}</h4>
                <p className="mt-3 text-sm leading-6 text-soft/60">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section-pad bg-carbon/40">
      <SectionHeading eyebrow="Education" title="Academic Journey" text="Formal education plus self-led development practice and project-based learning." />
      <div className="max-w-5xl mx-auto">
        <div className="relative border-l border-violet/25 pl-7 md:pl-12">
          {education.map(({ icon: Icon, title, place, year, score, tags }, index) => (
            <motion.article
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ x: 8 }}
              className="timeline-card"
            >
              <div className="timeline-dot"><Icon size={20} /></div>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold font-display text-soft">{title}</h3>
                  <p className="mt-2 font-semibold text-purple-500">{place}</p>
                </div>
                <div className="px-4 py-2 text-sm font-semibold border rounded-full border-purple-500/30 bg-purple-500/10 text-purple-500">{year} / {score}</div>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [active, setActive] = useState("Frontend");

  return (
    <section id="skills" className="overflow-hidden section-pad">
      <SectionHeading eyebrow="Skills" title="Tech Stack" text="A moving toolkit for building modern interfaces, APIs and responsive user journeys." />
      <div className="marquee-wrap">
        <div className="flex gap-4 animate-marquee">
          {[...skillMarquee, ...skillMarquee].map((skill, index) => (
            <span key={`${skill}-${index}`} className="marquee-pill"><TechBadge name={skill} compact /></span>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-12">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.keys(skillTabs).map((tabName) => (
            <button key={tabName} onClick={() => setActive(tabName)} className={`tab-button ${active === tabName ? "tab-active" : ""}`}>
              {tabName}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.45 }}
            className="grid gap-4"
          >
            {skillTabs[active].map(([name, value], index) => (
              <motion.div key={name} initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="skill-bar">
                <div className="flex items-center justify-between">
                  <TechBadge name={name} />
                  <span className="font-semibold text-purple-500">{value}%</span>
                </div>
                <div className="h-2 mt-4 overflow-hidden rounded-full bg-soft/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.2 + index * 0.09 }}
                    className="h-full bg-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function Projects() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  const next = () => setActive((index) => (index + 1) % projects.length);
  const prev = () => setActive((index) => (index - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="section-pad bg-carbon/40">
      <SectionHeading eyebrow="Projects" title="Selected Work" text="Project cards reveal like product panels, with links, stack pills and animated preview surfaces." />
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.article
            key={project.title}
            initial={{ opacity: 0, rotateY: 18, y: 35 }}
            animate={{ opacity: 1, rotateY: 0, y: 0 }}
            exit={{ opacity: 0, rotateY: -18, y: -20 }}
            transition={{ duration: 0.55 }}
            className="project-card"
          >
            <div className={`project-visual bg-gradient-to-br ${project.accent}`}>
              <div className="browser-bar"><span /><span /><span /></div>
              <div className="preview-grid">
                <div className="preview-large" />
                <div className="preview-small" />
                <div className="preview-small delay" />
              </div>
              <div className="floating-label">{project.type}</div>
            </div>
            <div className="p-7 md:p-10">
              <p className="text-sm uppercase tracking-[0.28em] text-purple-500">{String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</p>
              <h3 className="mt-4 text-3xl font-semibold font-display text-soft md:text-5xl">{project.title}</h3>
              <p className="mt-5 text-lg leading-8 text-soft/60">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-7">
                {project.stack.map((tag) => <TechBadge key={tag} name={tag} compact />)}
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <a className="secondary-button" href={project.code} target="_blank" rel="noreferrer"><Github size={18} /> Code</a>
                <a className="primary-button" href={project.live} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={18} /></a>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
        <div className="flex items-center justify-center gap-4 mt-8">
          <button className="icon-button" onClick={prev} aria-label="Previous project"><ChevronLeft /></button>
          <div className="flex gap-2">
            {projects.map((item, index) => (
              <button key={item.title} onClick={() => setActive(index)} className={`h-2 rounded-full transition-all ${active === index ? "w-10 bg-lavender" : "w-2 bg-soft/20"}`} aria-label={`Open ${item.title}`} />
            ))}
          </div>
          <button className="icon-button" onClick={next} aria-label="Next project"><ChevronRight /></button>
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="section-pad">
      <SectionHeading eyebrow="Certificates" title="Learning Proof" text="Animated certificate tiles for achievement highlights and continuous learning signals." />
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-5 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <motion.div key={cert} variants={fadeUp} whileHover={{ y: -12, rotate: index % 2 ? -1.5 : 1.5 }} className="certificate-card">
            <div className="flex items-center justify-between">
              <Award className="text-purple-500 size-10" />
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/10 text-purple-500">Verified</span>
            </div>
            <h3 className="mt-10 text-2xl font-semibold font-display text-soft">{cert}</h3>
            <p className="mt-3 text-sm leading-6 text-soft/60">Certification milestone focused on web fundamentals, security awareness and practical development.</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-carbon/40">
      <SectionHeading eyebrow="Testimonials" title="People Say" text="Social-proof cards with soft motion, star ratings and staggered arrival." />
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="grid max-w-6xl gap-6 mx-auto md:grid-cols-3">
        {testimonials.map((item) => (
          <motion.figure key={item.name} variants={fadeUp} whileHover={{ y: -10 }} className="glass-panel p-7">
            <div className="flex gap-1 text-purple-500">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div>
            <blockquote className="mt-6 text-lg leading-8 text-soft/70">&quot;{item.text}&quot;</blockquote>
            <figcaption className="font-semibold mt-7 text-soft">{item.name}</figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  const isValid = useMemo(() => form.name.trim() && form.email.includes("@") && form.message.trim().length > 8, [form]);

  useEffect(() => {
    if (!status.message) return undefined;
    const timer = setTimeout(() => setStatus({ type: "", message: "" }), 5200);
    return () => clearTimeout(timer);
  }, [status.message]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!isValid || sending) return;

    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Could not send message right now.");
      }

      setForm({ name: "", email: "", message: "" });
      setStatus({ type: "success", message: "Message sent successfully. A confirmation email has been sent to you." });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Could not send message right now." });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="section-pad">
      <AnimatePresence>
        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: -24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.96 }}
            className={`fixed right-5 top-24 z-[70] flex w-[min(92vw,390px)] items-start gap-3 rounded-2xl border p-4 shadow-2xl shadow-black/40 backdrop-blur-2xl ${
              status.type === "success"
                ? "border-purple-500/40 bg-purple-950/90 text-purple-100"
                : "border-red-400/40 bg-[#210008]/90 text-red-100"
            }`}
            role="status"
          >
            <span className={`mt-0.5 grid size-9 shrink-0 place-items-center rounded-full ${status.type === "success" ? "bg-purple-500 text-white" : "bg-red-500 text-white"}`}>
              {status.type === "success" ? <CheckCircle2 size={18} /> : <X size={18} />}
            </span>
            <span className="flex-1 text-sm font-semibold leading-6">{status.message}</span>
            <button
              type="button"
              onClick={() => setStatus({ type: "", message: "" })}
              className="grid text-purple-100 transition rounded-full size-8 place-items-center hover:bg-white/10"
              aria-label="Close notification"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <SectionHeading eyebrow="Contact" title="Get In Touch" text="Send a message directly from the portfolio with a confirmation reply to your inbox." />
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="p-8 glass-panel">
          <MessageSquare className="text-purple-500 size-12" />
          <h3 className="mt-8 text-4xl font-semibold font-display text-soft">Let&apos;s work together</h3>
          <p className="mt-5 leading-8 text-soft/60">
            Have a project, role or collaboration in mind? Send a message here and I will receive it directly in Gmail.
          </p>
          <div className="grid gap-4 mt-8">
            <span className="contact-row"><Mail /> sameerjagrawal2@gmail.com</span>
            <span className="contact-row"><MapPin /> India</span>
            <span className="contact-row"><BriefcaseBusiness /> Available for frontend work</span>
          </div>
        </motion.div>
        <motion.form variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} onSubmit={handleSubmit} className="p-6 glass-panel md:p-8">
          {[
            ["name", "Your name", "text"],
            ["email", "Email address", "email"],
          ].map(([key, label, type]) => (
            <motion.label variants={fadeUp} key={key} className="block mb-5">
              <span className="block mb-2 text-sm font-semibold text-soft/70">{label}</span>
              <input
                className="form-field"
                type={type}
                value={form[key]}
                onChange={(event) => setForm({ ...form, [key]: event.target.value })}
                placeholder={label}
              />
            </motion.label>
          ))}
          <motion.label variants={fadeUp} className="block">
            <span className="block mb-2 text-sm font-semibold text-soft/70">Message</span>
            <textarea
              className="resize-none form-field min-h-40"
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              placeholder="Tell me about the project..."
            />
          </motion.label>
          <motion.button variants={fadeUp} disabled={!isValid || sending} className="justify-center w-full mt-6 primary-button disabled:cursor-not-allowed disabled:opacity-45">
            {sending ? <Sparkles size={18} /> : status.type === "success" ? <CheckCircle2 size={18} /> : <Send size={18} />}
            {sending ? "Sending..." : status.type === "success" ? "Message Sent" : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink font-body text-soft">
      <motion.div className="fixed left-0 top-0 z-[60] h-1 origin-left bg-purple-500" style={{ scaleX }} />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Testimonials />
      <Contact />
      <footer className="px-5 py-8 text-sm text-center border-t border-soft/10 text-soft/50">
        <Moon className="mx-auto mb-3 text-purple-500 size-5" />
        Built with React, Tailwind CSS and Framer Motion.
      </footer>
    </div>
  );
}

export default App;
