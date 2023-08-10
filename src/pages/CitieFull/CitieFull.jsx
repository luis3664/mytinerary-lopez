import './citieFull.css'
import Section from '../../layouts/section/Section'
import ImgUnderConst from '../../components/ImgUnderConst/ImgUnderConst'

const CitieFull = () => {
    return (
        <Section>
            <h2 className='text-center cities-title'>CitieFull</h2>
            <article className='d-flex justify-content-center align-items-center'>
                <ImgUnderConst />
            </article>
        </Section>
    )
}

export default CitieFull