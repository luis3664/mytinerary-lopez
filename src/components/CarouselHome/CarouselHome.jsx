import './carouselHome.css'
import CardCitie from '../CardCitie/CardCitie'
import { useState } from 'react'
import cities from '../../assets/data/data'

const CarouselHome = () => {

    let [slide, setSlide] = useState(0)

    const nextSlide = () => {
        if (slide == 2) {
            setSlide(0)
        } else {
            setSlide(slide+1)
        }
    }

    const prevSlide = () => {
        if (slide == 0) {
            setSlide(2)
        } else {
            setSlide(slide-1)
        }
    }
    console.log(cities);
    return (
        <div className='carousel carousel-dark slide px-5' data-bs-ride='carousel'>
            <div className='carousel-inner py-3'>
                <div className='carousel-item d-flex flex-wrap justify-content-evenly align-items-center'>
                    {/* {cities.map(city => {<CardCitie hrefImg={city.img} name={city.name} />})} */}
                    <CardCitie hrefImg={'./buenosAires.jpeg'} name={'Buenos Aires'} />
                    <CardCitie hrefImg={'./cancun.jpeg'} name={'Cancun'} />
                    <CardCitie hrefImg={'./barcelona.jpeg'} name={'Cancun'} />
                    <CardCitie hrefImg={'./newYork.jpeg'} name={'Cancun'} />
                </div>
            </div>

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