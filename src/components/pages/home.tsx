import ContactSection from "../sections/ContactSection";
import ProjectsSection from "../sections/ProjectsSection";

function Home() {
  return (
    <main>
      <div>
        <img src="./src/assets/img/FotoVanessa.jpg" alt="Foto de Vanessa" width="200" height="200" />
        <h2>Vanessa Silva</h2>
        <p>Desenvolvedora Front-End</p>

        <h1>Conteúdo do Projeto</h1>
        <p>
          Bem-vindo ao meu portfólio! Aqui você encontrará informações sobre meus projetos,
          habilidades e experiência profissional.
        </p>
      </div>
      
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

export default Home;