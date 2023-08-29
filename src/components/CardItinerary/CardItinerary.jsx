import './cardItinerary.css'

const CardItinerary = () => {
    return (
        <div className='card-itinerary d-flex justify-content-evenly align-items-center p-3'>
            <div className='user-data d-flex justify-content-evenly align-items-center col-6'>
                <figure className='img-itinerary m-0 d-flex justify-content-center align-items-center'>
                    <img src='/trip.png' alt='ImgUser' />
                </figure>
                <span className='cities-title'>
                    Juan Sparrow
                </span>
            </div>
            <div className='itinerary-data d-flex justify-content-center align-items-center col-6'>

            </div>
        </div>
    )
}

export default CardItinerary