import foto from '../../assets/img/FotoVanessa.jpg';

function HeroSection() {
  return (
    <section>
      <img src={foto} alt="Foto de Vanessa" width="200" height="200" />
      <h2>Vanessa Silva</h2>
      <p>Desenvolvedora Front-End</p>

      <h1>Conteúdo do Projeto</h1>
      <p>
        Bem-vindo ao meu portfólio! Aqui você encontrará informações sobre meus projetos,
        habilidades e experiência profissional.
      </p>
    </section>
  );
}

export default HeroSection;