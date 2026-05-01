import './ContactSection.css';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function ContactSection() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleWhatsApp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const numero = '5527999244452';

    const text = `Olá! Me chamo ${nome}. ${mensagem}`.trim();

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contatos</h2>

      <form className="contact-form" onSubmit={handleWhatsApp}>
        <input
          className="contact-input"
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <textarea
          className="contact-textarea"
          placeholder="Digite sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        />

        <button className="contact-button" type="submit">
          Enviar no WhatsApp
        </button>
      </form>

      {/* ÍCONES */}
      <div className="contact-icons">
        <a
          href="mailto:vanessahenker09@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/VanessaHenker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/VanessaSilva"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}

export default ContactSection;