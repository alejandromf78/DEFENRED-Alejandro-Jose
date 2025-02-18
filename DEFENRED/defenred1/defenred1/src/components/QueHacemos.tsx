import Enredados from "./Enredados";
import Publicaciones from "./Publicaciones";
import "./css/queHacemos.css";
import { Helmet } from 'react-helmet';


const QueHacemos = () => {
  return (
    <div id="queHacemos">
      <Helmet>
              <meta name="description" content="Defenred ofrece apoyo a las personas que defienden los derechos humanos en riesgo, brindando una Casa de Respiro segura y también unos recursos para la salud y el autocuidado, reforzando así su labor por la justicia social." />
              <meta name="keywords" content="Defenred, Apoyo, Derechos humanos, Casa de Respiro, Salud, Autocuidado, Justicia Social" />
              <title>¿Qué hace Defenred?</title>
            </Helmet>
      <div id="contenedorQueHacemos">
        <h1 className="titulo">¿Qué hace Defenred?</h1>
        <h2>
          <span className="naranja">Nuestra labor:</span> Promover el{" "}
          <strong>Autocuidado</strong> y la <strong>Seguridad</strong> en la
          Defensa de los Derechos Humanos
        </h2>
        <div className="grid grid50 caja">
          <p>
            Defenred ofrece apoyo a las personas que defienden los derechos
            humanos en riesgo, brindando una <strong>Casa de Respiro</strong>{" "}
            segura y también recursos para la <strong>salud</strong> y el{" "}
            <strong>autocuidado</strong>, reforzando así su labor por la{" "}
            <strong>justicia social</strong>.
          </p>
          <img className="imagenQueHacemos"
            src="/medios/Fotografías e ilustraciones/imagen queHacemos1.png"
            alt=""
            width="70%" 
          />
        </div>
        <Enredados></Enredados>
        <Publicaciones></Publicaciones>
      </div>
    </div>
  );
};

export default QueHacemos;
