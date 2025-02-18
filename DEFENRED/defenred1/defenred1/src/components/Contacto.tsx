import "./css/contacto.css";

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página

    // Recopilamos los datos del formulario
    const data = {
      nombre: e.target[0].value, // Nombre y apellidos
      email: e.target[1].value,  // Email
      telefono: e.target[2].value || null, // Teléfono (opcional)
      privacidad: e.target[3].checked, // Checkbox de privacidad
      boletin: e.target[4].checked,   // Checkbox de boletín
    };

    // Realizamos la solicitud al backend
    fetch("http://localhost:5000/api/contacto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Respuesta del servidor:", result);
        alert("Formulario enviado con éxito");
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        alert("Hubo un error al enviar el formulario");
      });
  };

  return (
    <div id="contenedorContacto">
      <h1>
        Contacta con <strong>Defenred</strong>{" "}
      </h1>
      <h2 id="subtituloContacto">
        Conecta con Nosotros para Saber Más sobre Nuestra{" "}
        <strong>Red de Apoyo</strong> y <strong>Solidaridad</strong>{" "}
      </h2>
      <p>
        ¿Tienes preguntas? En Defenred, estamos aquí para ofrecerte más
        información sobre nuestros <strong>programas de autocuidado</strong> y{" "}
        <strong>apoyo</strong> a defensores de <strong>derechos humanos</strong>.
        Contáctanos para saber más.
      </p>
      <div id="contenedorForm">
        <form onSubmit={handleSubmit} className="grid grid6">
          <div className="grid grid50 filas">
            <label htmlFor="">Nombre y apellidos*</label>
            <input type="text" placeholder="Tu nombre completo" required />
          </div>
          <div className="grid grid50 filas">
            <label htmlFor="">Email*</label>
            <input type="email" placeholder="Tu email" required />
          </div>
          <div className="grid grid50 filas">
            <label htmlFor="">Teléfono</label>
            <input type="number" placeholder="Tu teléfono (opcional)" />
          </div>
          <div className="grid grid50 filas">
            <input type="checkbox" id="checkbox1" required />
            <label htmlFor="checkbox1">
              Acepto <span className="amarillo">Política de privacidad</span> y el{" "}
              <span className="amarillo">Aviso Legal</span>
            </label>
          </div>
          <div className="grid grid50 filas">
            <input type="checkbox" id="checkbox2" />
            <label htmlFor="checkbox2">Deseo Suscribirme al Boletín</label>
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
