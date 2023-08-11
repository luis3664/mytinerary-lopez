import './cityFull.css'
import Section from '../../layouts/section/Section'
import ImgUnderConst from '../../components/ImgUnderConst/ImgUnderConst'

const CityFull = () => {
    return (
        <Section>
            <h2 className='text-center cities-title'>CityFull</h2>
            <article className='d-flex justify-content-center align-items-center'>
                <ImgUnderConst />
            </article>
        </Section>
    )
}

export default CityFull