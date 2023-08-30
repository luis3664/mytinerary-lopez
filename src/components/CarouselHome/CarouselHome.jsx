import './carouselHome.css'
import CarouselSlide from '../CarouselSlide/CarouselSlide'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSlideCarousel, getNextSlideCarousel, getPrevSlideCarousel } from '../../redux/actions/carouselAction.js'

const CarouselHome = () => {

    const dispatch = useDispatch();
    const {slide, page} = useSelector(store => store.carousel);

    const nextSlide = () => dispatch(getNextSlideCarousel(page));

    const prevSlide = () => dispatch(getPrevSlideCarousel(page));

    useEffect(() => {
        dispatch(getSlideCarousel(1));
    }, []);

    useEffect(() => {
        let intervalId = setInterval(() => {
            dispatch(getNextSlideCarousel(page));
        }, 4500);

        return () => { clearInterval(intervalId) };
    });

    return (
        <section className='row' id='carouselMain'>
            <h2 className='text-center title-carousel'>Popular Mytineraries</h2>
            <article>
                <div className='carousel indexSlide px-5 d-flex justify-content-center align-items-center'>
                    <CarouselSlide array={slide} />

                    <button className='carousel-control-prev' onClick={prevSlide} type='button'>
                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Previous</span>
                    </button>

                    <button className='carousel-control-next' onClick={nextSlide} type='button'>
                        <span className='carousel-control-next-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Next</span>
                    </button>
                </div>
            </article>
        </section>
    )
}

export default CarouselHome