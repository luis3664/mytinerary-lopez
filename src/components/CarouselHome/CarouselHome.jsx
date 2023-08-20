import './carouselHome.css'
import axios from 'axios'
import CarouselSlide from '../CarouselSlide/CarouselSlide'
import { useEffect, useState } from 'react'

const CarouselHome = () => {

    let [indexSlide, setIndexSlide] = useState(1);
    let [slides, setSlides] = useState([
        {
            img: './trip.png',
            name: 'Loading...'
        }, {
            img: './trip.png',
            name: 'Loading...'
        }, {
            img: './trip.png',
            name: 'Loading...'
        }, {
            img: './trip.png',
            name: 'Loading...'
        }
    ]);
    //     {
    //         img: './trip.png',
    //         name: 'Loading...'
    //     },{
    //         img: './trip.png',
    //         name: 'Loading...'
    //     },{
    //         img: './trip.png',
    //         name: 'Loading...'
    //     },{
    //         img: './trip.png',
    //         name: 'Loading...'
    //     }
    // ];

    const urlAPI = 'http://localhost:4000/api/cities/';

    async function getData(url, string = '', ref = '', count = '') {
        try {
            await axios.get(url + '?name=' + string + '&page=' + ref + '&items=' + count)
                .then((res) => {
                    setSlides(res.data.response);
                }).catch();
        } catch (error) {
            console.log(error);
        }
    };

    const nextSlide = () => {
        if (indexSlide == 3) {
            setIndexSlide(1)
        } else {
            setIndexSlide(indexSlide + 1)
        };
        getData(urlAPI, '', indexSlide, 4);
    };

    const prevSlide = () => {
        if (indexSlide == 1) {
            setIndexSlide(3)
        } else {
            setIndexSlide(indexSlide - 1)
        };
        getData(urlAPI, '', indexSlide, 4);
    };

    useEffect(() => {
        getData(urlAPI, '', indexSlide, 4);
    }, []);

    useEffect(() => {
        let intervalId = setInterval(() => {
            nextSlide();
        }, 4500);

        return () => { clearInterval(intervalId) };
    }, [indexSlide, slides]);

    return (
        <section className='row' id='carouselMain'>
            <h2 className='text-center title-carousel'>Popular Mytineraries</h2>
            <article>
                <div className='carousel indexSlide px-5 d-flex justify-content-center align-items-center'>
                    <CarouselSlide array={slides} />

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