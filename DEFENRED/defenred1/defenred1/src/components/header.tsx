import { Link } from "react-router-dom";
import "./css/header.css";

const Header = () => {
  return (
    <header className="grid grid20-80">
      <div className="Logo">
        <img className="imagenLogo" src="../medios/Logos/Logo.png" alt="logo"  />
      </div>
      <nav className="menu grid grid33">
        <a href="">Inicio</a>
        <a href="">About Us</a>
        <a href="">Contacto</a>
      </nav>
    </header>
  );
};
export default Header;
