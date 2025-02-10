import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Inicio from "./inicio";
import Contacto from "./components/Contacto"
import QuienesSomos from "./components/QuienesSomos";

//implementar parallax

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route path="/QuienesSomos" element={<QuienesSomos></QuienesSomos>}></Route>
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
