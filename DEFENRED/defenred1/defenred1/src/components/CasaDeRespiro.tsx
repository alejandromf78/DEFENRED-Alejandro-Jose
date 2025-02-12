import './css/CasaDeRespiro.css'
import { Helmet } from "react-helmet";

const CasaDeRespiro = () => {
    return (
        <div className='casa-respiro'>
            <Helmet>
                <meta name="description" content="descripción: En La Cabrera, Madrid, Casa de Respiro de Defenred es un espacio seguro donde defensores de derechos humanos encuentran descanso, apoyo psicológico y recursos para fortalecer su salud y bienestar." />
                <meta name="keywords" content="Casa de Respiro, Defenred, Derechos humanos, Autocuidado, Madrid,Defensores, Salud física, Salud mental, Bienestar, Apoyo" />
                <title>Proyecto Defenred</title>
            </Helmet>

            <h1>«Casa de Respiro»</h1>
                    <h2>¿Cuáles son los servicios que proporciona La Casa de Respiro?</h2>
            <div className=" grid grid-50">
                
                <div className="contenido-izquierda">

                    


                    <div className='texto'>
                        <ul>

                            <li>
                                <span> <img src="https://cdn-icons-png.freepik.com/512/14614/14614440.png" alt="" /></span>
                                Tiempo para descansar y recuperarse
                            </li>
                            <p>Un lugar donde los defensores pueden desconectar de la rutina diaria y cuidar su
                                salud física y emocional, fomentando su bienestar mental y su autocuidado.</p>
                            <li>
                                <span> <img src="https://cdn-icons-png.freepik.com/512/14614/14614440.png" alt="" /></span>
                                Entrenamiento en cuidado personal y gestión del estrés
                            </li>
                            <p>Talleres y actividades diseñados para que cada persona adquiera conocimientos
                                sobre cómo gestionar el estrés y pueda utilizar esas habilidades en su vida personal
                                y laboral.</p>
                            <li>
                                <span> <img src="https://cdn-icons-png.freepik.com/512/14614/14614440.png" alt="" /></span>
                                Asesoramiento psicosocial personalizado
                            </li>
                            <p>Un grupo de expertos en psicología y salud mental ofrece ayuda durante este
                                periodo de descanso, promoviendo un proceso de curación que permita seguir con
                                su activismo de forma más saludable.</p>
                        </ul>

                    </div>


                </div>
                <div className='contenido-derecha'>
                    <img src="/medios/Fotografías e ilustraciones/Naturaleza pájaros.png" alt="Naturaleza pájaros" className='foto-derecha' />

                    <div className="boton-casa">
                            <button className="casa-respiro">Casa de Respiro »</button>
                        </div>
                </div>




            </div>
        </div>
    );
};

export default CasaDeRespiro;
