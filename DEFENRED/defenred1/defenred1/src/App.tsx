import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from "./components/header";
import Banner from "./components/Banner";

const App = () => {
  return (
    <section>
      <Header></Header>
      <Banner></Banner>
    </section>
  );
};
export default App;
