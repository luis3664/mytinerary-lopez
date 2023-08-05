import './carouselSlide.css'
import CardCitie from '../CardCitie/CardCitie'

const CarouselSlide = ({children}) => {
    
    return (
        <div className='carousel-inner py-3'>
            <div className='carousel-item d-flex flex-wrap justify-content-evenly align-items-center'>
                {(children).map((city, index) => <CardCitie key={index} hrefImg={city.img} name={city.name} />)}
            </div>
        </div>
    )
}

export default CarouselSlide