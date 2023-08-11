import './cardCarousel.css'
import { Link as LinkReact } from 'react-router-dom'

const CardCarousel = ({hrefImg, name, href}) => {
    return (
        <LinkReact to={href} className='d-flex flex-column justify-content-between aling-items-center text-decoration-none cardCarousel'>
            <figure className='m-0'>
                <img src={hrefImg} className='object-fit' alt={name} />
            </figure>
            <p className='text-center my-auto fst-italic'>{name}</p>
        </LinkReact>
    )
}

export default CardCarousel