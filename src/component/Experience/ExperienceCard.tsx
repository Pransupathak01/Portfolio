import { motion } from "framer-motion";
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
  return (
    <div className="mb-12 flex flex-wrap lg:justify-center">
      <motion.div
        className="w-full lg:w-1/4"
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
        className="w-full max-w-2xl lg:w-3/4"
        style={{
          opacity: 1,
          transform: "none",
        }}
      >
        <motion.h6 className="mb-2 font-semibold" >
          {position} -
          <span className="text-sm text-purple-100">
            {company}
          </span>
        </motion.h6>
        <p className="mb-4 text-neutral-400">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default experienceCard;