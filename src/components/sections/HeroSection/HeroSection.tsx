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
          Bem-vindo ao meu portfólio. Este é o espaço onde compartilho minha jornada como desenvolvedora front-end, meus projetos e minha evolução constante na área de tecnologia.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;