'use client'

import React, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaKaggle, FaDev, FaBitbucket, FaHackerrank } from 'react-icons/fa';
import { BsDownload } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { motion, MotionConfig, useScroll } from 'framer-motion';
import { HeroBackground, Avatar3D, SectionBackdrop } from './three';
import { Reveal, RevealGroup, RevealItem, SectionTitle } from './motion/Reveal';

const NAV_ITEMS = ["home", "about", "skills", "projects", "experience", "contact"];

const SOCIAL_LINKS = [
  { icon: <FaGithub />, link: "https://github.com/pratikdevelop", label: "GitHub" },
  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/pratik-raut-39b631227/", label: "LinkedIn" },
  { icon: <FaKaggle />, link: "https://www.kaggle.com/pratik222", label: "Kaggle" },
  { icon: <FaDev />, link: "https://dev.to/pratik_12b3f8bf3b50e48bae", label: "Dev Community" },
  { icon: <FaBitbucket />, link: "https://bitbucket.org/pratik_5678/workspace/overview/", label: "Bitbucket" },
  { icon: <FaHackerrank />, link: "https://www.hackerrank.com/profile/pratikraut88895", label: "HackerRank" }
];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/Pratik_Raut_Full_Stack_Developer_Nodejs_React.pdf';
    link.download = 'Pratik_Raut_Full_Stack_MERN_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        {/* Navigation */}
        <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-gray-900/70 backdrop-blur-xl">
          <motion.div
            aria-hidden="true"
            className="h-px origin-left bg-gradient-to-r from-accent-500 via-accent-400 to-highlight-400"
            style={{ scaleX: scrollYProgress }}
          />

          <div className="page-container flex h-16 items-center justify-between gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 text-left"
              aria-label="Back to top"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-accent-400/30 bg-accent-400/10 font-display text-sm font-bold text-accent-300">
                PR
              </span>
              <span className="hidden leading-tight sm:block">
                <span className="block font-display text-base font-semibold text-white">Pratik Raut</span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">Full Stack Developer</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 md:flex">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`nav-link ${activeSection === item ? "nav-link-active" : ""}`}
                >
                  {item}
                </button>
              ))}
              <button onClick={handleDownloadPDF} className="btn btn-primary ml-3 !px-4 !py-2 !text-xs">
                <BsDownload className="h-3.5 w-3.5" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <button onClick={handleDownloadPDF} className="icon-btn !h-9 !w-9" aria-label="Download CV">
                <BsDownload className="h-4 w-4" />
              </button>
              <button
                className="icon-btn !h-9 !w-9"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="border-b border-white/10 bg-gray-900/95 backdrop-blur-xl md:hidden">
              <div className="page-container flex flex-col gap-1 py-4">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                      activeSection === item
                        ? "bg-accent-400/10 text-accent-300"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}
                <button onClick={handleDownloadPDF} className="btn btn-primary mt-2 w-full">
                  <BsDownload className="h-4 w-4" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          )}
        </nav>

        <HomeSection onDownloadCV={handleDownloadPDF} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </MotionConfig>
  );
};
const HomeSection = ({ onDownloadCV }: { onDownloadCV: () => void }) => {
  const targetRoles = [
    "Full Stack Engineer",
    "Backend Engineer",
    "AI/GenAI Engineer",
    "AI Application Engineer",
    "Forward Deployed Engineer",
    "React / Node.js Developer",
    "Python Backend Engineer",
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28"
    >
      <HeroBackground className="absolute inset-0 z-0" />

      <div className="page-container relative z-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        {/* LEFT CONTENT */}
        <RevealGroup className="space-y-6" stagger={0.1}>
          <RevealItem y={20}>
            <span className="eyebrow inline-flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </span>
              Hello, I&apos;m
            </span>
          </RevealItem>

          <RevealItem y={28}>
            <h1 className="text-gradient text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Pratik Raut
            </h1>
          </RevealItem>

          <RevealItem y={28}>
            <h2 className="max-w-3xl font-display text-2xl font-medium leading-tight tracking-tight text-accent-300 sm:text-3xl md:text-4xl">
              Full Stack Software Engineer{" "}
              <span className="text-gray-500">|</span> AI/GenAI{" "}
              <span className="text-gray-500">|</span> Backend Systems
            </h2>
          </RevealItem>

          <RevealItem y={20}>
            <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-gray-500 sm:text-sm">
              <span>MERN</span>
              <span>/</span>
              <span>React</span>
              <span>/</span>
              <span>Node.js</span>
              <span>/</span>
              <span>Python</span>
              <span>/</span>
              <span>AI &amp; LLM</span>
              <span>/</span>
              <span>Distributed Systems</span>
            </div>
          </RevealItem>

          <RevealItem y={24}>
            <p className="max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
              Full Stack Software Engineer with 3.8 years of professional
              experience building production-ready web applications, backend
              services, and AI-powered solutions using React.js, Node.js,
              TypeScript, Python, PostgreSQL, and MongoDB.
            </p>
          </RevealItem>

          <RevealItem y={20}>
            <p className="max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base">
              Strong hands-on experience in REST APIs, authentication/RBAC,
              system design, real-time systems, Redis, Kafka, WebSockets,
              Docker, AWS, event-driven architecture, and AI/GenAI
              applications using RAG, embeddings, LangChain, LangGraph, LLM
              APIs, tool calling, and AI agents.
            </p>
          </RevealItem>

          {/* CORE STRENGTHS */}
          <RevealItem y={20}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-300">
                Core Strengths
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Full Stack Engineering",
                  "Backend Engineering",
                  "AI / GenAI Applications",
                  "API & System Design",
                  "Real-Time Systems",
                  "Event-Driven Architecture",
                  "Cloud & Deployment",
                  "Technical Integration",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </RevealItem>

          {/* AVAILABILITY */}
          <RevealItem y={20}>
            <div className="flex flex-col gap-3 rounded-2xl border border-accent-400/25 bg-accent-400/[0.07] px-5 py-4 sm:flex-row sm:items-center sm:gap-4">
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-300">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-400" />
                </span>
                Available
              </span>

              <p className="text-sm text-gray-300">
                Open to full-time software engineering opportunities with
                immediate joining.
              </p>
            </div>
          </RevealItem>

          {/* TARGET ROLES */}
          <RevealItem y={20}>
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">
                Open to roles
              </p>

              <div className="flex max-w-2xl flex-wrap gap-2">
                {targetRoles.map((role) => (
                  <span
                    key={role}
                    className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs text-gray-400 transition-colors hover:border-accent-400/30 hover:text-accent-300"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </RevealItem>

          {/* ACTIONS */}
          <RevealItem y={24}>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-primary"
              >
                View My Work
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn btn-ghost"
              >
                Contact Me
              </button>

              <button onClick={onDownloadCV} className="btn btn-ghost">
                <BsDownload className="h-4 w-4" />
                <span>Download CV</span>
              </button>
            </div>
          </RevealItem>

          {/* SOCIAL LINKS */}
          <RevealItem y={20}>
            <div className="flex flex-wrap gap-3 pt-3">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ y: -5 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 18,
                  }}
                  className="icon-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </RevealItem>
        </RevealGroup>

        {/* RIGHT / PROFILE */}
        <Reveal
          className="flex justify-center lg:justify-end"
          y={40}
          duration={0.9}
          amount={0.1}
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-accent-400 via-highlight-400 to-accent-500 opacity-20 blur-3xl animate-pulse-ring" />

            {/* Tech ring */}
            <div className="absolute -inset-4 rounded-[2.5rem] border border-accent-400/10" />
            <div className="absolute -inset-7 rounded-[3rem] border border-accent-400/5" />

            {/* Corner brackets */}
            {[
              "left-0 top-0 border-l-2 border-t-2 rounded-tl-2xl",
              "right-0 top-0 border-r-2 border-t-2 rounded-tr-2xl",
              "left-0 bottom-0 border-l-2 border-b-2 rounded-bl-2xl",
              "right-0 bottom-0 border-r-2 border-b-2 rounded-br-2xl",
            ].map((pos) => (
              <span
                key={pos}
                aria-hidden="true"
                className={`pointer-events-none absolute h-9 w-9 border-accent-400/50 ${pos}`}
              />
            ))}

            {/* Avatar */}
            <Avatar3D className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96" />

            {/* Floating tech labels */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-5 top-10 rounded-xl border border-white/10 bg-black/40 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-accent-300 backdrop-blur-md"
            >
              React / Node
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute     -right-5 bottom-16 rounded-xl border border-white/10 bg-black/40 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-accent-300 backdrop-blur-md"
            >
              AI / RAG / Agents
            </motion.div>

            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-xl border border-white/10 bg-black/40 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-gray-400 backdrop-blur-md"
            >
              Backend · Cloud · Systems
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section-pad bg-gray-800">
      <SectionBackdrop className="absolute inset-0 z-0" variant="rings" position={[-2.8, -0.4, -1.5]} scale={1.15} opacity={0.16} />

      <div className="page-container relative z-10">
        <SectionTitle eyebrow="01 — Profile" title="About Me" />

        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
          <RevealGroup className="space-y-6" stagger={0.1}>
            <RevealItem y={20}>
              <h3 className="font-display text-xl font-semibold text-accent-300 sm:text-2xl">Professional Summary</h3>
            </RevealItem>
            <RevealItem>
              <p className="leading-relaxed text-gray-400">
                Full Stack Software Engineer with <strong className="font-semibold text-white">3.8 years of professional experience</strong> building production-ready applications with React.js, Node.js, TypeScript, PostgreSQL, and MongoDB. Experienced in REST APIs, authentication/RBAC, real-time systems, event-driven architecture, and scalable business workflows.
              </p>
            </RevealItem>
            <RevealItem>
              <p className="leading-relaxed text-gray-400">
                Strong hands-on experience with <strong className="font-semibold text-white">PostgreSQL, MongoDB, Redis, Kafka, and WebSockets</strong>, along with AWS, Docker, and CI/CD workflows. Contributed to systems supporting <strong className="font-semibold text-accent-300">15,000+ users</strong> and <strong className="font-semibold text-accent-300">5,000+ daily transactions</strong>.
              </p>
            </RevealItem>
            <RevealItem>
              <p className="leading-relaxed text-gray-400">
                Alongside full-stack engineering, I build AI/GenAI applications with <strong className="font-semibold text-white">LangChain, LangGraph, RAG, embeddings, LLM APIs, and AI agents</strong>, with a focus on practical business use cases and production-oriented workflows.
              </p>
            </RevealItem>
            <RevealItem y={20}>
              <div className="flex flex-wrap gap-3 pt-4">
                <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="btn btn-primary">
                  Get In Touch
                </button>
                <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="btn btn-ghost">
                  View Projects
                </button>
              </div>
            </RevealItem>
          </RevealGroup>

          <Reveal y={36} amount={0.15}>
            <div className="surface overflow-hidden">
              <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5 sm:px-8">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                <h3 className="font-display text-lg font-semibold">Personal Details</h3>
              </div>

              <div className="px-6 py-6 sm:px-8">
                <RevealGroup className="space-y-0" stagger={0.05} amount={0.05}>
                  {[
                    { label: "Full Name", value: "Pratik Raut" },
                    { label: "Location", value: "Ujjain, Madhya Pradesh, India" },
                    { label: "Email", value: "pratik.raut9115@gmail.com", link: true },
                    { label: "Phone", value: "+91-9111502449", link: true },
                    { label: "Experience", value: "3.8 Years" }
                  ].map((item) => (
                    <RevealItem
                      key={item.label}
                      y={14}
                      className="flex items-baseline justify-between gap-6 border-b border-white/5 py-3 last:border-0"
                    >
                      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-gray-500">{item.label}</span>
                      {item.link ? (
                        <a
                          href={item.label === "Email" ? "mailto:pratik.raut9115@gmail.com" : "tel:+919111502449"}
                          className="text-right text-sm font-medium text-white transition-colors hover:text-accent-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-right text-sm font-medium text-white">{item.value}</span>
                      )}
                    </RevealItem>
                  ))}
                </RevealGroup>

                <Reveal className="pt-8" y={20} amount={0.05}>
                  <h4 className="eyebrow mb-4">Professional Links</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {SOCIAL_LINKS.slice(0, 4).map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-gray-300 transition-colors hover:border-accent-400/40 hover:text-accent-200"
                      >
                        {social.icon}
                        <span className="truncate">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const skills = {
    "AI & GenAI": ["Generative AI", "LLMs", "LangChain", "LangGraph", "RAG", "Embeddings", "FAISS", "Semantic Search", "AI Agents", "Tool Calling", "LLM APIs", "Ollama"],
    "Frontend": ["React.js", "Next.js", "Angular", "TypeScript", "JavaScript", "Redux", "Zustand", "React Hooks", "Tailwind CSS", "HTML5 / CSS3"],
    "Backend & APIs": ["Node.js", "Express.js", "Python", "FastAPI", "Django", "REST APIs", "GraphQL", "Microservices", "WebSockets"],
    "Data & Messaging": ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Apache Kafka", "RabbitMQ", "Prisma ORM"],
    "Architecture & Security": ["System Design", "OOP", "DSA", "Event-Driven Architecture", "Distributed Systems", "JWT", "RBAC", "Performance Optimization"],
    "Cloud & Tools": ["AWS", "Docker", "CI/CD", "Git", "GitHub", "Postman", "Nginx", "Grafana"]
  };

  return (
    <section id="skills" className="section-pad bg-gray-900">
      <SectionBackdrop className="absolute inset-0 z-0" variant="icosahedron" position={[3, 0.6, -2]} scale={1.1} opacity={0.12} />

      <div className="page-container relative z-10">
        <SectionTitle eyebrow="02 — Toolkit" title="Technical Skills" />

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1} amount={0.05}>
          {Object.entries(skills).map(([category, skillList]) => (
            <RevealItem key={category} className="surface surface-interactive p-6">
              <div className="mb-5 flex items-center gap-3">
                <h3 className="font-display text-base font-semibold text-white">{category}</h3>
                <span className="accent-rule ml-auto" />
              </div>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <motion.span key={skill} whileHover={{ y: -2 }} className="chip">
                    {skill}
                  </motion.span>
                ))}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-24">
          <SectionTitle eyebrow="Credentials" title="Certifications" className="mb-12" />

          <RevealGroup className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.08} amount={0.05}>
            {[
              { title: "Frontend Developer (React)", issuer: "HackerRank", issued: "Issued August 2026" },
              { title: "Foundation: Introduction to LangChain — Python", issuer: "LangChain Academy", issued: "Issued July 2026" },
              { title: "Lab: Build a RAG Chatbot", issuer: "Redis", issued: "Issued July 2026" },
              { title: "5-Day AI Agents Intensive Course with Google", issuer: "Kaggle / Google", issued: "Issued December 2025" },
              { title: "DeepAgents with LangGraph", issuer: "LangChain Academy", issued: "Issued September 2025" }
            ].map((cert) => (
              <RevealItem key={cert.title} y={24}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="surface surface-interactive group relative h-full overflow-hidden p-6"
                >
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent-400/70 via-accent-400/20 to-transparent" />
                  <h3 className="mb-3 font-display text-base font-semibold leading-snug text-white transition-colors group-hover:text-accent-300">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-gray-500">{cert.issued}</p>
                </motion.article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "CodeMind — AI Personal Codebase Assistant",
      description: "Built a local AI assistant that uses RAG and FAISS to answer codebase architecture, API, and implementation questions. Added language-aware chunking, relevance gating, grounding prompts, multi-turn context, and AI-assisted file operations with a local LLM.",
      technologies: ["Python", "FastAPI", "LangChain", "RAG", "FAISS", "Hugging Face Embeddings", "Ollama / Local LLM", "Docker"],
      metrics: "Grounded codebase Q&A with local AI",
      status: "AI / RAG"
    },
    {
      title: "ResumeCopilot — AI Resume Architect & ATS Simulator",
      description: "Built a full-stack AI resume platform with real-time LLM streaming, structured outputs, ATS scoring, semantic gap analysis, synchronized editing, live preview, Generative UI, and ATS-oriented PDF generation.",
      technologies: ["Next.js", "React", "TypeScript", "LLM APIs", "SSE", "Zustand", "Tailwind CSS", "React PDF"],
      metrics: "Real-time AI editing + semantic ATS analysis",
      status: "AI / Product"
    },
    {
      title: "AI Log Anomaly Detection Platform",
      description: "Built a real-time log analysis pipeline using Apache Kafka for event streaming and Google Gemini for AI-assisted anomaly detection, with MongoDB persistence and Grafana monitoring dashboards.",
      technologies: ["Next.js", "Node.js", "Apache Kafka", "Google Gemini", "MongoDB", "Grafana"],
      metrics: "Streaming logs with AI-assisted anomaly detection",
      status: "AI / Streaming"
    },
    {
      title: "AI-Powered Sales & Customer Relationship Management Platform",
      description: "Developed a full-stack CRM for leads, contacts, sales workflows, and customer operations. Implemented REST APIs, JWT/RBAC security, Redis caching, PostgreSQL data access, and real-time WebSocket updates, with an AI-ready application architecture.",
      technologies: ["Next.js", "React.js", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Redis", "WebSockets"],
      metrics: "Secure, cached and real-time business workflows",
      status: "Full Stack"
    }
  ];

  return (
    <section id="projects" className="section-pad bg-gray-800">
      <SectionBackdrop className="absolute inset-0 z-0" variant="torus" position={[-2.9, 0.2, -2]} scale={1.3} opacity={0.14} />

      <div className="page-container relative z-10">
        <SectionTitle eyebrow="03 — Work" title="Selected Projects" />

        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.12} amount={0.05}>
          {projects.map((project, index) => (
            <RevealItem key={index} y={40} className="flex">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className="surface group relative flex w-full flex-col overflow-hidden p-7 transition-colors duration-300 hover:border-accent-400/40"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent-400/70 via-accent-400/20 to-transparent" />

                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold leading-snug text-white transition-colors group-hover:text-accent-300">
                    {project.title}
                  </h3>
                  <span className="shrink-0 rounded-full border border-accent-400/25 bg-accent-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-300">
                    {project.status}
                  </span>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-gray-400">{project.description}</p>

                <div className="mb-6 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">What it demonstrates</p>
                  <p className="mt-1 text-sm font-semibold text-accent-300">{project.metrics}</p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <motion.span key={tech} whileHover={{ y: -2 }} className="chip">
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Profilics Systems Pvt. Ltd.",
      location: "Ujjain, India",
      period: "01/2022 – 08/2025",
      duration: "3.8 years",
      description: "Built and maintained enterprise full-stack applications and business workflows across CRM, project, customer, and document-management use cases.",
      achievements: [
        "Built and maintained full-stack applications using React.js, Node.js, Express.js, PostgreSQL, and MongoDB",
        "Designed and integrated REST APIs connecting frontend and backend services for core business workflows",
        "Developed reusable React.js and TypeScript components for responsive enterprise interfaces",
        "Optimized database queries and application data access across PostgreSQL, MongoDB, and MySQL",
        "Implemented secure JWT authentication, authorization, and role-based access control (RBAC)",
        "Developed modular backend services and contributed to CRM and document-management applications",
        "Worked with real-time and event-driven capabilities using WebSockets, Kafka, and related messaging patterns",
        "Used Git, Docker, AWS, and CI/CD workflows for development, deployment, and application maintenance"
      ],
      technologies: [
        "React.js", "TypeScript", "Angular", "Node.js", "Express.js", "Python", "REST APIs",
        "PostgreSQL", "MongoDB", "MySQL", "Redis", "Kafka", "RabbitMQ", "WebSockets",
        "AWS", "Docker", "CI/CD", "Git", "JWT", "RBAC"
      ]
    }
  ];

  const professionalDevelopment = {
    role: "Professional Development",
    company: "Career Break",
    period: "09/2025 – Present",
    description: "Career break due to family circumstances while continuing structured professional development through hands-on full-stack and AI/GenAI projects.",
    achievements: [
      "Strengthened practical skills in React.js, Node.js, Python/FastAPI, PostgreSQL, Docker, and AWS",
      "Built AI/GenAI applications using LangChain, LangGraph, RAG, embeddings, LLM APIs, and AI agents",
      "Developed projects spanning AI assistants, resume intelligence, real-time log analysis, and business applications",
      "Completed structured learning and certifications in AI agents, LangChain, RAG, and machine learning"
    ],
    technologies: [
      "Python", "FastAPI", "LangChain", "LangGraph", "RAG", "Embeddings", "FAISS", "LLM APIs",
      "AI Agents", "React.js", "Node.js", "PostgreSQL", "Docker", "AWS", "Ollama"
    ]
  };

  return (
    <section id="experience" className="section-pad bg-gray-900">
      <SectionBackdrop className="absolute inset-0 z-0" variant="rings" position={[2.9, -0.5, -2]} scale={1.25} opacity={0.15} />

      <div className="page-container relative z-10">
        <SectionTitle eyebrow="04 — Career" title="Experience & Growth" />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Reveal key={index} y={40} amount={0.1}>
              <article className="surface relative overflow-hidden p-7 sm:p-9">
                <span className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-accent-400/70 via-accent-400/20 to-transparent" />

                <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                  <div>
                    <h3 className="font-display text-xl font-semibold sm:text-2xl">{exp.role}</h3>
                    <p className="mt-1.5 text-base font-medium text-accent-300">{exp.company}</p>
                    <p className="mt-1 text-sm text-gray-500">{exp.location}</p>
                    <p className="mt-1 text-sm text-gray-500">{exp.duration} professional experience</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-gray-300">
                    {exp.period}
                  </span>
                </div>

                <p className="mb-8 text-base leading-relaxed text-gray-300">{exp.description}</p>

                <div className="mb-8">
                  <h4 className="eyebrow mb-4">Key Contributions</h4>
                  <RevealGroup as="ul" className="space-y-3" stagger={0.07} amount={0.15}>
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <RevealItem key={achievementIndex} as="li" y={18} className="flex gap-3 text-sm leading-relaxed text-gray-300">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                        <span>{achievement}</span>
                      </RevealItem>
                    ))}
                  </RevealGroup>
                </div>

                <div>
                  <h4 className="eyebrow mb-4">Technologies Used</h4>
                  <RevealGroup className="flex flex-wrap gap-2" stagger={0.04} amount={0.15}>
                    {exp.technologies.map((tech) => (
                      <RevealItem key={tech} y={14}>
                        <motion.span whileHover={{ y: -2 }} className="chip">{tech}</motion.span>
                      </RevealItem>
                    ))}
                  </RevealGroup>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal y={40} amount={0.1}>
            <article className="surface relative overflow-hidden p-7 sm:p-9">
              <span className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-highlight-400/70 via-highlight-400/20 to-transparent" />
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-highlight-400/60 via-highlight-400/15 to-transparent" />

              <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                <div>
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">{professionalDevelopment.role}</h3>
                  <p className="mt-1.5 text-base font-medium text-highlight-300">{professionalDevelopment.company}</p>
                </div>
                <span className="shrink-0 rounded-full border border-highlight-400/25 bg-highlight-400/10 px-4 py-2 font-mono text-xs text-highlight-300">
                  {professionalDevelopment.period}
                </span>
              </div>

              <p className="mb-8 text-base leading-relaxed text-gray-300">{professionalDevelopment.description}</p>

              <div className="mb-8">
                <h4 className="eyebrow mb-4">Focus Areas</h4>
                <RevealGroup as="ul" className="space-y-3" stagger={0.07} amount={0.15}>
                  {professionalDevelopment.achievements.map((achievement, achievementIndex) => (
                    <RevealItem key={achievementIndex} as="li" y={18} className="flex gap-3 text-sm leading-relaxed text-gray-300">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-highlight-400" />
                      <span>{achievement}</span>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>

              <div>
                <h4 className="eyebrow mb-4">Current Toolkit</h4>
                <RevealGroup className="flex flex-wrap gap-2" stagger={0.04} amount={0.15}>
                  {professionalDevelopment.technologies.map((tech) => (
                    <RevealItem key={tech} y={14}>
                      <motion.span whileHover={{ y: -2 }} className="chip !border-highlight-400/25 !text-highlight-200">{tech}</motion.span>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>

              <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-accent-400/25 bg-accent-400/[0.07] px-5 py-4 sm:flex-row sm:items-center sm:gap-4">
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-300">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-400" />
                  </span>
                  Open to opportunities
                </span>
                <p className="text-sm text-gray-300">Currently focused on full-time software engineering roles across Full Stack, AI/GenAI, Backend, and FDE-oriented product engineering.</p>
              </div>
            </article>
          </Reveal>
        </div>

        <div className="mt-24">
          <SectionTitle eyebrow="Academic" title="Education" className="mb-12" />

          <Reveal y={32} amount={0.15} className="mx-auto max-w-3xl">
            <article className="surface surface-interactive relative overflow-hidden p-7 sm:p-9">
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent-400/70 via-accent-400/20 to-transparent" />
              <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                <div>
                  <h3 className="font-display text-lg font-semibold">B.Tech in Computer Science</h3>
                  <p className="mt-1.5 font-medium text-accent-300">Shri Guru Sandipani Institute of Technology</p>
                  <p className="mt-1 text-sm text-gray-500">Ujjain, India</p>
                </div>
                <div className="lg:text-right">
                  <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-gray-300">Graduated 2023</span>
                  <p className="mt-2 font-semibold text-white">CGPA: 7.6/10</p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFeedbackMessage('Please fill in all fields.');
      setFeedbackType('error');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setFeedbackMessage('Please enter a valid email address.');
      setFeedbackType('error');
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFeedbackMessage('EmailJS configuration is missing. Please try again later.');
      setFeedbackType('error');
      return;
    }

    emailjs.send(serviceId, templateId, formData, publicKey)
      .then(() => {
        setFeedbackMessage('Message Sent Successfully!');
        setFeedbackType('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setFeedbackMessage('');
          setFeedbackType('');
        }, 5000);
      }, () => {
        setFeedbackMessage('Failed to send message. Please try again.');
        setFeedbackType('error');
        setTimeout(() => {
          setFeedbackMessage('');
          setFeedbackType('');
        }, 5000);
      });
  };

  const details = [
    {
      icon: <AiOutlineMail className="h-5 w-5" />,
      label: "Email",
      value: (
        <a href="mailto:pratik.raut9115@gmail.com" className="font-medium text-white transition-colors hover:text-accent-300">
          pratik.raut9115@gmail.com
        </a>
      )
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: (
        <a href="tel:+919111502449" className="font-medium text-white transition-colors hover:text-accent-300">
          +91-9111502449
        </a>
      )
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: <span className="font-medium text-white">Ujjain, Madhya Pradesh, India</span>
    }
  ];

  return (
    <section id="contact" className="section-pad bg-gray-800">
      <SectionBackdrop className="absolute inset-0 z-0" variant="icosahedron" position={[-3, 0.8, -2]} scale={1.2} opacity={0.13} />

      <div className="page-container relative z-10">
        <SectionTitle eyebrow="05 — Say Hello" title="Get In Touch" />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <RevealGroup className="space-y-8" stagger={0.1} amount={0.08}>
            <RevealItem y={20}>
              <h3 className="font-display text-xl font-semibold text-accent-300 sm:text-2xl">Let&apos;s work together</h3>
            </RevealItem>
            <RevealItem>
              <p className="leading-relaxed text-gray-400">
                I&apos;m currently open to full-time software engineering opportunities. I&apos;m especially interested in Full Stack, AI/GenAI, Backend, and FDE-oriented product engineering roles where I can own features end to end.
              </p>
            </RevealItem>

            <div className="space-y-3">
              {details.map((detail) => (
                <RevealItem key={detail.label} y={20} className="flex items-center gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent-400/25 bg-accent-400/10 text-accent-300">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-gray-500">{detail.label}</p>
                    <div className="text-sm">{detail.value}</div>
                  </div>
                </RevealItem>
              ))}
            </div>

            <RevealItem y={20}>
              <div className="pt-2">
                <p className="eyebrow mb-4">Connect with me</p>
                <div className="flex flex-wrap gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      whileHover={{ y: -5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                      className="icon-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </RevealItem>
          </RevealGroup>

          <Reveal y={40} amount={0.1}>
            <div className="surface relative overflow-hidden p-7 sm:p-9">
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent-400/70 via-accent-400/20 to-transparent" />
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="field-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="field"
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="field-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="field"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="field-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="field resize-none"
                    required
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary w-full"
                >
                  Send Message
                </motion.button>
              </form>
              {feedbackMessage && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 text-center text-sm ${feedbackType === 'success' ? 'text-accent-300' : 'text-red-400'}`}
                >
                  {feedbackMessage}
                </motion.p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-gray-900 py-14 text-center">
      <div className="page-container">
        <RevealGroup className="mb-8 flex flex-wrap justify-center gap-3" stagger={0.06} amount={0.4}>
          {SOCIAL_LINKS.map((social) => (
            <RevealItem key={social.label} y={16}>
              <motion.a
                href={social.link}
                whileHover={{ y: -4 }}
                className="icon-btn !h-10 !w-10"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Pratik Raut. All rights reserved.
        </p>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gray-600">
          Full Stack Engineer &nbsp;/&nbsp; MERN &nbsp;/&nbsp; AI/GenAI &nbsp;/&nbsp; Node.js &nbsp;/&nbsp; Python
        </p>
        <p className="mt-5 text-xs text-gray-600">
          Designed and built with Next.js, Three.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Portfolio;
