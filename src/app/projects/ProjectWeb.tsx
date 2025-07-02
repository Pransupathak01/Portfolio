import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import projectCard from "./ProjectCard";
import cimemaImage from '../../assets/images/cinema2.png';
import uniLinksImage from '../../assets/images/unilink1.png';
import cStarImage from '../../assets/images/cstar1.png';


interface ProjectsProps {
  animate: boolean;
}
const ProjectWeb: React.FC<ProjectsProps> = ({ animate }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  const project3 = projectCard({
    imageSrc: uniLinksImage,
    imageAlt: 'Project 3',
    title: ' UniLink - Mobile app',
    description: 'I developed a multi-platform authentication system using Firebase for both iOS and Android apps, supporting email/password login and third-party authentication. The app is integrated with push notifications, ensuring real-time updates. Additionally, I implemented a chat system powered by AI tools, enabling seamless communication with an intelligent assistant. The AI chat provides automated responses, personalized recommendations, and user support. Firebase handles user authentication, data synchronization, and cloud messaging, ensuring a secure and efficient experience. The app is designed for scalability, real-time interaction, and cross-platform compatibility, enhancing user engagement and accessibility across different devices.',
    techStack: ['Expo', 'React Native', 'Firebase', "Generative AI", 'Tailwind CSS', 'Redux', 'Javascript', 'TypeScript', "UI/UX"],
  })

  const project4 = projectCard({
    imageSrc: cStarImage,
    imageAlt: 'Project 4',
    title: 'C-Star Global - Website',
    description: 'I developed the C-STAR Global website to facilitate knowledge sharing and provide a platform for professionals to connect. I implemented modern web development practices, ensuring a responsive and user-friendly experience. Additionally, I updated old codebases to align with current standards, enhancing functionality, security, and maintainability.',
    techStack: ['Javascript', 'React.js', 'Tailwind CSS', 'Redux', 'Javascript', 'TypeScript', "UI/UX"],
  })

  const project5 = projectCard({
    imageSrc: cimemaImage,
    imageAlt: 'Project 5',
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
      <motion.div>
        {project3} 
        {project4}
        {project5}
      </motion.div>
    </motion.div>
  );
};
export default ProjectWeb;
