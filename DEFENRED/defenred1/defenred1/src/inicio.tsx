import './components/css/inicio.css'
import Contenido from './components/contenido';
import ProyectoDefenred from './components/proyectoDefenred';
import MisionVisionValores from './components/mision-vision-valores';
import Colabora from './components/Colabora';


const Inicio = () => {
    return (
        <>
            <ProyectoDefenred/> 
            <MisionVisionValores/>
            <Colabora/>
        </>

    );
};
export default Inicio;