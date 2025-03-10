import { useState } from "react";
import "./css/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="grid grid20-80">
      <div className="Logo">
        <img
          className="imagenLogo"
          src="../medios/Logos/Logo blanco.png"
          alt="logo"
        />
      </div>
      <nav className="menu grid grid25">
        <Link to='/'>Inicio</Link>

        {/* Menú desplegable en "Defenred" */}
        <div
          className="menu-item"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <a
            href="#"
            className="menu-link"
            onClick={(e) => {
              e.preventDefault(); // Evita que se recargue la página
              setIsDropdownOpen(!isDropdownOpen);
            }}
          >
            Defenred
          </a>

          {isDropdownOpen && (
            <div className="submenu">
              <Link to="./QuienesSomos">¿Quiénes somos?</Link>
              <Link to="./QueHacemos">¿Qué hacemos?</Link>
              <Link to="./Formacion">Formación</Link>
              <Link to="./CasaDeRespiro">Casa de Respiro</Link>
              <Link to="./Autocuidado">Autocuidado</Link>
            </div>
          )}
        </div>

        <Link to="./Contacto">Contacto</Link>
        
        <Link to="/#Colabora" id="botonColabora">Colabora</Link>
      </nav>
    </header>
  );
};

export default Header;
