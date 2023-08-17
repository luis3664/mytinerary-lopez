import './cities.css'
import axios from 'axios'
import Section from '../../layouts/section/Section'
import CardCity from '../../components/CardCity/CardCity'
import { useEffect, useState } from 'react'

const Cities = () => {
    let [cities, setCities] = useState([{_id: '0', name: 'Mytinerary', lang: 'Travellers', country: 'World', currency: 'Dreams', img: '/discover.jpg'}]);
    let [searcher, setSearcher] = useState('');

    const lisentSearcher = (event) => {
        setSearcher(event.target.value);
    };

    const preventSubmit = (event) => {
        event.preventDefault();
    };

    async function filter(url) {
        try {
            await axios.get(url)
            .then((res) => {
                setCities(res.data.response.filter(city => city.name.toLowerCase().startsWith(searcher.toLocaleLowerCase().trim())));
            }).catch();
        } catch (error) {
            console.log(error);
        }
    };

    const urlAPI = 'http://localhost:4000/api/cities/';

    useEffect(() => {
        filter(urlAPI);
    }, [searcher]);

    return (
        <Section extraClass='my-5'>
            <h2 className='text-center cities-title'>Find your destiny</h2>

            <form onSubmit={preventSubmit} className='form-searcher mb-5'>
                <fieldset className='d-flex justify-content-center align-items-center container-searcher'>
                    <i className="bi bi-search align-self-start pe-3 py-1"></i>
                    <input className='search-bar' onChange={lisentSearcher} type='text' placeholder='Type to search...' value={searcher} />
                </fieldset>
            </form>

            <article className='d-flex justify-content-evenly align-items-center flex-wrap'>
                {
                    cities.length > 0 ? cities.map((city) => <CardCity key={city._id} name={city.name} country={city.country} lang={city.lang} currency={city.currency} img={city.img} href={'/city/' + city._id} />) :
                        <div className='waiting d-flex justify-content-center align-items-center m-3'>
                            <h3 className='cities-title text-center'>We did not find the destination you were looking for.</h3>
                        </div>
                }
            </article>
        </Section>
    )
}

export default Cities