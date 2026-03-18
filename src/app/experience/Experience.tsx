import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

interface ExperienceProps {
  animate: boolean;
}

// Define the experience data
const experiences = [
  {
    from: "October 2025",
    to: "Present",
    position: "Mobile App Developer",
    company: "AIVS Pincodekart Pvt. Ltd.",
    description:
      "Architected and integrated a suite of reusable React components, enhancing application flexibility and maintainability. Managed complex application state using Redux and Context API, ensuring seamless state synchronization. Diagnosed and resolved complex bugs and performance issues by systematically analyzing code and using console logs to trace errors.",
    techStack: [
      "React Native",
      "Firebase",
      "Web Socket",
      "Javascript",
      "Next.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MySql",
      "MongoDB",
      "Git",
      "Google Play Store",
      "App Store",
      "Razor pay",
    ],
  },
  {
    from: "July 2023",
    to: "September 2025",
    position: "Software Engineer",
    company: "eCorfy Technologies Pvt. Ltd.",
    description:
      "Developed and maintained websites and mobile applications for clients, integrating third‑party APIs and secure payment gateways. Implemented camera modules, push notifications, and social media login. Built reusable React components, managed state with Redux and Context API, and resolved complex bugs to ensure seamless user experience.",
    techStack: [
      "Javascript",
      "React Native",
      "Expo",
      "React.js",
      "Tailwind CSS",
      "Redux",
      "Node.js",
      "Express.js",
      "MySql",
      "MongoDB",
    ],
  },
];

// Animation variants for the container and each card
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } },
};

const Experience: React.FC<ExperienceProps> = ({ animate }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(animate);
  }, [animate]);

  return (
    <motion.div
      className="mb-12 flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      animate={isAnimated ? "visible" : "hidden"}
    >
      <motion.h1
        className="my-20 text-center text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-purple-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Experience
      </motion.h1>
      <div className="w-full flex flex-col gap-8">
        {experiences.map((exp, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <div className="mb-12 flex flex-wrap lg:justify-center p-6 rounded-2xl bg-neutral-900/20 border border-neutral-800/50 hover:border-purple-500/30 hover:bg-neutral-900/40 transition-all duration-500 ease-out">
              <ExperienceCard {...exp} />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
