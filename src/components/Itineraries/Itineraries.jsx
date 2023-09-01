import './itineraries.css'
import { useSelector } from 'react-redux'
import CardItinerary from '../CardItinerary/CardItinerary'

const Itineraries = () => {
    const { city } = useSelector(store => store.cities);
    const itineraries = city.itineraries;

    return (
        <article className='d-flex justify-content-center align-items-center itinerary mb-4'>
            <div className='itinerary-bg d-flex justify-content-center align-items-center flex-wrap gap-5 py-5 px-1'>
                {itineraries.length ? itineraries.map((itinerary) => <CardItinerary key={itinerary._id} itinerary={itinerary} />) :
                    <h2 className='cities-title p-5 card-itinerary text-center fs-4'>
                        There are currently no itineraries for this city. Be the first to publish your itineraries and you will have more success.
                    </h2>}
            </div>
        </article>
    )
}

export default Itineraries