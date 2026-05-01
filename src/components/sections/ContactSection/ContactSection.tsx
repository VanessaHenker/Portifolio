function ContactSection() {
  return (
    <section className="contact">
      <h2>Contato</h2>

      <form className="contact__form">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <textarea
          name="message"
          placeholder="Digite sua mensagem"
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default ContactSection;