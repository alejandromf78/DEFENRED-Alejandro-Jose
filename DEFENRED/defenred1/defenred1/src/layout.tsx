import{Outlet} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

const Layout=()=>{
    return(
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}

export default Layout;