import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import pincodekart1 from '../../assets/images/pincodekart1.webp';
import pincodekartvd1 from '../../assets/images/pincodekartvd1.webp';

interface ProjectsProps {
  animate: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const ProjectPincodekart: React.FC<ProjectsProps> = ({ animate }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(animate);
  }, [animate]);

  const projectsData = [
    {
      imageSrc: pincodekart1,
      imageAlt: 'Project 1',
      title: 'Pincodekart - Mobile app ',
      description: 'Built and maintained the Pincodekart e-commerce mobile application using React Native CLI and TypeScript. Implemented GraphQL APIs, Firebase push notifications, Razorpay payment integration, and native features like camera, maps, and location services to enable seamless product browsing, ordering, and real-time delivery tracking.',
      techStack: ['React Native', 'Firebase', 'Redux', 'Context API', 'Zustand', 'Javascript', 'TypeScript', "Android Studio", "Xcode", "Razorpay"],
      link: 'https://play.google.com/store/apps/details?id=com.pincodekart.customerapp2025&pcampaignid=web_share',
    },
    {
      imageSrc: pincodekartvd1,
      imageAlt: 'Project 2',
      title: 'Pincodekart VD - Mobile app ',
      description: 'Built the Pincodekart VD (Virtual Dukkandar) delivery partner application using React Native CLI and TypeScript. The platform enables delivery agents to manage assigned orders, perform open-box deliveries, scan QR codes for verification, handle exchange pickups, reschedule orders, and update real-time order statuses. Implemented wallet and withdrawal management for partners and referral features for connecting with other Dukkandars. Integrated GraphQL APIs, Firebase push notifications, camera-based QR scanning, and location services to improve delivery efficiency and real-time operational tracking.',
      techStack: ['React Native', 'Firebase', 'Redux', 'Context API', 'Zustand', 'Javascript', 'TypeScript', 'GraphQL', "Android Studio", "Xcode", "Razorpay"],
      link: 'https://play.google.com/store/apps/details?id=com.pincodekart.virtualdukandaar&pcampaignid=web_share',
    },
  ];

  return (
    <motion.div
      className="pb-4"
      initial="hidden"
      animate={isAnimated ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h1
        className="my-20 mx-10 text-center text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-purple-400"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        whileHover={{ scale: 1.05 }}
      >
        Projects
      </motion.h1>
      <div className="flex flex-col gap-6">
        {projectsData.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
export default ProjectPincodekart;
