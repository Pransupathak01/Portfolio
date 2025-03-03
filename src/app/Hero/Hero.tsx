import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface HeroProps {
  animate: boolean;
}
const Hero: React.FC<HeroProps> = ({ animate }) => {
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
      className="border-b border-neutral-900 pb-4 lg:mb-35"
      initial={{ opacity: 0 }}
      animate={{ opacity: isAnimated ? 1 : 0, x: isAnimated ? 0 : -50 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
              whileHover={{ scale: 1.1 }}
            >
              Pransu Pathak
            </motion.h1>
            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
              whileHover={{ scale: 1.1 }}
            >
              Software Developer
            </motion.span>
            <motion.p
              className="my-2 max-w-xl py-6 font-light tracking-tight"
              whileHover={{ scale: 1.05 }}
            >
              "I am a passionate React Native and Web Developer with expertise in both Expo and native development.
              With 1.6+ years of hands-on experience, I have built responsive, high-performance mobile and web
              applications using modern JavaScript frameworks like React, Redux, and Tailwind CSS. I have a strong
              background in integrating RESTful APIs, ensuring seamless communication between front-end and
              backend services. My goal is to leverage my skills in React, AI, and full-stack development to create innovative,
              user-centric solutions that enhance productivity and engagement across mobile and web platforms."
            </motion.p>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a
                href=""
                download="Pransu_Pathak_Resume.pdf"
                className="w-6 h-6 md:w-8 md:h-8"
              >
                <motion.button
                  className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-slate-400 via-fuchsia-300 text-white mb-4"
                  animate={{
                    background: [
                      "linear-gradient(to right, #FF5733, #3357FF)",
                      "linear-gradient(to right, #3357FF, #FF33A1)",
                      "linear-gradient(to right, #FF33A1, #3357FF)"
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 5,
                  }}
                >
                  <span className="block bg-zinc-800 hover:bg-zink-400 rounded-full px-5 py-2">
                    Download Resume
                  </span>
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full  lg:w-1/2  lg:p-8 my-10 ">
          <div className="flex justify-center">
            <img
              className="shadow-lg shadow-gray-500 "
              src="/ProfilePic-DNLS5CgT.jpeg"
              alt="Pransu Pathak"
              style={{ opacity: 1, transform: "none" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Hero;
