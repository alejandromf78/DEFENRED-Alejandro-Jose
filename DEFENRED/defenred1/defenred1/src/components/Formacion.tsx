import { Link } from 'react-router-dom';
import './css/formacion.css'

const Formacion = () => {
  return (
    <div className='formacion'>

      <div className="contenedor-formacion">
        <div className="titulo">
          <h2>¿Cómo es nuestra formación?</h2>
        </div>

        <div className="texto">
          <p>
            En nuestro programa de la{" "}
            <a href="/casa-de-respiro">
              <strong>Casa de Respiro</strong>
            </a>{" "}
            también se realizan formaciones personalizadas adaptadas a la persona
            defensora de derechos humanos que esté en un estado de{" "}
            <strong>vulnerabilidad</strong>. Las formaciones que realizamos no se{" "}
            enfocan en un enfoque teórico tradicional, sino que están basadas en la{" "}
            <strong>experiencia del individuo</strong> y sobre todo en la{" "}
            <strong>práctica</strong>, en la cual nos adaptamos según las{" "}
            <strong>necesidades de cada grupo</strong>.
          </p></div>

        <div>
          <button className="boton"><Link to="nuestros proyectos(abajo, faltan por añadir)">Nuestros Proyectos</Link></button>
        </div>
      </div>
      <div className='metodologia'>
        <div className=' grid grid-40'>
          <div className='izquierda'>
            <img src="/medios/Fotografías e ilustraciones/bosque verde.png" alt="Bosque verde" className='bosque-verde' />
          </div>
          <div className='derecha'>
            <h2>
              Metodología de Autocuidado para Defensores de Derechos Humanos: “Análisis-Reflexión-Acción”
            </h2>
            <p>
              Nuestra metodología se centra en que en cada taller que realizamos
              fomentamos nuestro esquema de{" "}
              <strong>“Análisis-Reflexión-Acción”</strong>, que consiste en que cada
              grupo de personas que esté en el programa analice por sí mismos sus{" "}
              <strong>necesidades</strong>, reflexione sobre el{" "}
              <strong>autocuidado</strong> y defina{" "}
              <strong>acciones concretas</strong> para mejorar su bienestar en un
              ambiente de <strong>comunidad</strong> y <strong>apoyo mutuo</strong>.
              Nosotros le ayudaremos con lo que necesite durante el proceso respetando
              el <strong>ritmo de cada colectivo</strong>.
            </p>
          </div>

        </div>
        <div className="contenido-arriba">
          <h2>~Personas Cuidan Personas~</h2>

        </div>

      </div>

    </div>

  );
};

export default Formacion;
//  <div>
//       <h1>Formación en Autocuidado para Defensores</h1>
//       <p>
//         Ofrecemos formación práctica en <strong>cuidado colectivo</strong> y{" "}
//         <strong>autocuidado</strong> para defensores de derechos humanos,
//         adaptada a las necesidades de cada grupo y enfocada en su{" "}
//         <strong>salud</strong> y <strong>bienestar</strong>.
//       </p>

//       <p>
//         Nuestra metodología se centra en que en cada taller que realizamos
//         fomentamos nuestro esquema de{" "}
//         <strong>“Análisis-Reflexión-Acción”</strong>, que consiste en que cada
//         grupo de personas que esté en el programa analice por sí mismos sus{" "}
//         <strong>necesidades</strong>, reflexione sobre el{" "}
//         <strong>autocuidado</strong> y defina{" "}
//         <strong>acciones concretas</strong> para mejorar su bienestar en un
//         ambiente de <strong>comunidad</strong> y <strong>apoyo mutuo</strong>.
//         Nosotros le ayudaremos con lo que necesite durante el proceso respetando
//         el <strong>ritmo de cada colectivo</strong>.
//       </p>
//       <p>
//         Lo que buscamos con esta metodología es que cada participante pueda
//         sentirse <strong>seguro</strong> y <strong>apoyado</strong> en su labor
//         como defensor de derechos humanos, integrando en él{" "}
//         <strong>seguridad</strong> y <strong>paz</strong>.
//       </p>
//       <h2>Algunas de nuestras formaciones:</h2> //Aquí meteremos las formaciones
//       más adelante
//     </div>