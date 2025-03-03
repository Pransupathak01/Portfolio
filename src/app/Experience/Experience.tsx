import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import experienceCard from "../../component/Experience/ExperienceCard";
interface ExperienceProps {
  animate: boolean;
}
const Experience: React.FC<ExperienceProps> = ({ animate }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const experience1 = experienceCard({
    from: 'July 2023',
    to: 'Present',
    position: 'Software Engineer',
    company: 'eCorfy Technologies Pvt. Ltd.',
    description: 'Architected and integrated a suite of reusable React components,enhancing application flexibility and maintainability, leading to a 25% increase in developer productivity and a 30% reduction in bug fixes. Managed complex application state using Redux and Context API, ensuring seamless state synchronization. Diagnosed and resolved complex bugs and performance issues by systematically analyzing code and using console logs to trace errors. ',
    techStack: ['Javascript', 'React.js', 'Redux', 'Tailwind css', 'Node.js', 'MySql']
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
        {experience1}

      </div>
    </motion.div>
  );
};
export default Experience;
