import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Inicio from './inicio';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout/>}>
        
          <Route
          path="/"
          element={<Inicio></Inicio>}
          >
            
          </Route>
          <Route
          path=""
          element="">
            
          </Route>
          <Route
          path=""
          element="">
            
          </Route>

      </Route>
    </Routes>
    </Router >
  // <section>
  //   <Header></Header>
  //   <Banner></Banner>
  // </section>
  );
};
export default App;
