import foto from '../HeroSection/img/FotoVanessa.jpg';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__content">
        <img
          className="hero__image"
          src={foto}
          alt="Foto de Vanessa"
          width="200"
          height="200"
        />

        <h2 className="hero__name">Vanessa Silva</h2>
        <p className="hero__role">Desenvolvedora Front-End</p>

        <h1 className="hero__title">Sobre Mim</h1>

        <p className="hero__description">
          <p>
            Bem-vindo ao meu portfólio. Este espaço reúne minha trajetória como desenvolvedora front-end, com foco na construção de projetos práticos e na evolução contínua das minhas habilidades em desenvolvimento web.
          </p>

          <p>
            Atuo como desenvolvedora front-end, com experiência na criação de interfaces responsivas e componentizadas utilizando React, TypeScript e JavaScript. Também tenho prática com integração de APIs e manipulação de dados em aplicações web.
          </p>

          <p>
            Busco aplicar boas práticas de desenvolvimento, com atenção à organização do código, reutilização de componentes e construção de uma arquitetura limpa e escalável. Meu foco é entender a aplicação como um todo, desde a interface até o fluxo de dados e sua estrutura interna.
          </p>

          <p>
            Atualmente, sigo aprofundando meus conhecimentos em desenvolvimento full stack, visando evoluir para a construção de aplicações mais completas e bem estruturadas.
          </p>
        </p>
      </div>
    </section>
  );
}

export default HeroSection;