import './CallToAction.css'
import { Link as LinkReact } from 'react-router-dom'

const CallToAction = () => {
    return (
        <LinkReact to={'/cities'} className='d-flex justify-content-center' id='buttonHero'>
            <figure>
                <img src="/buttonHero.png" alt="Stamp" />
            </figure>
        </LinkReact>
    )
}

export default CallToAction