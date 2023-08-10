import './cities.css'
import Section from '../../layouts/section/Section'
import ImgUnderConst from '../../components/ImgUnderConst/ImgUnderConst'

const Cities = () => {
    return (
        <Section extraClass='my-5'>
            <h2 className='text-center cities-title'>Cities</h2>
            <article className='d-flex justify-content-center align-items-center'>
                <ImgUnderConst />
            </article>
        </Section>
    )
}

export default Cities