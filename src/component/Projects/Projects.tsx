import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import projectCard from "./component/ProjectCard";
interface ProjectsProps {
  animate: boolean;
}
const Projects: React.FC<ProjectsProps> = ({ animate }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const project1 = projectCard({
    imageSrc: '/cinemastic.png',
    imageAlt: 'Project 1',
    title: 'Cinematic Database',
    description: 'An Interactive platform designed to provide users with a comprehensive and engaging movie discovery experience. Built using ReactJS, this application showcases a modern and visually appealing user interface that simplifies the process of finding and exploring movies.',
    techStack: ['HTML', 'Tailwind CSS', 'React.js', 'Redux', 'Javascript', 'TypeScript'],
  })
  useEffect(() => {
    if (animate) {
      setIsAnimated(true);
    } else {
      setIsAnimated(false);
    }
  }, [animate]);
  return (
    <motion.div
      className="border-b border-neutral-900 pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: isAnimated ? 1 : 0, x: isAnimated ? 0 : -50 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="my-20 text-center text-4xl"
        whileHover={{ scale: 1.2 }}
      >
        Projects
      </motion.h1>
      <motion.div>
        {project1}
        {project1}
      </motion.div>
    </motion.div>
  );
};
export default Projects;
