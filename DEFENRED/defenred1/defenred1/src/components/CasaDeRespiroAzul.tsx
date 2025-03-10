import './css/CasaDeRespiroAzul.css'
import { Helmet } from "react-helmet";

const CasaDeRespiroAzul = () => {
  return (
    <div className='casa-respiro-azul'>
      <Helmet>
        <meta name="description" content="Nuestro programa de “Casa de Respiro” le prestamos atención al autocuidado para las personas defensoras de derechos humanos." />
        <meta name="keywords" content="Programa, Casa de Respiro, Autocuiado, Estado de salud, Personas defensoras, La Cabrera, Naturaleza, Descansar, Herramientas de autocuidado,Acogedor y relajante" />
        <title>El programa Casa de Respiro - Defenred</title>
      </Helmet>
      <div>

        <div className=" grid grid-50">
          <div className="contenido-izquierda">

            <h1>«Casa de Respiro»</h1>
            <h2>El programa</h2>

            <p>
              Nuestro programa de <strong>“Casa de Respiro”</strong> le prestamos
              atención al <strong>autocuidado</strong> para las personas defensoras de
              derechos humanos.
            </p>
            <div className='texto'>
              <p>
                La <strong>“Casa de Respiro”</strong> surge de la hipótesis de que si
                los activistas toman un tiempo de descanso enfocándose en su{" "}
                <strong>salud</strong> tanto física como mental, podrán identificar su
                propio estado actual y ver cómo su trabajo en la{" "}
                <strong>defensa de los derechos humanos</strong> impacta en su vida. Lo
                que queremos hacer con este programa es generar{" "}
                <strong>cambios positivos</strong> en su entorno para mejorar su{" "}
                <strong>salud física</strong> y <strong>mental</strong>, y así ayudarles
                a continuar su labor de manera más saludable para ellos.
              </p>
            </div>

            <p>
              El objetivo principal de este programa es visibilizar nuestra
              herramienta <strong>“el autocuidado”</strong> en la labor de la defensa
              de los derechos humanos y, para ello, planteamos:
            </p>

            <ul>

              <li>
                <span> <img src="https://cdn-icons-png.freepik.com/512/14614/14614440.png" alt="" /></span>
                Evaluar el <strong>estado de salud</strong> de las personas defensoras
                para entender el efecto de su trabajo en sus vidas.
              </li>
              <li>
                <span> <img src="https://cdn-icons-png.freepik.com/512/14614/14614440.png" alt="" /></span>
                Incorporar la necesidad del <strong>autocuidado</strong> en su trabajo
                diario.
              </li>
              <li>
                <span> <img src="https://cdn-icons-png.freepik.com/512/14614/14614440.png" alt="" /></span>
                Ofrecer <strong>herramientas de autocuidado</strong> para que puedan
                aplicarlas en práctica cuando regresen a su país.
              </li>
            </ul>

            <p>
              Nuestro programa busca promover una vida más{" "}
              <strong>equilibrada</strong> y <strong>sostenible</strong> para quienes
              defienden los derechos humanos, asegurando que puedan mantener su labor
              en mejores condiciones y sin que les afecte más de lo necesario.
            </p>


          </div>
          <div className='contenido-derecha'>
            <img src='/medios/Fotografías e ilustraciones/bosque rojizo.png' alt="Foto montaña paisaje" className='foto-derecha' />
          </div>

        </div>

      </div>
      <div className='que-ofrecemos'>
        <div className='contenedor'>
          <div className='izquierda'>
            <h2>¿Qué ofrecemos?</h2>
            <img src="/medios/Fotografías e ilustraciones/vacas.png" alt="" />
          </div>
          <div className='derecha'>
            <p>
              En nuestro programa ayudamos a aquellas personas a que tengan una
              oportunidad de <strong>tomar un descanso</strong> y reflexionar sobre
              sus <strong>prácticas de autocuidado</strong>. Para ello proponemos
              actividades desde distintos campos de la <strong>salud</strong>:
            </p>
            <ul>
              <li>
                <span> <img src="https://cdn-icons-png.freepik.com/512/14614/14614440.png" alt="" /></span><strong>Apoyo Psicológico</strong>
              </li>
              <li>
                <span> <img src="https://cdn-icons-png.freepik.com/512/14614/14614440.png" alt="" /></span><strong>Trabajo Corporal</strong>
              </li>
              <li>
                <span> <img src="https://cdn-icons-png.freepik.com/512/14614/14614440.png" alt="" /></span><strong>Acompañamiento de espacios de ocio</strong>
              </li>
              <li>
                <span> <img src="https://cdn-icons-png.freepik.com/512/14614/14614440.png" alt="" /></span><strong>El valor terapéutico de la solidaridad</strong>
              </li>
            </ul>

          </div>

        </div>
        <div className="frase">
          <h2>~Un programa donde solo importa la Práctica~</h2>

        </div>
      </div>

      <div className='donde-se-realiza'>
        <div className='contenedor'>

          <div className='derecha'>
            <div className='
            parrafo'>
              <p>
                La <strong>Casa de Respiro</strong> se encuentra en un pequeño municipio cercano a <strong>Madrid</strong> llamado <strong>La
                Cabrera</strong>, en un entorno rural tranquilo que ofrece contacto con la <strong>naturaleza</strong> y <strong>espacios
                abiertos</strong> ideales para <strong>pasear</strong> y <strong>descansar</strong>.
              </p>

              <p>
                La ubicación permite a los visitantes disfrutar
                de un ambiente <strong>acogedor</strong> y <strong>relajante</strong>, facilitando un descanso adecuado. Además, el
                entorno ofrece oportunidades de conexión con la comunidad local y municipios cercanos,

                permitiendo participar en actividades variadas en un espacio natural y saludable, lo que
                contribuye positivamente al programa de autocuidado.
              </p>

            </div>





          </div>

          <div className='izquierda'>
            <h2>¿Dónde y cómo se realizará el programa?</h2>
            <img src="/medios/Fotografías e ilustraciones/vacas.png" alt="" />
          </div>

        </div>
        
      </div>



    </div>
  );
};

export default CasaDeRespiroAzul;
