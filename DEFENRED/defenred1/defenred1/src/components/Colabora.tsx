import "./css/colabora.css";

const Colabora = () => {
  return (
    <div id="Colabora">
      <h1>
        Colabora <strong>con Defenred</strong>
      </h1>
      <h2>
        Únete a la <strong>Red Solidaria</strong> y Apoya al{" "}
        <strong>Autocuidado</strong> de Defensores de
        <strong>Derechos Humanos</strong>
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

      <div className="contenedorFormulario">
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
export default Colabora;
