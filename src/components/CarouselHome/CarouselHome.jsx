import './carouselHome.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CarouselSlide from '../CarouselSlide/CarouselSlide'

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

    const urlAPI = '/data.json';

    async function getData(url) {
        try {
            const responseJson = await axios.get(url);
            setSlides(makeSlides(responseJson.data.cities));
        } catch (error) {
            console.log(error);
        }
    };

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
    };
    
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
        getData(urlAPI);
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
        <section className='row' id='carouselMain'>
                <h2 className='text-center title-carousel'>Popular Mytineraries</h2>
                <article>
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
                </article>
            </section>
    )
}

export default CarouselHome