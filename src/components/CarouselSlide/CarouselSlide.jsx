import CardCitie from '../CardCitie/CardCitie'

const CarouselSlide = ({array}) => {
    
    return (
        <div className='carousel-inner py-3'>
            <div className='carousel-item d-flex flex-wrap justify-content-evenly align-items-center'>
                {array.map((city, index) => <CardCitie key={index} hrefImg={city.img} name={city.name} href={'/citie/'+index} />)}
            </div>
        </div>
    )
}

export default CarouselSlide