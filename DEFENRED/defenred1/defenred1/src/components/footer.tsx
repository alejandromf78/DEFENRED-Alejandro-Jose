import { Link } from "react-router-dom";
function Footer(){
    return(
//Cambiar y añadir
        <>
        <Link to="/">Index</Link>
        <footer>
  <p>&copy; 2025 Tu Empresa. Todos los derechos reservados.</p>
  <ul>
    <li><a href="#">Política de Privacidad</a></li>
    <li><a href="#">Términos y Condiciones</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</footer>

        </>
        
        

    

    )
}

export default Footer;