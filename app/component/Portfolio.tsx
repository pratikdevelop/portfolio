'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillFilePersonFill } from "react-icons/bs";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="home" className="min-h-screen flex items-center justify-center py-16 bg-gradient-to-b from-gray-900 to-black">
      <div
        className={`grid grid-cols-1 md:grid-cols-5 p-8 md:p-16 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col col-span-3 p-8 md:p-16 space-y-4">
          <span className="font-bold text-white tracking-normal text-2xl">
            Hello, I am
          </span>
          <span className="text-purple-600 text-4xl animate-pulse">
            A Pratik Raut
          </span>
          <h1 className="text-purple-700 text-4xl drop-shadow-2xl">
            Full Stack Developer & DevOps Beginner
          </h1>
          <div className="flex items-center mt-5 space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full shadow-2xl text-white border-white border-2 p-3 hover:scale-110 shadow-white cursor-pointer transition-all duration-300 hover:bg-purple-600"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full shadow-2xl text-white border-white border-2 p-3 hover:scale-110 shadow-white cursor-pointer transition-all duration-300 hover:bg-purple-600"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="rounded-full shadow-2xl text-white border-white border-2 p-3 hover:scale-110 shadow-white cursor-pointer transition-all duration-300 hover:bg-purple-600"
            >
              <AiOutlineMail />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full shadow-2xl text-white border-white border-2 p-3 hover:scale-110 shadow-white cursor-pointer transition-all duration-300 hover:bg-purple-600"
            >
              <BsFillFilePersonFill />
            </a>
          </div>
          <div className="flex items-center space-x-4 mr-auto">
            <button className="my-5 font-semibold text-xs text-purple-600 hover:text-white rounded-2xl shadow-2xl border-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-600 py-2 transition-all duration-300 mr-auto px-6 border-2 hover:border-gray-200 transform hover:-translate-y-1">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-2 flex justify-center items-center mt-8 md:mt-0">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 animate-pulse"></div>
            <Image
              src="https://pics.craiyon.com/2023-09-20/a1bc4a53522c4249a9a0f2af9adefb0d.webp"
              alt="profile image"
              className="rounded-lg h-[40vh] md:h-[50vh] w-auto relative"
              width={300}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="about"
      className="relative flex flex-col md:flex-row p-5 w-full min-h-screen items-center justify-center py-16 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="w-full md:w-2/6 flex items-center justify-center mb-8 md:mb-0">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl shadow-purple-500/50">
            PR
          </div>
        </div>
      </div>

      <div
        className={`w-full md:w-4/6 flex flex-col items-start space-y-4 px-4 md:px-8 transition-all duration-1000 ease-out delay-300 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <span className="text-4xl font-bold capitalize text-white">
          About Me
        </span>
        <span className="text-white uppercase text-2xl">
          Let me intro
          <span className="text-purple-600">duced my self </span>
        </span>
        <p className="text-sm leading-7 font-medium text-white">
          Hello, I am A Pratik Raut Full Stack Developer & DevOps Beginner
          Hailing from Ujjain, Madhya Pradesh, and armed with a fresh Bachelor's
          degree in Computer Science, I bring a passion for crafting user-centric
          web applications to the table. My 2-year journey as a Full-Stack
          Developer has equipped me to excel in both front-end development
          (utilizing frameworks like React and Angular) and back-end development
          (leveraging Node.js and Django). My fluency in JavaScript and Python
          allows me to seamlessly integrate APIs using industry standards like
          RESTful and GraphQL. Beyond the core development skills, I possess a
          diverse technical skillset. I can confidently navigate and manage data
          structures using popular databases like MongoDB, MySQL, and PostgreSQL.
          When it comes to deployment, I'm adept at leveraging leading cloud
          platforms like Heroku, AWS, and Firebase to ensure smooth application
          management. My commitment to clean and efficient code is reflected in
          my proficiency with version control systems like Git and GitHub.
          Additionally, I'm well-versed in front-end development tools like
          Redux, jQuery, and Bootstrap, allowing me to create user interfaces
          that are both responsive and engaging. To guarantee application
          quality, I implement rigorous testing methodologies using Jest and
          Mocha frameworks. Finally, my foundational understanding of DevOps
          tools (Docker, Jenkins, CircleCI, AWS) positions me to contribute to
          efficient deployment pipelines.
        </p>
      </div>
    </div>
  );
};

const Project = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const projectSection = document.getElementById("projects");
    if (projectSection) {
      observer.observe(projectSection);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Realtime Chat App",
      description:
        "Built interactive chat app with React frontend and Redux for state management. Integrated Firebase for user authentication and secure data storage. Implemented Node.js backend with Socket.io for real-time messaging. Showcased skills in modern web dev & creating seamless user experiences.",
      technologies: ["Reactjs", "Material UI", "Node.js", "Socket.io", "MongoDB"],
      icon: "💬"
    },
    {
      title: "Endorsement Platform",
      description:
        "Led 'Social Connect' Project: Fostered impactful online interactions & user engagement. Adept Project Management: Ensured successful execution from concept to deployment. Full-Stack Development: Contributed with proficiency in front-end & back-end technologies. Seamless Social Integration: Enhanced user engagement through social features.",
      technologies: ["Angular", "Angular Material", "Django", "Stripe", "MongoDB"],
      icon: "🌟"
    },
    {
      title: "E-Commerce Catalog",
      description:
        "Developed a comprehensive e-commerce solution with product catalog, shopping cart, and payment integration. Implemented user authentication, product search, and recommendation features. Optimized for performance and mobile responsiveness.",
      technologies: ["Reactjs", "Material UI", "Node.js", "MongoDB", "Stripe"],
      icon: "🛒"
    }
  ];

  return (
    <div id="projects" className="min-h-screen py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="flex flex-col items-center w-full mb-12">
        <div
          className={`text-center text-4xl uppercase text-white mb-4 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ fontWeight: "600" }}
        >
          My <span className="text-purple-600">Projects</span>
        </div>
        <span className={`text-sm font-normal leading-6 tracking-wider text-slate-400 transition-all duration-1000 ease-out delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          Explore my recent work and personal projects
        </span>
      </div>

      <div className="flex flex-col items-center justify-center space-y-8 px-4 md:px-16">
        {/* Project selector */}
        <div className={`flex space-x-4 mb-8 transition-all duration-1000 ease-out delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeProject === index
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Project display */}
        <div className={`w-full max-w-4xl transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
          <div className="bg-gray-800 rounded-xl p-6 shadow-2xl shadow-purple-500/10 border border-gray-700">
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">{projects[activeProject].icon}</div>
              <h3 className="text-2xl font-bold text-white">{projects[activeProject].title}</h3>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {projects[activeProject].description}
            </p>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {projects[activeProject].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                View Demo
              </button>
              <button className="px-4 py-2 border border-purple-600 text-purple-400 rounded-lg hover:bg-purple-900 transition-colors">
                Source Code
              </button>
            </div>
          </div>
        </div>

        {/* Project navigation */}
        <div className={`flex space-x-4 mt-8 transition-all duration-1000 ease-out delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <button
            onClick={() => setActiveProject((activeProject - 1 + projects.length) % projects.length)}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Previous
          </button>
          <button
            onClick={() => setActiveProject((activeProject + 1) % projects.length)}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="bg-black text-white">
      <Home />
      <About />
      <Project />
    </div>
  );
};

export default Portfolio;