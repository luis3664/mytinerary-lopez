import './home.css'
import HeroSection from '../../components/Hero/Hero'
import LayoutMain from '../../layouts/LayoutMain'
import CarouselHome from '../../components/CarouselHome/CarouselHome'


const Home = () => {
    return (
        <LayoutMain>
            <HeroSection />

            <section className='row mt-5' id='carouselMain'>
                <article>
                    <h3 className='text-center title-carousel'>Popular Mytineraries</h3>
                    <CarouselHome />
                </article>
            </section>
        </LayoutMain>
    )
}

export default Home