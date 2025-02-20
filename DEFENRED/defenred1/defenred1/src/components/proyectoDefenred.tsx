import "./css/proyectoDefenred.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ProyectoDefenred = () => {
    return (
        <div className='inicio'>
            <Helmet>
                <meta name="description" content="En Defenred ofrecemos apoyo a defensores de derechos humanos en riesgo, proporcionando un espacio seguro en la Casa de Respiro. Nuestro proyecto promueve el autocuidado y el bienestar integral para fortalecer su compromiso con la justicia social." />
                <meta name="keywords" content="Apoyo,Derechos humanos,Riesgo,Red solidaria,Casa de Respiro, Lugar Seguro, Salud física, Salud emocional, Autocuidado, Defensa de derechos humanos" />
                <title>Proyecto Defenred</title>
            </Helmet>


            <div className="proyectoDefenred">
                <div className=" grid grid-50">
                    <div className="contenido-izquierda">
                        <h1>Proyecto Defenred</h1>
                        <h2>Autocuidado y Solidaridad para la Continuidad en la Defensa de
                            Derechos Humanos</h2>
                        <p>En Defenred realizamos una labor de <strong>apoyo </strong> para las personas que defienden
                            los <strong>derechos humanos</strong> que se encuentran en una situación de <strong>riesgo </strong> y
                            persecución. Mediante nuestra <strong>red solidaria </strong>, ofrecemos la <strong>Casa de Respiro </strong>
                            facilitando es estas personas un <strong>lugar seguro </strong> en el que proporcionamos tanto
                            herramientas como recursos necesarios para fomentar algo tan importante como su
                            <strong> salud física </strong> como la <strong> salud emocional </strong> y de esta manera impulsamos el
                            <strong> autocuidado </strong> para la continuidad de su labor en la defensa de <strong> derechos humanos </strong>
                            y la justicia social.</p>

                        <div className="boton-casa">
                            <button className="casa-respiro"><Link to="/CasaDeRespiro">Casa de Respiro »</Link></button>
                        </div>


                    </div>
                    <div className="contenido-derecha">

                        <img src='/medios/Fotografías e ilustraciones/bosque rojizo.png' alt="Foto montaña paisaje" className='imagen-bosque' />

                    </div>

                </div>

            </div>

        </div>


    );
};
export default ProyectoDefenred;