import{Outlet} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Banner from './components/Banner';

const Layout=()=>{
    return(
        <>
        <Banner></Banner>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}

export default Layout;