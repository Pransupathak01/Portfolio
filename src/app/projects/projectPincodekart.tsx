import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import projectCard from "./ProjectCard";
import pincodekart1 from '../../assets/images/pincodekart1.webp';
import pincodekartvd1 from '../../assets/images/pincodekartvd1.webp';
import pincodeKonnect1 from '../../assets/images/pincodekonnect1.webp';

interface ProjectsProps {
    animate: boolean;
}
const ProjectPincodekart: React.FC<ProjectsProps> = ({ animate }) => {
    const [isAnimated, setIsAnimated] = useState(false);

    const project1 = projectCard({
        imageSrc: pincodekart1,
        imageAlt: 'Project 1',
        title: 'Pincodekart - Mobile app ',
        description: 'Built and maintained the Pincodekart e-commerce mobile application using React Native CLI and TypeScript. Implemented GraphQL APIs, Firebase push notifications, Razorpay payment integration, and native features like camera, maps, and location services to enable seamless product browsing, ordering, and real-time delivery tracking.',
        techStack: ['React Native', 'Firebase', 'Redux', 'Context API', 'Zustand', 'Javascript', 'TypeScript', "Android Studio", "Xcode", "Razorpay"],
        link: 'https://play.google.com/store/apps/details?id=com.pincodekart.customerapp2025&pcampaignid=web_share',
    })
    const project2 = projectCard({
        imageSrc: pincodekartvd1,
        imageAlt: 'Project 2',
        title: 'Pincodekart VD - Mobile app ',
        description:
            'Built the Pincodekart VD (Virtual Dukkandar) delivery partner application using React Native CLI and TypeScript. The platform enables delivery agents to manage assigned orders, perform open-box deliveries, scan QR codes for verification, handle exchange pickups, reschedule orders, and update real-time order statuses. Implemented wallet and withdrawal management for partners and referral features for connecting with other Dukkandars. Integrated GraphQL APIs, Firebase push notifications, camera-based QR scanning, and location services to improve delivery efficiency and real-time operational tracking.',
        techStack: ['React Native', 'Firebase', 'Redux', 'Context API', 'Zustand', 'Javascript', 'TypeScript', 'GraphQL', "Android Studio", "Xcode", "Razorpay"],
        link: 'https://play.google.com/store/apps/details?id=com.pincodekart.virtualdukandaar&pcampaignid=web_share',
    })
    const project3 = projectCard({
        imageSrc: pincodeKonnect1,
        imageAlt: 'Project 3',
        title: 'PincodeKonnect - Mobile app ',
        description:
            'Developed PincodeKonnect, a community platform for Pincodekart Virtual Dukkandars (VDs) built with React Native CLI and TypeScript. The application connects VDs across the network, enabling them to share posts, videos, and updates similar to a social media platform. It allows partners to interact through chats, stay informed about new business ideas, company announcements, and platform updates from Pincodekart. Integrated WebSocket APIs, Firebase push notifications, real-time messaging, media uploads, and scalable state management to create an engaging community-driven ecosystem for VDs.',
        techStack: ['React Native', 'Firebase', 'WebSocket', 'Context API', 'Zustand', 'Javascript', 'TypeScript', 'GraphQL', "Android Studio", "Xcode", "Razorpay"],
        link: 'https://play.google.com/store/apps/details?id=com.pincodekonnect&pcampaignid=web_share',
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
                {project3}
            </motion.div>
        </motion.div>
    );
};
export default ProjectPincodekart;
