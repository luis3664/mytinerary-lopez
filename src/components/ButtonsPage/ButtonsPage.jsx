
const ButtonsPage = ({ prevF, nextF, number }) => {
    return (
        <article className='d-flex justify-content-evenly align-items-center flex-wrap my-3'>
            <button className='carousel-control-prev pages-button' onClick={prevF} type='button'>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Previous</span>
            </button>

            <span className='d-flex mx-4 pages-number'>{number}</span>

            <button className='carousel-control-next pages-button' onClick={nextF} type='button'>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Next</span>
            </button>
        </article>
    )
}

export default ButtonsPage