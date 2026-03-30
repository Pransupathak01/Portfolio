import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { allProjects } from "./projectsData";

const ProjectsPage: React.FC = () => {
  return (
    <motion.div
      className="mb-12 flex flex-col items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
      }}
    >
      <motion.h1
        className="my-20 text-center text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-purple-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Projects
      </motion.h1>

      <div className="w-full flex flex-col gap-8">
        {allProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } }
            }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
