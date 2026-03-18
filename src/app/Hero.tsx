import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  animate: boolean;
}

const Hero: React.FC<HeroProps> = ({ animate }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const { scrollY } = useScroll();
  // Keep the transform range to ensure it doesn't disappear too early, 
  // but remove opacity animation as requested (fade color/effect removal)
  const y1 = useTransform(scrollY, [0, 800], [0, 150]);

  useEffect(() => {
    setIsAnimated(animate);
  }, [animate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
  };

  return (
    <motion.div
      className="relative flex flex-col w-full items-center justify-start pt-16 pb-20"
      style={{ y: y1 }}
    >
      <motion.div
        className="flex flex-col items-center justify-center w-full px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isAnimated ? "visible" : "hidden"}
      >
        {/* Availability Pill */}
        <motion.div variants={itemVariants} className="relative group flex justify-center mb-8">
          <div className="relative px-6 py-2 bg-neutral-900/80 backdrop-blur-md rounded-full border border-white/10 shadow-2xl flex items-center justify-center">
            <span className="text-sm font-medium text-neutral-200 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              </span>
              Available for new opportunities
            </span>
          </div>
        </motion.div>

        {/* Name Header */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter text-center py-2 text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-500 mb-4"
        >
          Pransu Pathak
        </motion.h1>

        {/* Job Title */}
        <motion.h2
          variants={itemVariants}
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-400 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-center"
        >
          Software Engineer
        </motion.h2>

        {/* Bio Paragraph */}
        <motion.p
          variants={itemVariants}
          className="max-w-3xl text-center text-neutral-400 text-lg md:text-xl leading-relaxed mb-12 font-light"
        >
          I craft high-performance
          <span className="text-neutral-200 font-medium">mobile and web experiences</span>.
          Specializing in React Native, modern JavaScript, GraphQL APIs, Firebase, and WebSockets,
          I build scalable applications with real-time capabilities and seamless user experiences.
        </motion.p>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="flex gap-4 items-center">
          <a
            href="PransuResume.pdf"
            download="Pransu_Pathak_Resume.pdf"
            className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium rounded-full bg-gradient-to-br from-purple-500 to-blue-500 focus:ring-4 focus:outline-none focus:ring-purple-800 transition-all hover:scale-105"
          >
            <span className="relative px-8 py-3 transition-all ease-in duration-75 bg-neutral-950 rounded-full group-hover:bg-opacity-0 text-white flex items-center gap-2 font-bold">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Resume
            </span>
            <div className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-lg opacity-30 group-hover:opacity-60 transition-opacity -z-10"></div>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
