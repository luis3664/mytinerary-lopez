import './cities.css'
import data from '../../assets/data/data.js'
import Section from '../../layouts/section/Section'
import CardCity from '../../components/CardCity/CardCity'

const Cities = () => {
    const urlAPI = '../../assets/data/data.json';

    return (
        <Section extraClass='my-5'>
            <h2 className='text-center cities-title'>Cities</h2>
            <article className='d-flex justify-content-evenly align-items-center flex-wrap'>
                {data.map((city, index) => <CardCity key={index} name={city.name} country={city.country} lang={city.lang} coin={city.coin} img={city.img} href={'/city/' + city.name} />)}
            </article>
        </Section>
    )
}

export default Cities