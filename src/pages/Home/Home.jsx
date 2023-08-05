import './home.css'
import HeroSection from '../../components/Hero/Hero'
import LayoutMain from '../../layouts/LayoutMain'
import CarouselHome from '../../components/CarouselHome/CarouselHome'


const Home = () => {
    return (
        <LayoutMain>
            <HeroSection />

            <section className='row mt-5' id='carouselMain'>
                <h2 className='text-center title-carousel'>Popular Mytineraries</h2>
                <article>
                    <CarouselHome />
                </article>
            </section>
        </LayoutMain>
    )
}

export default Home