import Enredados from "./Enredados";
import Publicaciones from "./Publicaciones";
import "./css/queHacemos.css";

const QueHacemos = () => {
  return (
    <div id="queHacemos">
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
          <img
            src="/medios/Fotografías e ilustraciones/pájaro.png"
            alt=""
            width="100%"
          />
        </div>
        <Enredados></Enredados>
        <Publicaciones></Publicaciones>
      </div>
    </div>
  );
};

export default QueHacemos;
