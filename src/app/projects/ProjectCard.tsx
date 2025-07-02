import { useState } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  techStack: string[];
}
const projectCard = ({
  imageSrc,
  imageAlt,
  title,
  description,
  techStack,
}: ProjectCardProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-12 flex flex-wrap lg:justify-center ">
      <div className="w-full md:w-1/4 px-4 pt-2 ">
        <img
          src={imageSrc}
          width="120"
          height="120"
          alt={imageAlt}
          className="mb-6 rounded md:w-[180px] md:h-auto shadow-lg shadow-gray-500"
        />
      </div>
      <div className="w-full max-w-2xl md:w-3/4 pl-4">
        <h6 className="mb-2 font-semibold">{title}</h6>
        <p
          className={` text-neutral-400 lg:mb-4 ${isExpanded ? "line-clamp-none" : "line-clamp-3"
            }  lg:line-clamp-none`}
        >
          {description}

        </p>

        <h6
          className="mb-4 font-300  text-neutral-200 md:block lg:hidden cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {!isExpanded ? "Read More" : "Read Less"}
        </h6>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              className="mr-2 rounded bg-neutral-900 px-2 mb-1 py-1 text-sm font-medium text-purple-900"
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </div>

  )
}
export default projectCard;