import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Vanessa Silva
      </p>

      <p className="footer-subtext">
        Desenvolvido com React + TypeScript
      </p>
    </footer>
  );
}

export default Footer;