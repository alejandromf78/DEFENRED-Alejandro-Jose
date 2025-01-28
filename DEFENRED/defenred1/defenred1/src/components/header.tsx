import { Link } from "react-router-dom";
import "./css/header.css";

const Header = () => {
  return (
    
    <header className="grid grid20-80 fondo">
      <div className="Logo">
        <img className="imagenLogo" src="../medios/Logos/Logo.png" alt="logo"  />
      </div>
      <nav className="menu grid grid33">
        <Link to="/">Inicio</Link>
        {/* Proyexto Defenred
        Mision,vision y valores
        Casa de Respiro
        Colabora */}

        <a href="">Defenred</a>
        {/* Quienes somos
        Que hacemos(Dentro de esto |>)
            Enredados
            Publicaciones
        Formación
        Casa de Respiro
        Autocuidado */}
        <a href="">Contacto</a>
      </nav>
    </header>
    
  );
};
export default Header;
