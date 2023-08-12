import './cities.css'
import axios from 'axios'
import Section from '../../layouts/section/Section'
import CardCity from '../../components/CardCity/CardCity'
import { useEffect, useState } from 'react'

const Cities = () => {
    let [cities, setCities] = useState([]);
    let [citiesDb, setCitiesDb] = useState([]);
    let [searcher, setSearcher] = useState('');

    async function getData(url) {
        try {
            const responseJson = await axios.get(url);
            setCities(responseJson.data.cities);
            setCitiesDb(responseJson.data.cities);
        } catch (error) {
            console.log(error);
        }
    };

    const lisentSearcher = (event) => {
        setSearcher(event.target.value);
    };

    const preventSubmit = (event) => {
        event.preventDefault();
    };

    function filter() {
        setCities(citiesDb);

        if (searcher.length != 0) {
            setCities(cities.filter(city => city.name.toLowerCase().startsWith(searcher.toLocaleLowerCase())));
        }
    }

    const urlAPI = '/data.json';

    useEffect(() => {
        getData(urlAPI);
    }, []);

    useEffect(() => {
        filter();
    }, [searcher])

    return (
        <Section extraClass='my-5'>
            <h2 className='text-center cities-title'>Find your destiny</h2>

            <form onSubmit={preventSubmit} className='form-searcher mb-5'>
                <fieldset className='d-flex justify-content-center align-items-center container-searcher'>
                    <i class="bi bi-search px-3 py-1"></i>
                    <input className='search-bar' onChange={lisentSearcher} type='text' placeholder='Type to search...' value={searcher} />
                </fieldset>
            </form>

            <article className='d-flex justify-content-evenly align-items-center flex-wrap'>
                {
                    cities.length > 0 ? cities.map((city, index) => <CardCity key={index} name={city.name} country={city.country} lang={city.lang} coin={city.coin} img={city.img} href={'/city/' + city.name} />) :
                        <div className='waiting d-flex justify-content-center align-items-center m-3'>
                            <h3 className='cities-title text-center'>We did not find the destination you were looking for.</h3>
                        </div>
                }
            </article>
        </Section>
    )
}

export default Cities