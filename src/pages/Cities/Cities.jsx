import './cities.css'
import axios from 'axios'
import Section from '../../layouts/section/Section'
import CardCity from '../../components/CardCity/CardCity'
import SearcherBar from '../../components/SearcherBar/SearcherBar'
import ButtonsPage from '../../components/ButtonsPage/ButtonsPage'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCities } from '../../redux/actions/citiesAction.js'

const Cities = () => {
    let [cities, setCities] = useState([{ _id: '0', name: 'Mytinerary', lang: 'Travellers', country: 'World', currency: 'Dreams', img: '/discover.jpg' }]);
    let [searcher, setSearcher] = useState('');
    let [page, setPage] = useState(1);
    let [slides, setSlides] = useState(0);

    const { cities2 } = useSelector(store => store.cities);
    const dispatch = useDispatch();

    const lisentSearcher = (event) => {
        setSearcher(event.target.value);

        if (event.keyCode == 8 && searcher == '') {
            getData(urlAPI, '', 1, 6)
        }
    };

    const preventSubmit = (event) => {
        event.preventDefault();
        setPage(1);
        getData(urlAPI, searcher, 1, 6);
    };

    async function getData(url, string, ref, count) {
        try {
            await axios.get(url + '?name=' + string + '&page=' + ref + '&items=' + count)
                .then((res) => {
                    setCities(res.data.response);

                    if (slides == 0) { setSlides(res.data.count) };
                }).catch();

        } catch (error) {
            console.log(error);
        }
    };

    const search = () => {
        getData(urlAPI, searcher, 1, 6);
    };

    const pagePrev = () => {
        if (page == 1 && searcher == '') {
            setPage(slides);
        } else if (searcher == '') {
            setPage(page - 1);
        };
    };
    const pageNext = () => {
        if (page == slides) {
            setPage(1);
        } else if (searcher == '') {
            setPage(page + 1);
        };
    };

    const urlAPI = 'http://localhost:4000/api/cities/';

    useEffect(() => {
        getData(urlAPI, searcher, page, 6);
        dispatch(getCities({name: searcher, page:page, items:6}));
    }, [page]);

    return (
        <Section extraClass='my-5'>
            <h2 className='text-center cities-title'>Find your destiny</h2>

            <SearcherBar submitF={preventSubmit} searchI={search} change={lisentSearcher} keyUp={lisentSearcher} searcher={searcher} />

            <article className='d-flex justify-content-evenly align-items-center flex-wrap'>
                {
                    cities.length > 0 ? cities.map((city) => <CardCity key={city._id} name={city.name} country={city.country} lang={city.lang} currency={city.currency} img={city.img} href={'/city/' + city._id} />) :
                        <div className='waiting d-flex justify-content-center align-items-center m-3'>
                            <h3 className='cities-title text-center'>We did not find the destination you were looking for.</h3>
                        </div>
                }
            </article>

            <ButtonsPage prevF={pagePrev} nextF={pageNext} number={page} />
        </Section>
    )
}

export default Cities