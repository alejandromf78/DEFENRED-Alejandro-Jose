import './components/css/inicio.css'
import Contenido from './components/contenido';
import ProyectoDefenred from './components/proyectoDefenred';
import MisionVisionValores from './components/mision-vision-valores';
import Colabora from './components/Colabora';
import CasaDeRespiro from './components/CasaDeRespiro';


const Inicio = () => {
    return (
        <>
            <ProyectoDefenred/> 
            <MisionVisionValores/>
            <CasaDeRespiro/>
            <Colabora/>
        </>

    );
};
export default Inicio;