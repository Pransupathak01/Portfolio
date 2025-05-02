import { useState } from "react";

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
          width="150"
          height="150"
          alt={imageAlt}
          className="mb-6 rounded"
        />
      </div>
      <div className="w-full max-w-2xl md:w-3/4 pl-4">
        <h6 className="mb-2 font-semibold">{title}</h6>
        <p
          className={` text-neutral-400 ${isExpanded ? "line-clamp-none" : "line-clamp-3"
            }  lg:line-clamp-none`}
        >
          {description}

        </p>
        {!isExpanded && (
          <h6
            className="mb-4 font-300  text-neutral-200 md:block lg:hidden cursor-pointer"
            onClick={() => setIsExpanded(true)}
          >
            Read More
          </h6>
        )}

        <div className="flex flex-wrap gap-2 pt-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>

  )
}
export default projectCard;