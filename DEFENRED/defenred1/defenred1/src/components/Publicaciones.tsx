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
        <div>
          <p>
            Este libro incluye historias cortas sobre personas valientes que
            lucharon por los <strong>Derechos Humanos</strong>. Hablan con gran
            pasión de sus sueños, problemas y cómo superaron las dificultades.
            Cada historia nos anima a pensar y sentir para que todos podamos
            ayudar a hacer del mundo un lugar mejor y más amable.
          </p>
        </div>
        <div>
          <p>
            El libro está escrito por{" "}
            <strong>Loreto Rodríguez de Rivera</strong> y{" "}
            <strong>Ana Martínez</strong>, con ilustraciones de
            <strong>Gerardo Domínguez</strong>. Además, apoya el proyecto{" "}
            <strong>Defenred - Casa de Respiro</strong>, que brinda descanso y
            atención a personas defensoras de <strong>derechos humanos</strong>.
          </p>
          <p>
            <a
              href="URL_DE_LA_CASA_DE_RESPIRO" // Reemplazar con el enlace real de la Casa de Respiro
              target="_blank" //Ponerlo en donde pone Defenred - Casa de Respiro
            >
              <span className="naranja">
                Más información sobre la Casa de Respiro &rarr;
              </span>{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Publicaciones;
