import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface AboutMeProps {
  animate: boolean;
}
const AboutMe: React.FC<AboutMeProps> = ({ animate }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (animate) {
      setIsAnimated(true);
    } else {
      setIsAnimated(false);
    }
  }, [animate]);
  return (
    <motion.div
      className="border border-neutral-900 pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: isAnimated ? 1 : 0, x: isAnimated ? 0 : -50 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="my-20 text-center text-4xl"
        whileHover={{ scale: 1.2 }}
      >
        About
        <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <div
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl shadow-lg shadow-gray-500"
              src="about.jpeg"
              alt="about"
            />
          </div>
        </div>
        <div
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-8 pr-4">
              I am an innovative problem solver with a creative flair who is
              passionate about examining the nexus between technology and the
              human experience. Leveraging my experience and adding to interesting
              projects that fit my values and interests is something I'm excited
              to do. My journey in software development started with React.js,
              where I built web applications, and later expanded into Node.js, Express.js,
              and MySQL for backend development. During my initial days at my company,
              I worked across multiple technologies, which gave me a well-rounded understanding
              of full-stack development. Over time, I transitioned into React Native,
              focusing on building high-quality mobile applications. I have contributed to
              product-based projects and have also worked on chatbot development, gaining experience
              in integrating AI-driven solutions into mobile applications.
              My goal has always been to learn, adapt, and contribute to my organization's
              growth by applying my skills and sharing my learning experiences.
            </p>

          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default AboutMe;
