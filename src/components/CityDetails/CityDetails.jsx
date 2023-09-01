import './cityDetails.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCity } from '../../redux/actions/citiesAction.js'

const CityDetails = () => {
    let id = useParams().id;
    const { city } = useSelector(store => store.cities);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCity(id))
    }, []);

    return (
        <article className='d-flex px-4 justify-content-center align-items-center flex-column flex-lg-row mb-5' id='card-details'>
            <figure className='col-lg-5 col-12' id='figure'>
                <img className='h-100 w-100 img-fluid' src={city.img} alt={city.name} />
            </figure>

            <div className='col-lg-5 col-12 p-4 d-flex flex-column justify-content-center' id='detailsText'>
                <h2 className='cities-title2'>{city.name == 'Mytinerary' ? 'Loading...' : city.name}</h2>
                <p className='d-flex flex-wrap'>Discover the beauty of {city.name}, where {city.lang} is spoken, located in the beautiful country of {city.country}, where the {city.currency} is used.</p>
                <p>Discover its culture, its people and its gastronomy.</p>
            </div>
        </article>
    )
}

export default CityDetails