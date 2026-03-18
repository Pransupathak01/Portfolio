import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import pincodeKonnect1 from '../../assets/images/pincodekonnect1.webp';
import pincodedakminihub1 from '../../assets/images/pincodekartMinihub1.webp';

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
      imageSrc: pincodeKonnect1,
      imageAlt: 'Project 3',
      title: 'PincodeKonnect - Mobile app ',
      description: 'Developed PincodeKonnect, a community platform for Pincodekart Virtual Dukkandars (VDs) built with React Native CLI and TypeScript. The application connects VDs across the network, enabling them to share posts, videos, and updates similar to a social media platform. It allows partners to interact through chats, stay informed about new business ideas, company announcements, and platform updates from Pincodekart. Integrated WebSocket APIs, Firebase push notifications, real-time messaging, media uploads, and scalable state management to create an engaging community-driven ecosystem for VDs.',
      techStack: ['React Native', 'Firebase', 'WebSocket', 'Context API', 'Zustand', 'Javascript', 'TypeScript', 'GraphQL', "Android Studio", "Xcode", "Razorpay"],
      link: 'https://play.google.com/store/apps/details?id=com.pincodekonnect&pcampaignid=web_share',
    },
    {
      imageSrc: pincodedakminihub1,
      imageAlt: 'Project 3',
      title: 'PincodeDak Mini Hub - Mobile app ',
      description: 'Developed the PincodeDak Mini Hub mobile application for logistics teams to manage parcel pickups from manufacturers and streamline dispatch operations to mini hub locations. The app enables scanning of packed products for verification, ensures safe dispatch handling, and supports real-time order tracking throughout the logistics lifecycle. Integrated GraphQL APIs and WebSocket for live status updates, along with Firebase notifications to enhance operational communication. Focused on improving efficiency, accuracy, and visibility across the supply chain process.',
      techStack: ['React Native', 'Firebase', 'WebSocket', 'Context API', 'Zustand', 'Javascript', 'TypeScript', 'GraphQL', "Android Studio", "Xcode"],
      link: 'https://play.google.com/store/apps/details?id=com.pincodedak.minihub&pcampaignid=web_share',
    }
  ];

  return (
    <motion.div
      className="pb-4"
      initial="hidden"
      animate={isAnimated ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* <motion.h1
        className="my-20 mx-10 text-center text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-purple-400"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        whileHover={{ scale: 1.05 }}
      >
        Projects
      </motion.h1> */}
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
