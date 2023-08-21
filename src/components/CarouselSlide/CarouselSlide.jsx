import CardCarousel from '../CardCarousel/CardCarousel'

const CarouselSlide = ({array}) => {
    
    return (
        <div className='carousel-inner py-3'>
            <div className='carousel-item d-flex flex-wrap justify-content-evenly align-items-center'>
                {array.map((city, index) => <CardCarousel key={index} hrefImg={city.img} name={city.name} href={'/city/'+city._id} />)}
            </div>
        </div>
    )
}

export default CarouselSlide