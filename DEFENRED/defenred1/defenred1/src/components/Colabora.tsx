import "./css/colabora.css";
import { Helmet } from 'react-helmet';

const Colabora = () => {

  // Definimos un tipo para acceder a los datos del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      nombre: (e.target as HTMLFormElement).nombre.value,
      email: (e.target as HTMLFormElement).email.value,
      telefono: (e.target as HTMLFormElement).telefono.value,
      cantidadDonacion: (e.target as HTMLFormElement).cantidadDonacion.value,
      aceptaPoliticas: (e.target as HTMLFormElement).aceptaPoliticas.checked,
      deseaSuscribirse: (e.target as HTMLFormElement).deseaSuscribirse.checked
    };

    fetch("http://localhost:8080/insertarFormulario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => alert(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div id="Colabora">
      <Helmet>
        <meta name="description" content="Únete a nuestra misión para seguir apoyando a las personas defensoras de los derechos humanos y contribuye a conservar la Casa de Respiro y también su bienestar." />
        <meta name="keywords" content="Derechos Humanos, Casa de Respiro, Red de solidaridad, Seguro, Defensoras, Autocuidado, Salud física, Salud emocional, Justicia social" />
        <title>Colabora con Defenred</title>
      </Helmet>

      <div id="contenedorForm" className="grid grid50">
        <form onSubmit={handleSubmit}>
          <div className="grid grid50 filas">
            <label htmlFor="nombre">Nombre y apellidos*</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          <div className="grid grid50 filas">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="grid grid50 filas">
            <label htmlFor="telefono">Teléfono*</label>
            <input type="number" id="telefono" name="telefono" required />
          </div>
          <div className="grid grid50 filas">
            <label htmlFor="cantidadDonacion">Cantidad de donación</label>
            <input type="number" id="cantidadDonacion" name="cantidadDonacion" />
          </div>
          <div className="grid grid50 filas">
            <input type="checkbox" name="aceptaPoliticas" id="checkbox1" required />
            <label htmlFor="checkbox1">
              Acepto <span className="amarillo">Política de privacidad</span> y el{" "}
              <span className="amarillo">Aviso Legal</span>
            </label>
          </div>
          <div className="grid grid50 filas">
            <input type="checkbox" name="deseaSuscribirse" id="checkbox2" />
            <label htmlFor="checkbox2">Deseo Suscribirme al Boletín</label>
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
        </div>
      </div>
    </div>
  );
};

export default Colabora;
