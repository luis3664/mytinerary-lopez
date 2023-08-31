import './comment.css'

const Comment = ({ item }) => {
    return (
        <div className='itinerary-comment p-3 mt-2'>
            <div className='col-12 d-flex justify-content-sm-start justify-content-center align-items-center gap-3 flex-wrap'>
                <figure className='user-photo m-0'>
                    <img className='w-100 h-100' src={item.userPhoto} alt='foto' />
                </figure>
                <span className='cities-title fs-5'>{item.userName}</span>
            </div>

            <div className='col-12 d-flex text-start mt-2'>
                <p className='ms-2'>{item.comment}</p>
            </div>
        </div>
    )
}

export default Comment