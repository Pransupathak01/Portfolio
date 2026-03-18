import { useState } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
}

const ProjectCard = ({
  imageSrc,
  imageAlt,
  title,
  description,
  techStack,
  link,
}: ProjectCardProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="mb-12 flex flex-wrap lg:justify-center p-6 rounded-2xl bg-neutral-900/20 border border-neutral-800/50 hover:border-purple-500/30 hover:bg-neutral-900/40 transition-all duration-500 ease-out"
      whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(88, 28, 135, 0.2)" }}
    >
      <div className="w-full md:w-1/4 px-4 pt-2 flex justify-center md:block">
        <motion.div
           whileHover={{ scale: 1.05, rotate: 2 }}
           transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <img
            src={imageSrc}
            width="120"
            height="120"
            alt={imageAlt}
            className="mb-6 rounded-xl md:w-[180px] md:h-auto shadow-lg shadow-purple-900/20 object-cover"
          />
        </motion.div>
      </div>
      <div className="w-full max-w-2xl md:w-3/4 pl-4">
        <h6 className="mb-2 font-bold text-xl flex items-center flex-wrap tracking-wide text-neutral-100">
          {title}
          {link && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-purple-400 hover:text-purple-300 text-sm font-medium underline decoration-purple-500/30 underline-offset-4"
            >
              View Project
            </motion.a>
          )}
        </h6>
        
        <p
          className={`text-neutral-400 lg:mb-4 leading-relaxed ${isExpanded ? "line-clamp-none" : "line-clamp-3"} lg:line-clamp-none`}
        >
          {description}
        </p>

        <motion.p
          whileHover={{ scale: 1.05, color: "#d8b4fe" }}
          className="mb-4 font-medium text-neutral-500 md:block lg:hidden cursor-pointer w-max"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {!isExpanded ? "Read More ↓" : "Read Less ↑"}
        </motion.p>

        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              className="mr-2 rounded-md bg-purple-900/20 border border-purple-900/30 px-3 py-1 text-sm font-medium text-purple-300"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(88, 28, 135, 0.4)", color: "#e9d5ff" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
export default ProjectCard;