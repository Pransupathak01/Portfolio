import React, { useEffect, useState, useRef } from "react";
import AboutMe from "./app/AboutMe";
import GetInTouch from "./app/GetInTouch";
import Experience from "./app/Experience";
import Hero from "./app/Hero";
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

  const getInTouchRef = useRef(null);

  const sections = [
    { id: "hero", ref: heroRef },
    { id: "aboutme", ref: aboutMeRef },
    { id: "technologies", ref: technologiesRef },
    { id: "experience", ref: experienceRef },
    { id: "projects", ref: projectsRef },
     { id: "projects1", ref: projectsRef1 },
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
    <div className="overflow-x-hidden h-screen w-screen mx-auto flex flex-col px-8 md:px-12 xl:px-32 2xl:px-56 bg-gradient-to-b text-white">
      <div ref={heroRef} id="hero">
      <Navbar animate={currentSection === "#hero"}/>
      </div>
      <div ref={heroRef} id="hero">
        <Hero animate={currentSection === "#hero"} />
      </div>
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
        <ProjectMob animate={currentSection === "#projects"} />
      </div>
      <div ref={projectsRef1} id="projects1">
        <ProjectWeb animate={currentSection === "#projects1"} />
      </div>
      <div ref={getInTouchRef} id="contact">
        <GetInTouch animate={currentSection === "#contact"} />
      </div>
    </div>
  );
}

export default App;
