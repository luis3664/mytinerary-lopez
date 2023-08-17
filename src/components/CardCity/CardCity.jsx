import './cardCity.css'
import { Link as LinkReact } from 'react-router-dom'

const CardCity = ({name, country, lang, currency, img, href}) => {
    return (
        <div className='card-city d-flex justify-content-evenly align-items-center m-2'>
            <div className='card__face card__face--front'>
                <figure className='w-100 h-100'>
                    <img src={img} className='img-fluid w-100 h-100' alt={name} />
                </figure>
                <span className='city-name'>{name == 'Mytinerary' ? 'Loading...' : name}</span>
            </div>

            <LinkReact to={href} className='card__face card__face--back d-flex p-3 flex-column justify-content-evenly align-items-center text-decoration-none'>
                <div className='w-100 h-100 d-flex p-3 flex-column justify-content-evenly align-items-center'>
                    <p className='text-center'>City: {name}</p>
                    <p className='text-center'>Country: {country}</p>
                    <p className='text-center'>Language: {lang}</p>
                    <p className='text-center'>Currency: {currency}</p>
                </div>
            </LinkReact>
        </div>
    )
}

export default CardCity