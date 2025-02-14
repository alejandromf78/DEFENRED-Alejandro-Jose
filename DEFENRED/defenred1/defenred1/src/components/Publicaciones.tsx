import { Link } from "react-router-dom";
import "./css/queHacemos.css";

const Publicaciones = () => {
  return (
    <div id="publicaciones">
      <h2>
        <span className="naranja">Publicaciones</span> sobre Derechos Humanos
      </h2>
      <h3>
        "Relatos para Respirar” luchando por los{" "}
        <strong>Derechos Humanos</strong>
      </h3>
      <div className="grid grid50 caja">
        <div className="padding">
          <p>
            Este libro incluye historias cortas sobre personas valientes que
            lucharon por los <strong>Derechos Humanos</strong>. Hablan con gran
            pasión de sus sueños, problemas y cómo superaron las dificultades.
            Cada historia nos anima a pensar y sentir para que todos podamos
            ayudar a hacer del mundo un lugar mejor y más amable.
          </p>
        </div>
        <div className="padding">
          <p>
            El libro está escrito por{" "}
            <strong>Loreto Rodríguez de Rivera</strong> y{" "}
            <strong>Ana Martínez</strong>, con ilustraciones de
            <strong> Gerardo Domínguez</strong>. Además, apoya el proyecto{" "}
            <strong>Defenred - Casa de Respiro</strong>, que brinda descanso y
            atención a personas defensoras de <strong>derechos humanos</strong>.
          </p>
          <p>
            <Link to="/CasaDeRespiro">
              <span className="naranja">
                Más información sobre la Casa de Respiro &rarr;
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Publicaciones;
