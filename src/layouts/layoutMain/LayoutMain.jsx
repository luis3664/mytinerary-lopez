import './layoutMain.css'
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'


const LayoutMain = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <header className='mx-0 container-fluid justify-content-center align-items-center' id='headerNav'>
                <NavBar />
            </header>

            <main className='container d-flex flex-column justify-content-center align-items-center'>
                <Outlet />
            </main>

            <footer className='container-fluid d-flex justify-content-center align-items-center row flex-wrap m-0'>
                <Footer />
            </footer>
        </>
    )
}

export default LayoutMain