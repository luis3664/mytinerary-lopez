import './cityDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const CityDetails = () => {
    let [city, setCity] = useState({});
    let id = useParams().id;
    const urlAPI = '/data.json';

    async function getData(url, id) {
        try {
            const responseJson = await axios.get(url);
            setCity(responseJson.data.cities.find(item => item.id == id));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData(urlAPI, id);
    }, [])

    return (
        <article className='d-flex px-4 justify-content-center align-items-center flex-column flex-lg-row mb-5' id='card-details'>
            <figure className='col-lg-5 col-12' id='figure'>
                <img className='h-100 w-100 img-fluid' src={city.img} alt={city.name} />
            </figure>

            <div className='col-lg-5 col-12 p-4 d-flex flex-column justify-content-center' id='detailsText'>
                <h2 className='cities-title2'>{city.name}</h2>
                <p className='d-flex flex-wrap'>Discover the beauty of {city.name}, where {city.lang} is spoken, located in the beautiful country of {city.country}, where the {city.coin} is used.</p>
                <p>Discover its culture, its people and its gastronomy.</p>
            </div>
        </article>
    )
}

export default CityDetails