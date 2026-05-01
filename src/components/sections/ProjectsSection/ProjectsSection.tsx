import ProjectCard from "../../../cards/ProjectCard";
import "./ProjectsSection.css";
import projeto1 from "./img/Projeto1.png";

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      image: projeto1,
      title: "Loja de Carros",
      description: "Loja virtual de venda de carros.",
    },
    {
      id: 2,
      image: projeto1,
      title: "Loja de Carros",
      description: "Loja virtual de venda de carros.",
    },
  ];

  return (
    <section>
      <h2>Projetos Recentes</h2>

      <div className="projects__container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;