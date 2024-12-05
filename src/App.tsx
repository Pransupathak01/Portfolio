import React, { useEffect, useState, useRef } from "react";
import AboutMe from "./component/AboutMe/AboutMe";
import GetInTouch from "./component/Contact/GetInTouch";
import Experience from "./component/Experience/Experience";
import Hero from "./component/Hero/Hero";
import Projects from "./component/Projects/Projects";
import Technologies from "./component/Technologies/Technologies";
import Navbar from "./component/navbar/Navbar";
const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>(window.location.hash); 

  const heroRef = useRef(null);
  const aboutMeRef = useRef(null);
  const technologiesRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const getInTouchRef = useRef(null);

  const sections = [
    { id: "hero", ref: heroRef },
    { id: "aboutme", ref: aboutMeRef },
    { id: "technologies", ref: technologiesRef },
    { id: "experience", ref: experienceRef },
    { id: "projects", ref: projectsRef },
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
    <div className="overflow-x-hidden h-screen w-screen mx-auto flex flex-col md:px-36 xl:px-56 bg-gradient-to-b text-white">
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
        <Projects animate={currentSection === "#projects"} />
      </div>
      <div ref={getInTouchRef} id="projects">
        <GetInTouch animate={currentSection === "#projects"} />
      </div>
    </div>
  );
}

export default App;
