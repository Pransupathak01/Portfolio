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
              to do. In my initial days at Accenture, I have honed my skills in
              developing and managing strong security solutions for SAP systems.
              My experience with SAP Security has given me a thorough
              understanding of role creation, user management, access controls,
              and compliance requirements. Driven by a passion for crafting
              intuitive user experiences ,I transitioned into frontend
              development, where I am currently most comfortable making dynamic
              web apps and bringing concepts to life. Working on dynamic frontend
              projects that improve user interactions and spur corporate
              development has allowed me to use my solid foundation in HTML, CSS,
              and JavaScript. My journey at RCPL as a trainee furnished me with
              significant perspectives on the software development lifecycle and
              acquainted me with the most recent instruments, technologies, and
              industry best practices. I have developed an android application,
              demonstrating expertise in Java, and XML. My educational background
              includes a Bachelor's degree in Computer Science from KIIT
              University. Throughout my academic career, I stressed academic
              success as well as extracurricular activities. Maintaining a strong
              academic record, I took advantage of the chance to participate
              actively in a variety of extracurricular activities. My technical
              skills includes front-end development, back end development. I have
              hands-on experience with tools like Android Studio and Visual Studio
              Code, and I am fluent in several programming languages, including
              Java and JavaScript.
            </p>

          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default AboutMe;
