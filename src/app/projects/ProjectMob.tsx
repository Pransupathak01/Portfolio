import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import projectCard from "../../component/projects/ProjectCard";
import crstImage from '../../assets/images/crst2.png';
import crstDriverImage from '../../assets/images/crstDriver1.jpeg';
import uniLinksImage from '../../assets/images/unilink1.png';
import cStarImage from '../../assets/images/cstar1.png';


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
    description: 'I developed the C-STAR Global website to facilitate knowledge sharing and provide a platform for professionals to connect. I implemented modern web development practices, ensuring a responsive and user-friendly experience. Additionally, I updated old codebases to align with current standards, enhancing functionality, security, and maintainability. By optimizing performance, SEO, and accessibility, I helped establish C-STAR Global as a trusted resource for professionals worldwide.',
    techStack: ['Javascript', 'React.js', 'Tailwind CSS', 'Redux', 'Javascript', 'TypeScript', "UI/UX"],
  })

  const project5 = projectCard({
    imageSrc: '/cinemastic.png',
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
        {/* {project3} */}
        {/* {project4}
        {project5} */}
      </motion.div>
      {/* <motion.div>
        {project4}
        {project5}
      </motion.div> */}
    </motion.div>
  );
};
export default ProjectMob;
