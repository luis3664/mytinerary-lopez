import './carouselHome.css'
import { useEffect, useState } from 'react'
import CarouselSlide from '../CarouselSlide/CarouselSlide'
import cities from '../../assets/data/data'

const CarouselHome = () => {

    let [slide, setSlide] = useState(0);
    let [slides, setSlides] = useState([[]]);
    
    function makeSlides(array) {
        let slidesTotal = [];
        let arrayAux = [];

        for (let i = 0; i < array.length; i++) {
            if (i % 4 === 0 && i !== 0) {
                slidesTotal.push(arrayAux);
                arrayAux = [];
            }
            arrayAux.push(array[i]);
        }

        if (arrayAux.length > 3 && slidesTotal.length < 10) {
            slidesTotal.push(arrayAux);
        }
        
        return slidesTotal;
    };

    const nextSlide = () => {
        if (slide == slides.length - 1) {
            setSlide(0)
        } else {
            setSlide(slide + 1)
        }
    };

    const prevSlide = () => {
        if (slide == 0) {
            setSlide(slides.length - 1)
        } else {
            setSlide(slide - 1)
        }
    };

    useEffect(() => {
        setSlides(makeSlides(cities));
    }, []);

    return (
        <div className='carousel slide px-5 d-flex justify-content-center align-items-center'>
            <CarouselSlide>
                {slides.length > 0 ? (
                    slides[slide]
                ):(
                    [
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
                    ]
                )}
            </CarouselSlide>

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