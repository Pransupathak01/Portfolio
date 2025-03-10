import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import experienceCard from "../../component/Experience/ExperienceCard";
interface ExperienceProps {
  animate: boolean;
}
const Experience: React.FC<ExperienceProps> = ({ animate }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const experience1 = experienceCard({
    from: 'October 2023',
    to: 'Present',
    position: 'Software Engineer',
    company: 'eCorfy Technologies Pvt. Ltd.',
    description: 'I have successfully developed and maintained websites and mobile applications for clients across various online platforms, ensuring optimal performance and user engagement. I specialize in designing and building advanced Android and iOS applications, integrating third-party APIs and secure payment gateways to enhance functionality. My expertise includes writing clean, efficient, and scalable code following industry best practices. I have implemented key features such as camera modules, push notifications, and seamless social media login. Additionally, I have architected reusable React components, managed state using Redux and Context API, and resolved complex bugs by systematically analyzing code and optimizing performance for a seamless user experience.',
    techStack: ['Javascript', 'React Native', 'React.js', 'Tailwind CSS', 'Redux', 'Node.js', 'Express.js', 'MySql', 'MongoDB']
  })

  const experience2 = experienceCard({
    from: 'July 2023',
    to: 'October 2023',
    position: 'Software Tainee',
    company: 'eCorfy Technologies Pvt. Ltd.',
    description: 'Architected and integrated a suite of reusable React components,enhancing application flexibility and maintainability. Managed complex application state using Redux and Context API, ensuring seamless state synchronization. Diagnosed and resolved complex bugs and performance issues by systematically analyzing code and using console logs to trace errors. ',
    techStack: ['Html', 'CSS', 'Javascript', 'React.js', 'Redux', 'Node.js', 'Express.js', 'MySql', 'MongoDB', 'Git']
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
        Experience
      </motion.h1>
      <div>
        {experience1}
        {experience2}

      </div>
    </motion.div>
  );
};
export default Experience;
