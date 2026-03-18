import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AboutMeProps {
  animate: boolean;
}

const AboutMe: React.FC<AboutMeProps> = ({ animate }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsAnimated(animate);
  }, [animate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative w-full py-24 lg:py-32 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isAnimated ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-100 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500">
            About <span className="font-light text-neutral-500">Me</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-purple-500/0 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Image Section */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-5/12 flex justify-center relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-blue-500/30 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50"></div>
            <motion.div 
              className="relative p-2 glass rounded-[2.5rem] shadow-2xl overflow-hidden"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 z-10 pointer-events-none"></div>
              <img
                className="w-full max-w-[320px] lg:max-w-md rounded-[2rem] object-cover aspect-[4/5] filter contrast-[1.05] grayscale-[0.1]"
                src="profile.png"
                alt="Pransu Pathak"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-neutral-900/80 to-transparent z-10 pointer-events-none rounded-b-[2rem]"></div>
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-7/12 flex flex-col justify-center"
          >
            <div className="space-y-6 text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
              <motion.p variants={itemVariants}>
                I am an innovative problem solver with a creative flair who is passionate about examining the nexus between technology and the human experience. Leveraging my experience and adding to interesting projects that fit my values and interests is something I'm excited to do.
              </motion.p>
              
              <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? "max-h-[1000px]" : "max-h-0 lg:max-h-[1000px]"} lg:opacity-100 ${isExpanded ? "opacity-100" : "opacity-0 lg:opacity-100"}`}>
                <motion.p variants={itemVariants} className="mt-6">
                  My journey in software development started with React.js, where I built robust web applications, and later expanded into Node.js, Express.js, and MySQL for comprehensive backend architecture. During my initial days, I navigated across multiple technologies, which forged a well-rounded understanding of full-stack ecosystems.
                </motion.p>
                <motion.p variants={itemVariants} className="mt-6">
                  Over time, I transitioned intensely into <span className="text-purple-300 font-medium">React Native</span>, focusing on crafting high-quality, performant mobile applications. I have significantly contributed to product-based architectures and conversational AI, gaining profound experience in integrating AI-driven solutions into modern mobile applications.
                </motion.p>
              </div>

              <motion.div 
                variants={itemVariants}
                className="pt-4 lg:hidden"
              >
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors uppercase tracking-widest"
                >
                  {isExpanded ? "Read Less" : "Discover More"}
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </motion.div>
            </div>

            {/* Quick Stats / Highlights */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-white/5"
            >
              {[
                { label: "Experience", value: "2+ Years" },
                { label: "Completed", value: "10+ Projects" },
                { label: "Focus", value: "React Native" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col space-y-1">
                  <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                    {stat.value.split(' ')[0]}
                  </span>
                  <span className="text-sm text-neutral-500 font-medium uppercase tracking-wider">
                    {stat.value.split(' ').slice(1).join(' ') || stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
