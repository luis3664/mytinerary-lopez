import './searcherBar.css'

const SearcherBar = ({ submitF, searchI, change, keyUp, searcher }) => {
    return (
        <form onSubmit={submitF} className='form-searcher mb-5'>
            <fieldset className='d-flex justify-content-center align-items-center container-searcher'>
                <i className="bi bi-search align-self-start pe-3 py-1" onClick={searchI}></i>
                <input className='search-bar' onChange={change} onKeyUp={keyUp} type='text' placeholder='Type to search...' value={searcher} />
            </fieldset>
        </form>
    )
}

export default SearcherBar