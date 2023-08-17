import './layoutMain.css'
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import { Outlet } from 'react-router-dom'

const LayoutMain = () => {
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