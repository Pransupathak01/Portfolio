import React, { useEffect, useState, useRef } from "react";
import AboutMe from "./app/AboutMe";
import GetInTouch from "./app/GetInTouch";
import Experience from "./app/experience/Experience";
import Hero from "./app/Hero";
import ProjectPincodekart1 from "./app/projects/projectPincodekart1";
import ProjectPincodekart2 from "./app/projects/projectPincodekart2";

import ProjectMob from "./app/projects/ProjectMob";
import ProjectWeb from "./app/projects/ProjectWeb";

import Technologies from "./app/Technologies";
import Navbar from "./app/Navbar";
const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>(window.location.hash);

  const heroRef = useRef(null);
  const aboutMeRef = useRef(null);
  const technologiesRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const projectsRef1 = useRef(null);
  const projectsRef2 = useRef(null);
  const projectsRef3 = useRef(null);

  const getInTouchRef = useRef(null);

  const sections = [
    { id: "hero", ref: heroRef },
    { id: "aboutme", ref: aboutMeRef },
    { id: "technologies", ref: technologiesRef },
    { id: "experience", ref: experienceRef },
    { id: "projects", ref: projectsRef },
    { id: "projects1", ref: projectsRef1 },
    { id: "projects2", ref: projectsRef2 },
    { id: "projects3", ref: projectsRef3 },

    // { id: "projects", ref: projectsRef },
    { id: "contact", ref: getInTouchRef },
  ];
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { id } = entry.target;
          if (entry.isIntersecting) {
            setCurrentSection(`#${id}`)
            window.history.pushState({}, "", `#${id}`);
          }
        });
      },
      observerOptions
    );

    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-neutral-950 text-neutral-100 overflow-x-hidden font-sans selection:bg-purple-500/30">
      {/* Ambient Background Glows */}
      <div className="bg-glow-purple"></div>
      <div className="bg-glow-blue"></div>

      {/* Light Noise Overlay for Texture */}
      <div className="fixed inset-0 z-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex flex-col px-6 md:px-12 xl:px-32 2xl:px-56 max-w-[1920px]">
        <section ref={heroRef} id="hero" className="flex flex-col">
          <Navbar animate={currentSection === "#hero"} />
          <Hero animate={currentSection === "#hero"} />
        </section>
        <div ref={aboutMeRef} id="aboutme">
          <AboutMe animate={currentSection === "#aboutme"} />
        </div>
        <div ref={technologiesRef} id="technologies">
          <Technologies animate={currentSection === "#technologies"} />
        </div>
        <div ref={experienceRef} id="experience">
          <Experience animate={currentSection === "#experience"} />
        </div>
        <div ref={projectsRef} id="projects">
          <ProjectPincodekart1 animate={currentSection === "#projects"} />
        </div>
        <div ref={projectsRef1} id="projects1">
          <ProjectPincodekart2 animate={currentSection === "#projects1"} />
        </div>
        <div ref={projectsRef2} id="projects2">
          <ProjectMob animate={currentSection === "#projects2"} />
        </div>
        <div ref={projectsRef3} id="projects3">
          <ProjectWeb animate={currentSection === "#projects3"} />
        </div>

        <div ref={getInTouchRef} id="contact">
          <GetInTouch animate={currentSection === "#contact"} />
        </div>
      </div>
    </div>
  );
}

export default App;
