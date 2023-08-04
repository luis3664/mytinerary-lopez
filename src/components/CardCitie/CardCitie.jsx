import './cardCitie.css'

const CardCitie = ({hrefImg, name}) => {
    return (
        <div className='d-flex flex-column justify-content-between aling-items-center cardCitie'>
            <figure className='m-0'>
                <img src={hrefImg} className='object-fit' alt={name} />
            </figure>
            <p className='text-center my-auto'>{name}</p>
        </div>
    )
}

export default CardCitie