import foto from '../HeroSection/img/FotoVanessa.jpg';

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

        <h1 className="hero__title">Conteúdo do Projeto</h1>

        <p className="hero__description">
          Bem-vindo ao meu portfólio! Aqui você encontrará informações sobre
          meus projetos, habilidades e experiência profissional.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;