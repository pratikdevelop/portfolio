'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaKaggle, FaDev, FaBitbucket, FaHackerrank } from 'react-icons/fa';
import { BsFillFilePersonFill, BsDownload } from 'react-icons/bs';
import Image from "next/image";

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

  const scrollToSection = (sectionId: any) => {
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

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/Pratik-Raut-FlowCV-Resume-20251102.pdf';
    link.download = 'Pratik-Raut-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-40 shadow-lg border-b border-gray-700">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-400">Pratik Raut</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center">
            {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <button
              onClick={handleDownloadPDF}
              className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center space-x-2 shadow-lg"
            >
              <BsDownload className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDownloadPDF}
              className="px-3 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center space-x-2 md:hidden shadow-lg"
            >
              <BsDownload className="w-4 h-4" />
            </button>
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
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-sm py-4 border-b border-gray-700">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <button
                onClick={handleDownloadPDF}
                className="px-3 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center space-x-2 justify-center shadow-lg"
              >
                <BsDownload className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <HomeSection onDownloadCV={handleDownloadPDF} />

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

const HomeSection = ({ onDownloadCV }: { onDownloadCV: () => void }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="text-xl text-indigo-400 font-medium">Hello, I'm</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">Pratik Raut</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-400 font-semibold">Full-Stack Software Engineer & Gen AI Developer</h2>
          <p className="text-gray-300 max-w-md leading-relaxed text-base sm:text-lg">
            Dynamic Full-Stack Developer with 3+ years of hands-on experience, including 1-year internship and 2+ years full-time at Profilics Systems Pvt. Ltd. Expertise in crafting scalable user-centric web applications using React, Angular, Node.js, Django, and emerging stacks like Golang (Gin) and Python (FastAPI). Specialized in AI-driven features, performance optimization, and delivering innovative solutions that boost user engagement by up to 40%.
          </p>
          <div className="flex space-x-4 pt-4 flex-wrap gap-3">
            <button 
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg font-medium"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 border border-indigo-500 text-indigo-400 rounded-lg hover:bg-indigo-900/30 transition-colors font-medium"
            >
              Contact Me
            </button>
            <button 
              onClick={onDownloadCV}
              className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center space-x-2 shadow-lg font-medium"
            >
              <BsDownload className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4 pt-6 flex-wrap gap-3">
            {[
              { icon: <FaGithub />, link: "https://github.com/pratikdevelop", label: "GitHub" },
              { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/pratik-raut-39b631227/", label: "LinkedIn" },
              { icon: <FaKaggle />, link: "https://www.kaggle.com/pratik222", label: "Kaggle" },
              { icon: <FaDev />, link: "https://dev.to/raut45", label: "Dev Community" },
              { icon: <FaBitbucket />, link: "https://bitbucket.org/pratik_5678/workspace/overview/", label: "Bitbucket" },
              { icon: <FaHackerrank />, link: "https://www.hackerrank.com/profile/pratikraut88895", label: "HackerRank" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="p-3 bg-gray-800 rounded-lg hover:bg-indigo-600 transition-colors text-white shadow-lg"
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
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-teal-500 rounded-full blur-lg opacity-20 animate-pulse"></div>
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-indigo-700 to-teal-600 rounded-full flex items-center justify-center text-white text-5xl sm:text-6xl font-bold shadow-2xl border-4 border-indigo-400/20">
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
    <section id="about" className="min-h-screen py-16 px-4 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">About Me</h2>
        <div className="w-20 h-1 bg-indigo-500 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl text-indigo-400 font-semibold">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              Full-Stack Software Engineer with 3+ years of professional experience, including a 1-year internship and over 2 years of full-time development at Profilics Systems Pvt. Ltd. Designed and deployed end-to-end web applications using React, Angular, Node.js, Django, and CakePHP.
            </p>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              Integrated <strong className="text-indigo-400">AI-driven features</strong> and automation workflows to enhance scalability, efficiency, and performance. Managed <strong className="text-indigo-400">RESTful/GraphQL APIs</strong> and optimized database operations across MongoDB, MySQL, and PostgreSQL.
            </p>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              Implemented <strong className="text-indigo-400">CI/CD pipelines</strong> with Docker and Jenkins, ensuring smooth, secure, and reliable deployments. Collaborated cross-functionally to deliver high-performance, user-focused solutions aligned with business goals.
            </p>
            <div className="pt-4 flex space-x-4 flex-wrap gap-3">
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-block shadow-lg font-medium"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-indigo-500 text-indigo-400 rounded-lg hover:bg-indigo-900/30 transition-colors inline-block font-medium"
              >
                View Projects
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-indigo-600 to-teal-500 p-1 rounded-xl shadow-2xl w-full max-w-md">
              <div className="bg-gray-800 p-6 sm:p-8 rounded-lg h-full">
                <h3 className="text-xl sm:text-2xl text-indigo-400 mb-6 text-center font-semibold">Personal Details</h3>
                <div className="space-y-4">
                  {[
                    { label: "Full Name:", value: "Pratik Raut" },
                    { label: "Date of Birth:", value: "April 6, 2001" },
                    { label: "Location:", value: "Ujjain, Madhya Pradesh, India" },
                    { label: "Email:", value: "pratik.raut9115@gmail.com", link: true },
                    { label: "Phone:", value: "+91-9111502449", link: true },
                    { label: "Experience:", value: "3+ Years" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between border-b border-gray-700 pb-2">
                      <span className="text-gray-400">{item.label}</span>
                      {item.link ? (
                        <a 
                          href={item.label === "Email:" ? "mailto:pratik.raut9115@gmail.com" : "tel:+919111502449"}
                          className="text-white hover:text-indigo-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="text-base sm:text-lg text-indigo-400 mb-4 font-semibold">Professional Links</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: <FaGithub />, label: "GitHub", link: "https://github.com/pratikdevelop" },
                      { icon: <FaLinkedinIn />, label: "LinkedIn", link: "https://www.linkedin.com/in/pratik-raut-39b631227/" },
                      { icon: <FaKaggle />, label: "Kaggle", link: "https://www.kaggle.com/pratik222" },
                      { icon: <FaDev />, label: "Dev Community", link: "https://dev.to/raut45" }
                    ].map((social, index) => (
                      <a 
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700"
                      >
                        {social.icon}
                        <span>{social.label}</span>
                      </a>
                    ))}
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
  const skills = {
    "Frontend Technologies": [
      { name: "React", level: 90, category: "Advanced" },
      { name: "Angular", level: 85, category: "Advanced" },
      { name: "Next.js", level: 80, category: "Advanced" },
      { name: "TypeScript", level: 85, category: "Advanced" },
      { name: "JavaScript", level: 95, category: "Expert" },
      { name: "HTML5/CSS3", level: 90, category: "Expert" },
      { name: "Bootstrap", level: 80, category: "Advanced" },
      { name: "Redux", level: 75, category: "Advanced" }
    ],
    "Backend Technologies": [
      { name: "Node.js", level: 88, category: "Advanced" },
      { name: "Python", level: 85, category: "Advanced" },
      { name: "Django", level: 80, category: "Advanced" },
      { name: "Flask", level: 75, category: "Intermediate" },
      { name: "Golang (Gin)", level: 75, category: "Intermediate" },
      { name: ".NET Core", level: 70, category: "Intermediate" },
      { name: "CakePHP", level: 75, category: "Intermediate" },
      { name: "FastAPI", level: 70, category: "Intermediate" },
      { name: "PHP", level: 70, category: "Intermediate" }
    ],
    "Database & Cloud": [
      { name: "MongoDB", level: 85, category: "Advanced" },
      { name: "MySQL", level: 80, category: "Advanced" },
      { name: "PostgreSQL", level: 75, category: "Intermediate" },
      { name: "AWS", level: 70, category: "Intermediate" },
      { name: "Firebase", level: 80, category: "Advanced" },
      { name: "Heroku", level: 75, category: "Intermediate" },
      { name: "Docker", level: 75, category: "Intermediate" },
      { name: "Jenkins", level: 70, category: "Intermediate" },
      { name: "Nginx", level: 70, category: "Intermediate" }
    ],
    "AI/ML & Tools": [
      { name: "TensorFlow", level: 70, category: "Intermediate" },
      { name: "PyTorch", level: 65, category: "Intermediate" },
      { name: "Reinforcement Learning", level: 70, category: "Intermediate" },
      { name: "LLM Integration", level: 65, category: "Intermediate" },
      { name: "Git", level: 90, category: "Expert" },
      { name: "RESTful APIs", level: 88, category: "Advanced" },
      { name: "GraphQL", level: 75, category: "Intermediate" },
      { name: "CI/CD Pipelines", level: 75, category: "Intermediate" },
      { name: "Jest", level: 70, category: "Intermediate" },
      { name: "Mocha", level: 70, category: "Intermediate" },
      { name: "Jasmine", level: 70, category: "Intermediate" }
    ]
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Expert": return "bg-teal-500";
      case "Advanced": return "bg-indigo-500";
      case "Intermediate": return "bg-cyan-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section id="skills" className="min-h-screen py-16 px-4 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">Technical Skills</h2>
        <div className="w-20 h-1 bg-indigo-500 mx-auto mb-12"></div>
        
        {/* Skills Grid - 4 columns on large screens, 2 on medium, 1 on small */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
              <h3 className="text-lg sm:text-xl font-bold text-indigo-400 mb-6 text-center">{category}</h3>
              <div className="space-y-4">
                {skillList.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(skill.category)}`}>
                          {skill.category}
                        </span>
                        <span className="text-indigo-400 text-sm font-bold">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-2.5 rounded-full transition-all duration-1000 ease-out group-hover:from-indigo-400 group-hover:to-cyan-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Proficiency Overview */}
        <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-700 max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-indigo-400 mb-6 text-center">Technology Stack Overview</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { category: "Frontend", count: 9, color: "bg-indigo-500" },
              { category: "Backend", count: 9, color: "bg-cyan-500" },
              { category: "Database & Cloud", count: 9, color: "bg-teal-500" },
              { category: "AI/ML & Tools", count: 11, color: "bg-purple-500" }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-white font-bold text-lg">{item.count}</span>
                </div>
                <h4 className="text-white font-semibold">{item.category}</h4>
                <p className="text-gray-400 text-sm">Technologies</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-white">Certifications</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-indigo-500/30 hover:border-indigo-500 transition-colors">
              <h3 className="text-lg sm:text-xl font-bold text-indigo-400 mb-2">Deep Agents with LangGraph</h3>
              <p className="text-gray-300 mb-2">Certificate of Completion</p>
              <p className="text-gray-400 text-sm mb-3">Completed a specialized project on building and deploying AI agents using LangGraph, emphasizing deep learning and conversational AI architectures. Certificate ID: dwgn3hzzon</p>
              <p className="text-indigo-300 text-sm font-medium">Issued: September 2025</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-cyan-500/30 hover:border-cyan-500 transition-colors">
              <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2">Hack-AI-Thon (SBI Life × Hack2Skill)</h3>
              <p className="text-gray-300 mb-2">Certificate of Participation</p>
              <p className="text-gray-400 text-sm">Participated in a nationwide AI innovation hackathon focused on creativity, collaboration, and real-world AI solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Realtime Communication Platform",
      period: "2022 - 2023",
      description: "Enhanced a real-time chat platform with secure Firebase login, instant messaging via Socket.io, and dynamic UI with React & Redux. Expanded engagement features, such as typing indicators, media sharing, and push notifications, improved user retention by 20%.",
      technologies: ["React", "Redux", "Node.js", "Socket.io", "Firebase"],
      achievements: ["Secure Firebase authentication", "Real-time messaging", "Media sharing capabilities", "Push notifications"],
      metrics: "20% user retention improvement",
      status: "Completed"
    },
    {
      title: "Endorsement Platform",
      period: "2023",
      description: "Created a full-stack engagement system using Angular and FastAPI, optimizing MongoDB schemas for 10,000+ daily interactions. Integrated GraphQL APIs and automated deployments via Docker and AWS, improved response times by 25% while achieving 99.9% uptime.",
      technologies: ["Angular", "FastAPI", "MongoDB", "GraphQL", "Docker", "AWS"],
      achievements: ["10,000+ daily interactions", "25% improved response times", "99.9% uptime"],
      metrics: "25% faster response times",
      status: "Completed"
    },
    {
      title: "E-Commerce Catalog",
      period: "2023 - 2024",
      description: "Improved an e-commerce catalog with category filtering, secure checkout, and optimized MySQL queries (reduced load time by 40%). Expanded backend using .NET Core and Stripe for seamless transactions. Implemented CI/CD pipelines with Docker and AWS for reliable deployment.",
      technologies: ["Angular", ".NET Core", "MySQL", "Stripe", "Docker", "AWS"],
      achievements: ["40% reduced load time", "Secure payment processing", "Category filtering"],
      metrics: "40% faster load times",
      status: "Completed"
    },
    {
      title: "Dealership CRM (DP360)",
      period: "2024",
      description: "Created a scalable CRM for automotive dealerships with Angular frontend and CakePHP APIs. Enhanced reliability through Docker containerization and AWS-based CI/CD pipelines, achieving 99.8% uptime. Streamlined collaboration with automated build and deployment workflows.",
      technologies: ["Angular", "CakePHP", "MySQL", "Docker", "AWS", "Nginx"],
      achievements: ["Scalable architecture", "99.8% uptime", "Automated workflows"],
      metrics: "99.8% uptime",
      status: "Completed"
    },
    {
      title: "Next.js Blog Platform with AI",
      period: "2024 - Present",
      description: "Enhanced a high-performance blogging platform using Next.js and Django, boosting SEO by 40%. Integrated AI-driven content recommendations via TensorFlow, improving engagement by 22%. Expanded cloud infrastructure with Docker and AWS for secure, scalable deployment.",
      technologies: ["Next.js", "Django", "TensorFlow", "MongoDB", "Docker", "AWS"],
      achievements: ["40% SEO improvement", "22% engagement increase", "AI content recommendations"],
      metrics: "40% SEO boost",
      status: "In Progress"
    },
    {
      title: "AI Wellness Coach (RL)",
      period: "2024 - Present",
      description: "Expanded a modular wellness platform with Flask APIs for calorie prediction and user tracking. Improved AI accuracy by 15% using reinforcement learning (Q-learning). Automated deployment through Docker and AWS pipelines, handling 500+ daily predictions securely.",
      technologies: ["Flask", "TensorFlow", "MongoDB", "Docker", "AWS"],
      achievements: ["15% AI accuracy improvement", "Reinforcement learning", "500+ daily predictions"],
      metrics: "15% AI accuracy improvement",
      status: "In Progress"
    },
    {
      title: "Secure File Storage & Sharing System",
      period: "2024 - Present",
      description: "Planned and delivered a secure file-sharing platform with Go backend and React frontend. Integrated AWS S3 for cloud storage, JWT authentication, and RBAC security. Deployed using Docker and CI/CD pipelines, achieving 99.95% uptime with high performance.",
      technologies: ["Go (Chi)", "React", "AWS S3", "PostgreSQL", "Docker", "Nginx"],
      achievements: ["99.95% uptime", "JWT & RBAC security", "Cloud storage integration"],
      metrics: "99.95% uptime",
      status: "In Progress"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-16 px-4 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">Key Projects</h2>
        <div className="w-20 h-1 bg-indigo-500 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-700 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-600 flex flex-col group"
            >
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Completed" 
                      ? "bg-teal-900 text-teal-300" 
                      : "bg-indigo-900 text-indigo-300"
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-indigo-400 text-sm mb-3 font-medium">{project.period}</p>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-gray-400 text-sm font-medium mb-2">Key Metrics:</p>
                  <p className="text-teal-400 text-sm font-semibold">{project.metrics}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 bg-gray-600 text-gray-200 rounded-full text-xs hover:bg-indigo-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm font-medium">Achievements:</p>
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
      period: "Jan 2022 – Present",
      duration: "3+ years (1-year internship + 2+ years full-time)",
      description: "Developed and deployed scalable full-stack web applications serving 15,000+ active users and handling 5,000+ daily transactions. Integrated AI-driven features and automation workflows that improved system performance by 35%.",
      achievements: [
        "Engineered full-stack applications using React, Angular, Node.js, Django, and CakePHP",
        "Integrated AI-driven features and automation workflows that improved system performance by 35%",
        "Designed and managed RESTful and GraphQL APIs, optimizing databases to reduce query response times by 40%",
        "Orchestrated cloud deployments on AWS, Firebase, and Heroku, achieving 99.95% uptime",
        "Streamlined development workflows with Docker and Jenkins, reducing deployment time by 30%",
        "Implemented security best practices including JWT authentication and data encryption"
      ],
      technologies: ["React", "Angular", "Node.js", "Django", "CakePHP", "MongoDB", "MySQL", "PostgreSQL", "AWS", "Docker", "Jenkins", "TensorFlow", "GraphQL"]
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-16 px-4 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">Professional Experience</h2>
        <div className="w-20 h-1 bg-indigo-500 mx-auto mb-12"></div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-700 hover:border-indigo-500/50 transition-colors">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-indigo-400 text-base sm:text-lg font-medium mt-1">{exp.company}</p>
                  <p className="text-gray-400 mt-1">{exp.location}</p>
                  <p className="text-gray-300 text-sm mt-1">{exp.duration}</p>
                </div>
                <span className="text-indigo-300 bg-indigo-900/50 px-4 py-2 rounded-full text-sm font-medium mt-2 lg:mt-0 border border-indigo-500/30">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 italic text-base sm:text-lg">{exp.description}</p>
              
              <div className="mb-6">
                <h4 className="text-base sm:text-lg font-semibold text-indigo-400 mb-3">Key Achievements:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="leading-relaxed">{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-indigo-400 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-indigo-600 transition-colors"
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
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-white">Education</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mb-8"></div>
          
          <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-700 max-w-2xl mx-auto hover:border-indigo-500/50 transition-colors">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Bachelor of Science in Computer Science</h3>
                <p className="text-indigo-400 font-medium mt-1">Shri Guru Sandipani Institute of Technology and Science</p>
                <p className="text-gray-400 mt-1">Ujjain, India</p>
              </div>
              <div className="mt-2 lg:mt-0 lg:text-right">
                <span className="text-indigo-300 bg-indigo-900/50 px-3 py-1 rounded-full text-sm font-medium border border-indigo-500/30">
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

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen py-16 px-4 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">Get In Touch</h2>
        <div className="w-20 h-1 bg-indigo-500 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl text-indigo-400 font-semibold">Let's work together</h3>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              I'm currently available for freelance work and open to new opportunities. 
              If you have a project that you want to get started or think you need my help 
              with something, then get in touch.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-gradient-to-r from-indigo-600 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                  <AiOutlineMail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:pratik.raut9115@gmail.com" className="text-white hover:text-indigo-400 transition-colors">pratik.raut9115@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-gradient-to-r from-indigo-600 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:+919111502449" className="text-white hover:text-indigo-400 transition-colors">+91-9111502449</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-gradient-to-r from-indigo-600 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
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
              <p className="text-gray-400 mb-4 font-medium">Connect with me:</p>
              <div className="flex space-x-4 flex-wrap gap-3">
                {[
                  { icon: <FaGithub />, link: "https://github.com/pratikdevelop", label: "GitHub" },
                  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/pratik-raut-39b631227/", label: "LinkedIn" },
                  { icon: <FaKaggle />, link: "https://www.kaggle.com/pratik222", label: "Kaggle" },
                  { icon: <FaDev />, link: "https://dev.to/raut45", label: "Dev Community" },
                  { icon: <FaBitbucket />, link: "https://bitbucket.org/pratik_5678/workspace/overview/", label: "Bitbucket" },
                  { icon: <FaHackerrank />, link: "https://www.hackerrank.com/profile/pratikraut88895", label: "HackerRank" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="p-3 bg-gray-700 rounded-lg hover:bg-indigo-600 transition-colors text-white shadow-lg"
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
          
          <div className="bg-gray-700 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-600">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  required
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  required
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-teal-500 text-white rounded-lg hover:from-indigo-700 hover:to-teal-600 transition-colors shadow-lg font-medium"
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
    <footer className="bg-gray-900 py-8 text-center text-gray-400 border-t border-gray-700">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/pratikdevelop" },
            { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/pratik-raut-39b631227/" },
            { icon: <FaKaggle />, link: "https://www.kaggle.com/pratik222" },
            { icon: <FaDev />, link: "https://dev.to/raut45" },
            { icon: <FaBitbucket />, link: "https://bitbucket.org/pratik_5678/workspace/overview/" },
            { icon: <FaHackerrank />, link: "https://www.hackerrank.com/profile/pratikraut88895" },
            { icon: <AiOutlineMail />, link: "mailto:pratik.raut9115@gmail.com" }
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
        <p className="text-sm mt-2 text-gray-500">Full-Stack Software Engineer & AI Developer</p>
        <p className="text-xs mt-2 text-gray-600">Designed and developed with ❤️ using Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Portfolio;