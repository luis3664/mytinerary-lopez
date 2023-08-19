import './cityFull.css'
import Section from '../../layouts/section/Section'
import CityDetails from '../../components/CityDetails/CityDetails'
import ImgUnderConst from '../../components/ImgUnderConst/ImgUnderConst'
import { Link as LinkReact, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const CityFull = () => {

    return (
        <Section>
            <h2 className='text-center cities-title my-3'>In search of the incredible</h2>
            <article className='d-flex justify-content-center align-items-center mt-4'>
                <CityDetails />
            </article>

            <h2 className='text-center cities-title mt-3 mb-0'>Iterinary</h2>
            <article className='d-flex justify-content-center align-items-center mt-5 w-75 h-75'>
                <ImgUnderConst />
            </article>

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