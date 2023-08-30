import './itineraries.css'
import { useSelector } from 'react-redux'
import CardItinerary from '../CardItinerary/CardItinerary'

const Itineraries = () => {
    const { city } = useSelector(store => store.cities);
    const itineraries = city.itineraries;

    return (
        <article className='d-flex justify-content-center align-items-center itinerary mb-4'>
            <div className='itinerary-bg d-flex justify-content-center align-items-center'>
                {itineraries.map((itinerary) => <CardItinerary key={itinerary._id} user={itinerary} />)}
            </div>
        </article>
    )
}

export default Itineraries