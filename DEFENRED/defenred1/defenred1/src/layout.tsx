import{Outlet} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Banner from './components/Banner';

const Layout=()=>{
    return(
        <>
        <Header></Header>
        <Banner></Banner>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}

export default Layout;