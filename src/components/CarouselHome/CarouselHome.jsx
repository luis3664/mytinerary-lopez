import './carouselHome.css'
import { useEffect, useState } from 'react'
import CarouselSlide from '../CarouselSlide/CarouselSlide'
import cities from '../../assets/data/data'

const CarouselHome = () => {

    let [indexSlide, setIndexSlide] = useState(0);
    let [slides, setSlides] = useState([]);
    let slideLoading = [
        {
            img: './trip.png',
            name: 'Loading...'
        },{
            img: './trip.png',
            name: 'Loading...'
        },{
            img: './trip.png',
            name: 'Loading...'
        },{
            img: './trip.png',
            name: 'Loading...'
        }
    ];

    function makeSlides(array) {
        let slidesTotal = [];
        let slideAux;
        let i = 0;
        
        while (i < array.length) {
            slideAux = array.slice(i, i+4);
            
            i += 4;

            if (slideAux.length == 4) {slidesTotal.push(slideAux)}
            else{break};
        }

        return slidesTotal;
    }
    
    const nextSlide = () => {
        if (indexSlide == slides.length - 1) {
            setIndexSlide(0)
        } else {
            setIndexSlide(indexSlide + 1)
        }
    };

    const prevSlide = () => {
        if (indexSlide == 0) {
            setIndexSlide(slides.length - 1)
        } else {
            setIndexSlide(indexSlide - 1)
        }
    };
    
    useEffect(() => {
        setSlides(makeSlides(cities));
    }, []);

    useEffect(() => {
        if (slides.length >= 1) {
            let intervalId = setInterval(() => {
                nextSlide()
            }, 4500);
    
            return () => {clearInterval(intervalId)}
        }
    }, [indexSlide, slides])

    return (
        <div className='carousel indexSlide px-5 d-flex justify-content-center align-items-center'>
            <CarouselSlide array={slides.length > 0 ? slides[indexSlide]:slideLoading} />

            <button className='carousel-control-prev' onClick={prevSlide} type='button'>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Previous</span>
            </button>

            <button className='carousel-control-next' onClick={nextSlide} type='button'>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Next</span>
            </button>
        </div>
    )
}

export default CarouselHome