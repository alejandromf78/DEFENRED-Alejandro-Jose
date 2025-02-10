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
        <form action="">
          <label htmlFor="">Nombre y apellidos*</label>
          <input type="text" />
          <label htmlFor="">Email*</label>
          <input type="text" />
          <label htmlFor="">Teléfono</label>
          <input type="number" name="" id="" />
          <input type="checkbox" name="" id="" />
          <label htmlFor="">
            Acepto <span className="amarillo">Política de privacidad</span> y el{" "}
            <span className="amarillo">Aviso Legal</span>
          </label>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Deseo Suscribirme al Boletín</label>
          <button type="submit">Enviar Formulario</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
