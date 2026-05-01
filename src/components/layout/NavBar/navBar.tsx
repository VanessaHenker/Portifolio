import './navBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item"><a href="/">Início</a></li>

        <li className="navbar__item"><a href="/sobre">Sobre</a></li>

        <li className="navbar__item"><a href="/projeto">Projetos</a></li>

        <li className="navbar__item"><a href="/contato">Contato</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;