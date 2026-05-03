type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

function ProjectCard({ image, title, description, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project__link"
    >
      <div className="project__card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default ProjectCard;