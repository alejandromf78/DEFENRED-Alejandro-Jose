import "./css/proyectoDefenred.css";

const ProyectoDefenred = () => {
    return (
        <div className='inicio'>

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
                                <button className="casa-respiro">Casa de Respiro</button>
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