//Este archivo sirve de referencia, no tiene ninguna utilidad pero es una forma de llamar a un bloque
const Contenido = (props: { h1: string, h2: string, p: string, img: string}) => {
    return (
        <div className='inicio'>

            <div className="contenido">
                <div className=" grid grid-50">
                    <div className="contenido-izquierda">
                        <h1>{props.h1}</h1>
                        <h2>{props.h2}</h2>
                        <p>{props.p}</p>

                    </div>
                    <div className="contenido-derecha">

                        <img src={props.img} alt="Foto montaña paisaje" className='imagen-bosque' />

                    </div>

                </div>

            </div>



        </div>


    );
};
export default Contenido;