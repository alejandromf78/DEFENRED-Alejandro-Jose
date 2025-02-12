import { Link } from "react-router-dom";
import "./css/footer.css";
function Footer() {
  return (
    //Cambiar y añadir
    <>
      <footer className="footer-entero">
        <div className=" grid-33">
          {/* 1 empieza div de redes */}
          <div className="redes-sociales">
            <h3>Redes Sociales</h3>
            <div className="iconos">
              <a href="#"><img src="/medios/Fotografías e ilustraciones/Instagram_icon.png" alt="Instagram" className="iconos" /></a>
              <a href="#"><img src="/medios/Fotografías e ilustraciones/Facebook_Logo.png" alt="Facebook" className="iconos" /></a>
              <a href="#"><img src="/medios/Fotografías e ilustraciones/X_icon.png" alt="X" className="iconos" /></a>
              <a href="#"><img src="/medios/Fotografías e ilustraciones/youtube_icon.png" alt="Youtube" className="iconos" /></a>

            </div>

          </div>
          {/* termina div de redes */}
          {/*2  empieza div del logo */}
          <div className="div-logo">
            <img src="/medios/Logos/Logo blanco.png" alt="Logo" className="logo" />
          </div>
          {/* termina div del logo */}

          {/*3 empieza div de links */}
          <div className="grid-33-links">
            {/* Columa quienes somos(primera columna) */}
            <div className="quien">
              <h4>Quienes Somos</h4>
              <div className="links">Nuestro Proposito</div>
              <div className="links">Nuestra Historia</div>
              <div className="links">Trabaja con nosotros</div>
            </div>
            {/* Columna que hacemos(segunda columna) */}
            <div>
              <h4>Que hacemos</h4>
              <div className="links">Nuestro Proposito</div>
              <div className="links">Nuestra Historia</div>
              <div className="links">Trabaja con nosotros</div>
            </div>

            <div>
              <h4>Quienes Somos</h4>
              <div>Nuestro Proposito</div>
              <div>Nuestra Historia</div>
              <div>Trabaja con nosotros</div>
            </div>

          </div>
          {/* termina div de links */}

          {/* <div className="contact-news">
            <p><Link to="#"><img src="/medios/Fotografías e ilustraciones/noticias_icon.png" alt="Noticias" className="iconos"/> Noticias</Link></p>
            <p><Link to="#"><img src="/medios/Fotografías e ilustraciones/contacto_icon.png" alt="Contacto" className="iconos"/> Contacto</Link></p>
          </div> */}

        </div>
        <div className="creado-por">
          <p>Website by Jose Andres y Alejandro Masó | &copy; 2025 Protection International</p>
        </div>
      </footer>



    </>
  )
}

export default Footer;