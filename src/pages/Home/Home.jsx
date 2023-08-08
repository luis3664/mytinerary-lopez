import './home.css'
import HeroSection from '../../components/Hero/Hero'
import CarouselHome from '../../components/CarouselHome/CarouselHome'


const Home = () => {
    return (
        <>
            <HeroSection />

            <section className='row' id='carouselMain'>
                <h2 className='text-center title-carousel'>Popular Mytineraries</h2>
                <article>
                    <CarouselHome />
                </article>
            </section>
        </>
    )
}

export default Home