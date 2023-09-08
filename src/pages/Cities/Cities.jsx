import './cities.css'
import Section from '../../layouts/section/Section'
import CardCity from '../../components/CardCity/CardCity'
import SearcherBar from '../../components/SearcherBar/SearcherBar'
import ButtonsPage from '../../components/ButtonsPage/ButtonsPage'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCities, getNextPageCities, getPrevPageCities, setSearcher } from '../../redux/actions/citiesAction.js'

const Cities = () => {
    const { cities, page, slides, searcher } = useSelector(store => store.cities);
    const dispatch = useDispatch();

    const lisentSearcher = (event) => {
        dispatch(setSearcher(event.target.value));

        if (event.keyCode == 8 && searcher == '') {
            dispatch(getCities({ name: searcher, page: page, items: 6 }));
        }
    };

    const preventSubmit = (event) => {
        event.preventDefault();

        dispatch(getCities({ name: searcher, page: 1, items: 6 }));
    };

    const search = () => dispatch(getCities({ name: searcher, page: 1, items: 6 }));

    const pagePrev = () => {
        if (!searcher) { dispatch(getPrevPageCities({ name: searcher, page: page, items: 6, slides: slides })); }
    };
    const pageNext = () => {
        if (!searcher) { dispatch(getNextPageCities({ name: searcher, page: page, items: 6, slides: slides })); }
    };

    useEffect(() => { dispatch(getCities({ name: searcher, page: page, items: 6 })); }, []);

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