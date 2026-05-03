import ProjectCard from "../../../cards/ProjectCard";
import "./ProjectsSection.css";
import projeto1 from "./img/PizzaBliss.png";
import projeto2 from "./img/TelaLogin.png";

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      image: projeto1,
      title: "Pizza Bliss",
      description:
        "Cardápio digital de pizzaria fictícia com organização modular de categorias e itens, desenvolvido para exibição de produtos de forma simples e responsiva.",
      link: "https://menu-bliss.vercel.app/",
    },
    {
      id: 2,
      image: projeto2,
      title: "Tela Login",
      description:
        "Tela de login simples para acesso a um sistema de gerenciamento, desenvolvida com JavaScript, sem validação de dados ou integração com backend.",
      link: "https://tela-login-one-alpha.vercel.app/",
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
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;