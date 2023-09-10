import './layoutMain.css'
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import { Navigate, Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { ToastContainer } from 'react-toastify'


const LayoutMain = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const PrivateRouter = () => {
        const { token } = useSelector(store => store.users);
        let res;
        
        try {
            res = jwtDecode(token);
            if (pathname == '/login') {
                return <Navigate to={'/'} />
            } else {
                return <Outlet />;
            }
        } catch (err) {
            return <Outlet />;
        }
    };

    return (
        <>
            <header className='mx-0 container-fluid justify-content-center align-items-center' id='headerNav'>
                <NavBar />
            </header>

            <main className='container d-flex flex-column justify-content-center align-items-center'>
                {PrivateRouter()}
                <ToastContainer />
            </main>

            <footer className='container-fluid d-flex justify-content-center align-items-center row flex-wrap m-0'>
                <Footer />
            </footer>
        </>
    )
}

export default LayoutMain