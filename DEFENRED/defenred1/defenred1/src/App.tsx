import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Inicio from "./inicio";
import Contacto from "./components/Contacto"
import QuienesSomos from "./components/QuienesSomos";
import QueHacemos from "./components/QueHacemos";
import Formacion from "./components/Formacion";
import CasaDeRespiro from "./components/CasaDeRespiroAzul";
import Autocuidado from "./components/Autocuidado";

//implementar parallax

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route path="/QueHacemos" element={<QueHacemos></QueHacemos>}></Route>
          <Route path="/QuienesSomos" element={<QuienesSomos></QuienesSomos>}></Route>
          <Route path="/Formacion" element={<Formacion></Formacion>}></Route>
          <Route path="/CasaDeRespiro" element={<CasaDeRespiro></CasaDeRespiro>}></Route>
          <Route path="/Autocuidado" element={<Autocuidado></Autocuidado>}></Route>
        </Route>
      </Routes>
    </Router>
    // <section>
    //   <Header></Header>
    //   <Banner></Banner>
    // </section>
  );
};
export default App;
