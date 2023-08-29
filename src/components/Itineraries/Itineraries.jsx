import './itineraries.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CardItinerary from '../CardItinerary/CardItinerary'

const Itineraries = () => {
    let [itineraries, setItineraries] = useState([]);
    let id = useParams().id;
    const urlAPI = 'http://localhost:4000/api/cities/';

    async function getData(url, id) {
        try {
            await axios.get(url + id)
                .then((res) => {
                    setItineraries(res.data.response.itineraries);
                }).catch();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData(urlAPI, id);
    }, []);
    console.log(itineraries);

    return (
        <article className='d-flex justify-content-center align-items-center itinerary mb-4'>
            <div className='itinerary-bg d-flex justify-content-center align-items-center'>
                {itineraries.map((itinerary) => <CardItinerary key={itinerary._id} user={itinerary} />)}
            </div>
        </article>
    )
}

export default Itineraries