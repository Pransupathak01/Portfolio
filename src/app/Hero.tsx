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
      className="flex h-full w-full items-center justify-center border border-neutral-900 pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: isAnimated ? 1 : 0, x: isAnimated ? 0 : -50 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center justify-center  w-full  px-4 py-8">
        <motion.h1
          className="pb-10 text-4xl font-thin tracking-tight lg:mt-16 md:text-5xl lg:text-8xl"
          whileHover={{ scale: 1.1 }}
        >
          Pransu Pathak
        </motion.h1>
        <motion.span
          className="bg-gradient-to-r p-4 from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl md:text-4xl lg:text-5xl tracking-tight text-transparent"
          whileHover={{ scale: 1.1 }}
        >
          Software Engineer
        </motion.span>
        <motion.p
          className="my-2 w-full max-w-5xl py-6 font-light tracking-tight text-center sm:px-10 lg:px-0 lg:text-xl"
          whileHover={{ scale: 1.05 }}
        >
          "I am a passionate React Native and Web Developer with expertise in both Expo and native development.
          With 2+ years of hands-on experience, I have built responsive, high-performance mobile and web
          applications using modern JavaScript frameworks like React, React Native, Expo, Redux, Zustand and Tailwind CSS. I have a strong
          background in integrating RESTful APIs and GraohQL, ensuring seamless communication between front-end and
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
              className="px-1 inline-block py-1 m-2 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-slate-400 via-fuchsia-300 text-white mb-4"
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
              <span className="block bg-zinc-800 text-lg hover:bg-zinc-400 rounded-full px-8 py-2 text-white">
                Download Resume
              </span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </motion.div>

  );
};
export default Hero;
