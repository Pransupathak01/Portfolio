import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import projectCard from "./ProjectCard";
import crstImage from '../../assets/images/crst2.png';
import crstDriverImage from '../../assets/images/crstDriver1.jpeg';

interface ProjectsProps {
  animate: boolean;
}
const ProjectMob: React.FC<ProjectsProps> = ({ animate }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  const project1 = projectCard({
    imageSrc: crstDriverImage,
    imageAlt: 'Project 1',
    title: 'CrstDriver - Mobile app ',
    description: 'I developed and maintained the CRSTDriver mobile application using React Native and Expo, streamlining delivery and pickup management for CRST truck drivers. The app enables drivers to submit pickup confirmations, handle exceptions, and track document progress efficiently. It supports multiple user accounts with administrative oversight, ensuring seamless operations. By integrating real-time updates, the app enhances communication between drivers and dispatch teams. This enhanced workflow efficiency, reduced manual paperwork, leading to a more structured and productive logistics process.',
    techStack: ['React Native', 'Expo', 'Tailwind CSS', 'Redux', 'Context API', 'Javascript', 'TypeScript', "Android Studio", "Xcode"],
  })

  const project2 = projectCard({
    imageSrc: crstImage,
    imageAlt: 'Project 2',
    title: 'Crst - Mobile app ',
    description: 'I developed the CRST Mobile App to streamline transportation and logistics operations, covering job installation, delivery coordination, and product distribution. Key features include onsite job management, adding additional SKUs, and capturing required pictures for documentation. This enhanced operational efficiency, improved tracking, and ensured seamless communication between drivers, dispatch, and administrative teams.',
    techStack: ['React Native', 'StyleSheet', 'React.js', 'Context API', 'Redux', 'Javascript', 'TypeScript', "Android Studio", "Xcode"],
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
      className=" pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: isAnimated ? 1 : 0, x: isAnimated ? 0 : -50 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="my-20 mx-10 text-center text-4xl"
        whileHover={{ scale: 1.2 }}
      >
        Projects
      </motion.h1>
      <motion.div>
        {project1}
        {project2}
      </motion.div>
    </motion.div>
  );
};
export default ProjectMob;
