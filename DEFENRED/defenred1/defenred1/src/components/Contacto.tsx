import "./css/contacto.css";


const Contacto = () => {
  return (
    <div id="contenedorContacto">
      <h1>
        Contacta con <strong>Defenred</strong>{" "}
      </h1>
      <h2 id="subtituloContacto">
        Conecta con Nosotross para Saber Más sobre Nuestra{" "}
        <strong>Red de Apoyo</strong> y <strong>Solidaridad</strong>{" "}
      </h2>
      <p>
        ¿Tienes preguntas? En Defenred, estamos aquí para ofrecerte más
        información sobre nuestros <strong>programas de autocuidado</strong> y{" "}
        <strong>apoyo</strong> a defensores de <strong>derechos humanos</strong>
        . Contáctanos para saber más.
      </p>
      <div id="contenedorForm">
        <form action="grid grid6">
          <div className="grid grid50 filas">
            <label htmlFor="">Nombre y apellidos*</label>
            <input type="text" />
          </div>
          <div className="grid grid50 filas">
            <label htmlFor="">Email*</label>
            <input type="text" />
          </div>
          <div className="grid grid50 filas">
            <label htmlFor="">Teléfono</label>
            <input type="number" name="" id="" />
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
      </div>
    </div>
  );
};

export default Contacto;
