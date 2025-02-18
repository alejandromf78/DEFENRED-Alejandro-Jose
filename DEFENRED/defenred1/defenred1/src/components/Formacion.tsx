import { Link } from 'react-router-dom';
import './css/formacion.css'
import { Helmet } from 'react-helmet';

const Formacion = () => {
  const handleScroll = () => {
    document.getElementById('algunas-formaciones').scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
      <div className='formacion'>

      <Helmet>
              <meta name="description" content="Ofrecemos formación práctica en cuidado colectivo y autocuidado para defensores de derechos humanos, adaptada a las necesidades de cada grupo y enfocada en su salud y bienestar." />
              <meta name="keywords" content="Programa, Casa de Respiro, Defenred, Salud, Seguridad, Apoyo mutuo, Metodología, Derechos Humanos, Formaciones, Autocuidado" />
              <title>Formación en Autocuidado para Defensores</title>
            </Helmet>
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
          <button className="boton" onClick={handleScroll}>Nuestros Proyectos</button>
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
              </p><br /><br />


              <p>
                Lo que buscamos con esta metodología es que cada participante pueda
                sentirse <strong>seguro</strong> y <strong>apoyado</strong> en su labor
                como defensor de derechos humanos, integrando en él{" "}
                <strong>seguridad</strong> y <strong>paz</strong>.
              </p>

            </div>

          </div>
          <div className="contenido-arriba">
            <h2>~Personas Cuidan Personas~</h2>

          </div>

        </div>

        <div id='algunas-formaciones'>
          <div className="titulo">
            <h2>Algunas de nuestras formaciones:</h2>
            <img src="/medios/Logos/Logo blanco.png" alt="Logo" />
            <div className='cuadrados'>
              <div className='cuidado-colectivo'>
                <h3>Cuidado-colectivo</h3>
                <div className='ciudad'><h4>México</h4></div>
                <p>Acompañando procesos en colectivos de familiares de personas desaparecidas</p>
              </div>

              <div className='formacion-experiencial-cuidado'>
                <h3>Formacion Experiencial Cuidado</h3>
                <div className='ciudad'><h4>México</h4></div>
                <p>Formacion para Colectivos de personas defensoras y acompañantes</p>
              </div>

              <div className='autocuidados-equipos'>
                <h3>autocuidados Equipos</h3>
                <div className='ciudad'><h4>México</h4></div>
                <p>Taller "Yo me cuido, tu me cuidas, nosotras nos cuidamos" para el colectivo social</p>
              </div>

            </div>

            {/* segunda columna */}
            <div className='cuadrados'>
              <div className='atencion-psicosocial'>
                <h3>Atencion Psicosocial</h3>
                <div className='ciudad'><h4>México</h4></div>
                <p>Formacion para el equipo de acogida de personas defensoras en Pisos</p>
              </div>

              <div className='facilitacion'>
                <h3>Facilitacion</h3>
                <div className='ciudad'><h4>México</h4></div>
                <p>Dinamizacion de espacios de aprendizaje para Defensoras y Acompañantes</p>
              </div>

              <div className='difusion'>
                <h3>Difusion</h3>
                <div className='ciudad'><h4>México</h4></div>
                <p>Seminado "Defender en América Latina. Estrés,autocuidado y cuidado colectivo</p>
              </div>

            </div>
            {/* unica columna */}
            <div className='contenedor-respiro'>
              <div className='respiro'>
                <h3>Respiro</h3>
                <div className='ciudad'><h4>México</h4></div>
                <p>Jornadas de Respiro para Defensoras en Programas de Acogida</p>
              </div>
            </div>





          </div>







        </div>

      </div>

    </>

  );
};

export default Formacion;