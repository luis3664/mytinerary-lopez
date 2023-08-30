import './cardItinerary.css'

const CardItinerary = () => {
    return (
        <div className='card-itinerary d-flex justify-content-evenly align-items-center flex-wrap p-3'>
            <div className='user-data d-flex justify-content-evenly align-items-center flex-wrap col-12 col-sm-6'>
                <figure className='itinerary-photo m-0 d-flex justify-content-center align-items-center'>
                    <img src='/trip.png' alt='userPhoto' />
                </figure>

                <span className='cities-title'>
                    Juan Sparrow
                </span>
            </div>

            <div className='itinerary-data d-flex justify-content-center align-items-center flex-wrap col-12 col-sm-6 gap-5'>
                <div className='itinerary-time'>
                    <i className='bi bi-alarm cities-title'> 3h</i>
                </div>

                <div className='itinerary-price'>
                    <span className='cities-title d-flex justify-content-center align-items-center gap-2'>
                        Price:
                        <i className="bi bi-cash-stack d-flex"></i>
                    </span>
                </div>

                <div className='itinerary-hastags d-flex flex-wrap gap-3'>
                    <span className='cities-title'>
                        #beach1
                    </span>

                    <span className='cities-title'>
                        #beach1
                    </span>

                    <span className='cities-title'>
                        #beach1
                    </span>
                </div>
            </div>

            <div className='itinerary-activities col-12 text-center'>
                <span>activities</span>
            </div>

            <div className='itineraries-comments col-12 text-center'>
                <span>comments</span>
            </div>
        </div>
    )
}

export default CardItinerary