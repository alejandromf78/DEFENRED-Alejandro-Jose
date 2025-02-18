import "./css/colabora.css";
import { Helmet } from 'react-helmet';

const Colabora = () => {
  return (
    <div id="Colabora">
      <Helmet>
              <meta name="description" content="Únete a nuestra misión para seguir apoyando a las personas defensoras de los derechos humanos y contribuye a conservar la Casa de Respiro y también su bienestar." />
              <meta name="keywords" content="Derechos Humanos, Casa de Respiro, Red de solidaridad, Seguro, Defensoras, Autocuidado, Salud física, Salud emocional, Justicia social" />
              <title>Colabora con Defenred</title>
            </Helmet>
      

      <div id="contenedorForm" className="grid grid50" >
        <form action="grid grid7">
          <div className="grid grid50 filas">
            <label htmlFor="">Nombre y apellidos*</label>
            <input type="text" />
          </div>
          <div className="grid grid50 filas">
            <label htmlFor="">Email*</label>
            <input type="text" />
          </div>
          <div className="grid grid50 filas">
            <label htmlFor="">Teléfono*</label>
            <input type="number" name="" id="" />
          </div>
          <div className="grid grid50 filas">
            <label htmlFor="">Cantidad de donación</label>
            <input type="number" />
          </div>
          <div className="grid grid50 filas">
            <input type="checkbox" name="" id="checkbox1" />
            <label htmlFor="">
              Acepto <span className="amarillo">Política de privacidad</span> y el{" "}
              <span className="amarillo">Aviso Legal</span>
            </label>
          </div>
          <div className="grid grid50 filas">
            <input type="checkbox" name="" id="checkbox2" />
            <label htmlFor="">Deseo Suscribirme al Boletín</label>
          </div>
          <div className="grid" id="botonEnviarForm">
            <button className="amarilloFondo" type="submit">Enviar Formulario</button>
          </div>

        </form>
        <div>
          <h2 id="tituloColabora">
            Colabora <strong>con Defenred</strong>
          </h2>
          <h2 id="subtituloColabora">
            Únete a la <strong>Red Solidaria</strong> y Apoya al{" "}
            <strong>Autocuidado</strong> de Defensores de
            <strong> Derechos Humanos</strong>
          </h2>
          <p className="metaDescripcion">
            Únete a nuestra misión para seguir <strong>apoyando</strong> a las
            personas defensoras de los <strong>derechos humanos</strong> y
            contribuye a conservar la <strong>Casa de Respiro</strong> y también su
            bienestar.
          </p>
          <p className="copy">
            Uniendote a nuestra misión, podrás formar parte de esta{" "}
            <strong>red</strong> de
            <strong>solidaridad</strong> y de la <strong>ayuda</strong> que se le
            facilita a las personas defensoras de los{" "}
            <strong>derechos humanos</strong> y así contribuir a conservar la{" "}
            <strong>Casa de Respiro</strong>a través de una forma económica, de
            voluntariado o de difusión, con la que seguir proporcionando un lugar{" "}
            <strong>seguro</strong> para estas defensoras, ofreciéndoles{" "}
            <strong>herramientas</strong> para su <strong>autocuidado</strong> y
            asegurar una <strong>salud física</strong> y{" "}
            <strong>salud emocional</strong> para la continuidad de su lucha por la{" "}
            <strong>justicia social.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Colabora;
