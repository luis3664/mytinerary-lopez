import './cityFull.css'
import Section from '../../layouts/section/Section'
import CityDetails from '../../components/CityDetails/CityDetails'
import Itineraries from '../../components/Itineraries/Itineraries'
import { Link as LinkReact } from 'react-router-dom'


const CityFull = () => {

    return (
        <Section>
            <h2 className='text-center cities-title my-3'>In search of the incredible</h2>
            <article className='d-flex justify-content-center align-items-center mt-4'>
                <CityDetails />
            </article>

            <h2 className='text-center cities-title mt-3 mb-5'>Itineraries</h2>
            <Itineraries />

            <LinkReact to={'/cities'}>
                <button className='carousel-control-prev' type='button' id='backButton'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Back to Cities</span>
                </button>
            </LinkReact>
        </Section>
    )
}

export default CityFull