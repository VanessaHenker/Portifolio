import "./navBar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      
      <div className="navbar__icon" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar__list ${open ? "active" : ""}`}>
        <li className="navbar__item">
          <a href="/">Início</a>
        </li>

        <li className="navbar__item">
          <a href="/sobre">Sobre</a>
        </li>

        <li className="navbar__item">
          <a href="/projeto">Projetos</a>
        </li>

        <li className="navbar__item">
          <a href="/contato">Contato</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;