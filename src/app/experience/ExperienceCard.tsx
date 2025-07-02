import { motion } from "framer-motion";
import { useState } from "react";
interface experienceCardProps {
  from: string;
  to: string;
  position: string;
  company: string;
  description: string;
  techStack: string[];
}
const experienceCard = ({
  from,
  to,
  position,
  company,
  description,
  techStack,
}: experienceCardProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-12 flex flex-wrap lg:justify-center px-6">
      <motion.div
        className="w-full lg:w-1/4 "
        style={{
          opacity: 1,
          transform: "none",
        }}
      >
        <motion.p
          className="mb-2 text-sm text-neutral-400"
          whileHover={{ fontWeight: '500' }}
        >{from} - {to}</motion.p>
      </motion.div>
      <div
        className="w-full max-w-2xl lg:w-3/4 "
        style={{
          opacity: 1,
          transform: "none",
        }}
      >
        <motion.h6 className="mb-2 font-semibold " >
          {position} -
          <span className="text-sm text-purple-100 ">
            {company}
          </span>
        </motion.h6>
        <p
          className={` text-neutral-400 lg:mb-4 ${isExpanded ? "line-clamp-none" : "line-clamp-5"
            }  lg:line-clamp-none`}
        >
          {description}

        </p>
         <h6
            className="mb-4 font-300  text-neutral-200 md:block lg:hidden cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {!isExpanded? "Read More": "Read Less"}
          </h6>
      
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default experienceCard;