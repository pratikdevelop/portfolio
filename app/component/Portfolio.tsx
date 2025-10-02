'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaKaggle, FaDev, FaBitbucket, FaHackerrank } from 'react-icons/fa';
import { BsFillFilePersonFill } from 'react-icons/bs';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [nav, setNav] = useState(false);

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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Your existing header code remains the same */}
      {/* <header className="fixed w-full bg-transparent px-8 py-3 z-50">
        <nav className="flex justify-between items-center max-w-screen-xl">
          <div className="text-2xl drop-shadow-2xl font-extrabold tracking-wide text-white">
            Port<span className="text-purple-600">Folio</span>
          </div>

          <div className="hidden justify-around items-center space-x-8 lg:flex">
            <Link href={"#home"} className="text-white hover:text-purple-600 text-sm tracking-wider font-semibold">
              Home
            </Link>
            <Link href={"#about"} className="text-white hover:text-purple-600 text-sm tracking-wider font-semibold">
              About
            </Link>
            <Link href={"#skills"} className="text-white hover:text-purple-600 text-sm tracking-wider font-semibold">
              Skills
            </Link>
            <Link href={"#projects"} className="text-white hover:text-purple-600 text-sm tracking-wider font-semibold">
              Projects
            </Link>
            <Link href={"#experience"} className="text-white hover:text-purple-600 text-sm tracking-wider font-semibold">
              Experience
            </Link>
            <Link href={"#contact"} className="px-4 py-2 text-sm font-semibold text-purple-600 border-2 border-purple-500 rounded-full hover:bg-purple-600 hover:text-white transition-all">
              Contact
            </Link>
          </div>

          <button onClick={() => setNav(true)} className="flex items-center sm:hidden lg:order-1 cursor-pointer">
            <AiOutlineMenu size={25} />
          </button>
        </nav>
      </header> */}

      {/* Mobile Menu */}
      <div className={nav ? "fixed h-screen top-0 left-0 w-full sm:hidden bg-black/70 z-50" : "hidden"}>
        <div className={nav ? "fixed w-[75%] h-screen bg-[#1a1a1a] top-0 left-0 bottom-0 p-10 ease-in-out duration-200 overflow-y-auto" : "fixed left-[-100%] bottom-0 p-10 top-0 ease-in duration-500"}>
          <div>
            <div className="flex items-center justify-between w-full">
              <div className="text-2xl font-extrabold tracking-wide text-white">
                Port<span className="text-purple-600">folio</span>
              </div>
              <div onClick={() => setNav(false)} className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer">
                <AiOutlineClose className="text-white" />
              </div>
            </div>
            <div className="border-b border-gray-500 my-4">
              <p className="w-[80%] py-4 text-gray-300">Let's build something legendary together</p>
            </div>
          </div>
          <div className="py-4 flex flex-col space-y-6">
            {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setNav(false);
                }}
                className="text-white hover:text-purple-600 text-sm tracking-wider font-semibold uppercase text-left"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
          <div className="pt-20">
            <p className="uppercase tracking-widest text-purple-500">Let's connect</p>
            <div className="flex items-center w-full pt-6 space-x-4">
              {[
                { icon: <FaLinkedinIn />, link: "https://linkedin.com/in/" },
                { icon: <FaGithub />, link: "https://github.com/" },
                { icon: <FaKaggle />, link: "https://kaggle.com/" },
                { icon: <FaDev />, link: "https://dev.to/" },
                { icon: <FaBitbucket />, link: "https://bitbucket.org/" },
                { icon: <FaHackerrank />, link: "https://hackerrank.com/" },
                { icon: <AiOutlineMail />, link: "mailto:pratikraut.9115@gmail.com" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="rounded-full shadow-xl shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-white hover:text-purple-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-black bg-opacity-90 z-40 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-500">Pratik Raut</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item
                    ? "bg-purple-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-95 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item
                      ? "bg-purple-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <HomeSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="text-2xl text-purple-400">Hello, I'm</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white">Pratik Raut</h1>
          <h2 className="text-3xl md:text-4xl text-purple-500">Full-Stack Software Engineer</h2>
          <p className="text-gray-300 max-w-md leading-relaxed">
            Dynamic Full-Stack Developer with 3+ years of hands-on experience crafting scalable 
            user-centric web applications using modern technologies like React, Angular, Node.js, 
            and emerging stacks.
          </p>
          <div className="flex space-x-4 pt-4">
            <button 
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-lg"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 border border-purple-600 text-purple-400 rounded-lg hover:bg-purple-900 transition-colors"
            >
              Contact Me
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4 pt-6">
            {[
              { icon: <FaGithub />, link: "https://github.com/", label: "GitHub" },
              { icon: <FaLinkedinIn />, link: "https://linkedin.com/in/", label: "LinkedIn" },
              { icon: <FaKaggle />, link: "https://kaggle.com/", label: "Kaggle" },
              { icon: <FaDev />, link: "https://dev.to/", label: "Dev Community" },
              { icon: <FaBitbucket />, link: "https://bitbucket.org/", label: "Bitbucket" },
              { icon: <FaHackerrank />, link: "https://hackerrank.com/", label: "HackerRank" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center animate-float">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-700 to-pink-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
              PR
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-16 px-4 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">About Me</h2>
        <div className="w-20 h-1 bg-purple-600 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl text-purple-400">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              Dynamic Full-Stack Developer with 3+ years of hands-on experience, including 1-year internship 
              and 2+ years full-time at Profilics Systems Pvt. Ltd. Expertise in crafting scalable user-centric 
              web applications using React, Angular, Node.js, Django, and emerging stacks like Golang (Gin) 
              and Python (FastAPI).
            </p>
            <p className="text-gray-300 leading-relaxed">
              Proficient in RESTful/GraphQL APIs, database management (MongoDB, MySQL, PostgreSQL), and cloud 
              deployments (AWS, Heroku, Firebase). Adept at DevOps (Docker, Jenkins) for CI/CD pipelines, 
              testing (Jest, Mocha), and AI/ML integration (TensorFlow, Reinforcement Learning) to drive 
              performance optimizations.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Passionate about delivering innovative, high-impact solutions that boost user engagement and 
              operational efficiency by up to 40%.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors inline-block"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-purple-700 to-pink-600 p-1 rounded-xl shadow-2xl w-full max-w-md">
              <div className="bg-gray-800 p-8 rounded-lg h-full">
                <h3 className="text-2xl text-purple-400 mb-6 text-center">Personal Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-400">Full Name:</span>
                    <p className="text-white">Pratik Raut</p>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-400">Location:</span>
                    <p className="text-white">Ujjain, Madhya Pradesh</p>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-400">Email:</span>
                    <p className="text-white">pratikraut.9115@gmail.com</p>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-400">Phone:</span>
                    <p className="text-white">+91-9111502449</p>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span className="text-gray-400">Date of Birth:</span>
                    <p className="text-white">April 06, 2001</p>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Languages:</span>
                    <p className="text-white">English, Hindi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        { name: "React", level: 90 },
        { name: "Angular", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "Django", level: 80 },
        { name: "Golang (Gin)", level: 75 },
        { name: ".NET Core", level: 70 },
        { name: "CakePHP", level: 75 }
      ]
    },
    {
      title: "Database & DevOps",
      icon: "🔧",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Docker", level: 75 },
        { name: "Jenkins", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 90 },
        { name: "RESTful APIs", level: 88 },
        { name: "GraphQL", level: 75 },
        { name: "TensorFlow", level: 70 },
        { name: "Firebase", level: 80 },
        { name: "Stripe", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Technical Skills</h2>
        <div className="w-20 h-1 bg-purple-600 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-purple-400">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Real-Time Chat Application",
      period: "Jan 2022 - Jul 2022",
      description: "Built interactive chat app with React/Redux frontend and Firebase for authentication/storage. Developed Node.js/Socket.io backend for real-time messaging, supporting 1,000+ concurrent users with <100ms latency.",
      technologies: ["React", "Redux", "Node.js", "Socket.io", "Firebase"],
      achievements: ["Enhanced user experiences, boosting interaction by 35%", "Real-time messaging with <100ms latency"],
      status: "Completed"
    },
    {
      title: "Endorsement Platform",
      period: "Mar 2023 - Aug 2023",
      description: "Led full-stack social tool with React UI and Node.js backend, handling 10,000+ daily interactions at 99.9% uptime. Designed MongoDB schemas and GraphQL APIs, reducing query times by 25% vs. REST.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "GraphQL", "Bootstrap"],
      achievements: ["Improved retention by 15%", "Reduced query times by 25%", "99.9% uptime"],
      status: "Completed"
    },
    {
      title: "E-Commerce Catalog",
      period: "Sep 2023 - Feb 2024",
      description: "Created dynamic catalog with Angular frontend for search/filtering of 5,000+ products. Built secure .NET Core backend with RESTful APIs and Stripe integration for 100% transaction success.",
      technologies: ["Angular", ".NET Core", "MySQL", "Stripe", "TypeScript"],
      achievements: ["Optimized MySQL queries for 40% faster loads", "100% transaction success rate"],
      status: "Completed"
    },
    {
      title: "Dealership CRM (DP360)",
      period: "Apr 2024 - Sep 2024",
      description: "Built scalable CRM with Angular dashboards and CakePHP APIs for 1,000+ daily interactions. Containerized with Docker/Nginx for 99.8% uptime and zero data loss via MySQL.",
      technologies: ["Angular", "CakePHP", "Docker", "MySQL", "Nginx"],
      achievements: ["Reduced deployment time by 20%", "99.8% uptime", "Zero data loss"],
      status: "Completed"
    },
    {
      title: "Next.js Blog Platform with AI",
      period: "Oct 2024 - Present",
      description: "Developing SEO-optimized blog with Next.js SSR/SSG, improving rankings by 40%. Integrating TensorFlow AI via Django/GraphQL/MongoDB for personalized suggestions.",
      technologies: ["Next.js", "Django", "TensorFlow", "MongoDB", "GraphQL", "AWS"],
      achievements: ["40% improvement in SEO rankings", "22% increase in user engagement"],
      status: "In Progress"
    },
    {
      title: "AI Wellness Coach with RL",
      period: "Nov 2024 - Present",
      description: "Architecting modular wellness app with Flask APIs for auth, tracking, and predictions. Implementing TensorFlow Q-Learning model for 15% more accurate recommendations.",
      technologies: ["Flask", "Python", "TensorFlow", "MongoDB", "JWT"],
      achievements: ["15% more accurate recommendations", "Scalable architecture"],
      status: "In Progress"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-16 px-4 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Key Projects</h2>
        <div className="w-20 h-1 bg-purple-600 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Completed" 
                      ? "bg-green-900 text-green-300" 
                      : "bg-purple-900 text-purple-300"
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-purple-400 text-sm mb-3">{project.period}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm font-medium">Key Achievements:</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "Profilics Systems Pvt. Ltd.",
      location: "Ujjain, India",
      period: "January 2022 – Present",
      description: "Specializing in User-Centric Applications and AI & Performance Optimization",
      achievements: [
        "Engineered full-stack applications using React, Angular, Node.js, Django, and CakePHP",
        "Integrated RESTful and GraphQL APIs to support seamless data flows and reduce latency by 30%",
        "Managed diverse databases (MongoDB, MySQL, PostgreSQL) and orchestrated deployments on AWS, Heroku, and Firebase",
        "Ensured 99.9% uptime for high-traffic platforms handling 10,000+ daily users",
        "Implemented DevOps workflows with Docker and Jenkins for automated CI/CD pipelines",
        "Accelerated deployment cycles by 25% while maintaining rigorous code quality via Jest and Mocha testing",
        "Leveraged AI/ML models (TensorFlow, Q-Learning) to enhance app features and improve prediction accuracy by 15%",
        "Collaborated in agile teams to deliver scalable solutions, optimizing user experiences"
      ],
      technologies: ["React", "Angular", "Node.js", "Django", "CakePHP", "MongoDB", "MySQL", "PostgreSQL", "AWS", "Docker", "Jenkins", "TensorFlow"]
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Professional Experience</h2>
        <div className="w-20 h-1 bg-purple-600 mx-auto mb-12"></div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-purple-400 text-lg font-medium mt-1">{exp.company}</p>
                  <p className="text-gray-400 mt-1">{exp.location}</p>
                </div>
                <span className="text-purple-300 bg-purple-900 px-4 py-2 rounded-full text-sm font-medium mt-2 lg:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 italic">{exp.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Achievements:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="leading-relaxed">{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Education</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mb-8"></div>
          
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 max-w-2xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
              <div>
                <h3 className="text-xl font-bold text-white">Bachelor of Science in Computer Science</h3>
                <p className="text-purple-400 font-medium mt-1">Shri Guru Sandipani Institute of Technology and Science</p>
                <p className="text-gray-400 mt-1">Ujjain, India</p>
              </div>
              <div className="mt-2 lg:mt-0 lg:text-right">
                <span className="text-purple-300 bg-purple-900 px-3 py-1 rounded-full text-sm font-medium">
                  June 2019 – June 2023
                </span>
                <p className="text-white font-semibold mt-2">CGPA: 7.6/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen py-16 px-4 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Get In Touch</h2>
        <div className="w-20 h-1 bg-purple-600 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl text-purple-400">Let's work together</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm currently available for freelance work and open to new opportunities. 
              If you have a project that you want to get started or think you need my help 
              with something, then get in touch.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <AiOutlineMail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white">pratikraut.9115@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white">+91-9111502449</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">Ujjain, Madhya Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-gray-400 mb-4">Connect with me:</p>
              <div className="flex space-x-4">
                {[
                  { icon: <FaGithub />, link: "https://github.com/", label: "GitHub" },
                  { icon: <FaLinkedinIn />, link: "https://linkedin.com/in/", label: "LinkedIn" },
                  { icon: <FaKaggle />, link: "https://kaggle.com/", label: "Kaggle" },
                  { icon: <FaDev />, link: "https://dev.to/", label: "Dev Community" },
                  { icon: <FaBitbucket />, link: "https://bitbucket.org/", label: "Bitbucket" },
                  { icon: <FaHackerrank />, link: "https://hackerrank.com/", label: "HackerRank" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  required
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  required
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors shadow-lg font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-center text-gray-400 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/" },
            { icon: <FaLinkedinIn />, link: "https://linkedin.com/in/" },
            { icon: <FaKaggle />, link: "https://kaggle.com/" },
            { icon: <FaDev />, link: "https://dev.to/" },
            { icon: <FaBitbucket />, link: "https://bitbucket.org/" },
            { icon: <FaHackerrank />, link: "https://hackerrank.com/" },
            { icon: <AiOutlineMail />, link: "mailto:pratikraut.9115@gmail.com" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Pratik Raut. All rights reserved.</p>
        <p className="text-sm mt-2 text-gray-500">Full-Stack Software Engineer</p>
        <p className="text-xs mt-2 text-gray-600">Designed and developed with ❤️ using Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Portfolio;