import { Link } from "react-router-dom";
import "./css/header.css";

const Header = () => {
  return (
    <header className="grid grid20-80">
      <div className="Logo">
        <img className="imagenLogo" src="../medios/Logos/Logo blanco.png" alt="logo"  />
      </div>
      <nav className="menu grid grid25">
        <a href="">Inicio</a>
        <a href="">Defenred</a>
        <a href="">Contacto</a>
        <a href="">Colabora</a>
      </nav>
    </header>
  );
};
export default Header;
