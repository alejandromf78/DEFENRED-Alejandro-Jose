import "./css/queHacemos.css";
import { Helmet } from 'react-helmet';

const Enredados = () => {
  return (
    <div id="enredados">
      <Helmet>
        <meta name="description" content="Defenred colabora con diversas organizaciones para construir una
        red de apoyo solidario y coordinado en la defensa de derechos humanos, desde la
        Casa de Respiro hasta alianzas globales." />
        <meta name="keywords" content="Red de Defensoras, Pprogramas de Acogida de Personas Defensoras, Organizaciones de defensa de los derechos humanos" />
        <title>Enredados Fortaleciendo la Red de Derechos Humanos</title>
      </Helmet>
      <h2>
        <span className="naranja">Enredados:</span> Fortaleciendo la{" "}
        <strong>Red de Defensoras</strong> de <strong>Derechos Humanos</strong>
      </h2>
      <h3>
        Construyendo una <strong>Red de Solidaridad</strong> Global por los{" "}
        <strong>Derechos Humanos</strong>
      </h3>
      <div className="grid grid50 caja">
        <div>
          <img className="imagenQueHacemos"

            src="/medios/Fotografías e ilustraciones/imagen quehacemos2.png"
            alt=""
          />
        </div>
        <div>
          <p>
            <strong>Defenred</strong> colabora con diversas{" "}
            <strong>organizaciones de defensa de los derechos humanos</strong>{" "}
            para construir una red de <strong>apoyo</strong> solidario y
            coordinado en la defensa de los <strong>derechos humanos</strong>,
            desde la <strong>Casa de Respiro</strong> hasta alianzas globales.
          </p>
          <p>
            Para nosotros, lo más importante es trabajar en comunidad, y para
            reflejar la importancia de esto, hemos participado en coordinaciones
            con organizaciones como <strong>IM-Defensoras</strong>, en la
            <strong>Red de Defensoras</strong> de Madrid y en la{" "}
            <strong>European Union Temporary Relocation Platform</strong>.
            También colaboramos en diversos encuentros con organizaciones que se
            asemejan a las nuestras, y hemos participado en encuentros y
            reuniones con{" "}
            <strong>Programas de Acogida de Personas Defensoras</strong> de
            diferentes lugares del Estado Español y con otras{" "}
            <strong>organizaciones de defensa de los derechos humanos</strong>.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Enredados;
