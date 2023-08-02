import './home.css'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/Hero/Hero'


const Home = () => {
    return (
        <>
            <header className='mx-0 justify-content-center align-items-center' id='headerNav'>
                <NavBar />
            </header>

            <main className='container d-flex justify-content-center align-items-center'>
                <HeroSection />

                <aside>

                </aside>
            </main>

            <footer className='d-flex justify-content-center align-items-center'>
                <Footer />
            </footer>
        </>
    )
}

export default Home