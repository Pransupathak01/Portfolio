interface ProjectCardProps{
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
  }: ProjectCardProps): JSX.Element =>{
    return(
        <div className="mb-8 flex flex-wrap lg:justify-center">
        <div className="w-full lg:w-1/4">
          <img
            src={imageSrc}
            width="150"
            height="150"
            alt={imageAlt}
            className="mb-6 rounded"
          />
        </div>
        <div className="w-full max-w-2xl lg:w-3/4">
          <h6 className="mb-2 font-semibold">{title}</h6>
          <p className="mb-4 text-neutral-400">{description}</p>
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
     
    )
}
export default projectCard;