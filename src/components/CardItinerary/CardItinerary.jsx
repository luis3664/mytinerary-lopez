import './cardItinerary.css'
import { useEffect, useState } from 'react'
import Comment from '../Comment/Comment'
import CardCarousel from '../CardCarousel/CardCarousel'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, likeItinerary } from '../../redux/actions/citiesAction'

const CardItinerary = ({ itinerary }) => {
    let iconCash = [false, false, false, false, false];
    const { userId, firstName, lastName, photo, notify } = useSelector(store => store.users)
    const [display, setDisplay] = useState(false);
    const [likeHeart, setLikeHeart] = useState(false);
    const [addEditComment, setAddEditComment] = useState(false);
    const newComment = { _id: userId, userName: firstName + ' ' + lastName, userPhoto: photo, comment: '', itinerary: itinerary._id, user: userId, city: itinerary.city };
    const dispatch = useDispatch();

    for (let i = 0; i < itinerary.price; i++) {
        iconCash[i] = true;
    };

    const viewMore = () => {
        if (display) {
            setDisplay(false);
        } else {
            setDisplay(true);
        }
    };

    const insertComment = () => {
        if (addEditComment) {
            setAddEditComment(false);
        } else {
            setAddEditComment(true);
        }
    };

    const handlerLikeHeart = () => {
        let ref = itinerary.likes.includes(userId)

        if (ref) {
            setLikeHeart(false);
        } else {
            setLikeHeart(true);
        }
    };

    const likesFn = () => {
        dispatch(likeItinerary(itinerary._id)).then((res) => {
            if (!res.error) {
                handlerLikeHeart();
            };
        });
    };

    const commentFn = (value, item) => {
        if (value.trim() == '') {
            notify.reject('The new comment cannot be empty.')
        } else {
            let aux = { ...item };

            aux.comment = value.trim();

            dispatch(addComment(aux)).then(data => {
                if (data.payload.success) {
                    notify.successComment('New Comment posted.');
                    setAddEditComment(false);
                } else {
                    notify.reject('Sorry, something went wrong.');
                };
            });
        };
    };

    useEffect(() => {
        let ref = itinerary.likes.includes(userId);

        if (ref) {
            setLikeHeart(true);
        };
    }, []);

    return (
        <div className='card-itinerary d-flex justify-content-evenly align-items-center flex-wrap p-3'>
            <h2 className='cities-title text-center col-12 mb-4'>{itinerary.title}</h2>

            <div className='user-data d-flex justify-content-around align-items-center flex-wrap col-12 col-sm-4'>
                <figure className='itinerary-photo m-0 d-flex justify-content-center align-items-center col-12 text-center'>
                    <img src={itinerary.userPhoto} alt='userPhoto' />
                </figure>

                <span className='cities-title col-12 text-center fs-3'>
                    {itinerary.userName}
                </span>
            </div>

            <div className='itinerary-data d-flex justify-content-evenly align-items-center flex-wrap col-12 col-sm-8 gap-5'>
                <div className='d-flex flex-wrap gap-3 justify-content-center align-items-center col-12'>
                    <span className='cities-title col-12 text-center fs-4'>Hashtags:</span>
                    {itinerary.hashtags.map((tag, index) => <span key={index} className='itinerary-hastags fs-4'>#{tag}</span>)}
                </div>

                <div className='d-flex align-items-center justify-content-center gap-1'>
                    <span className='cities-title d-flex fs-4'>Time:</span>
                    <span className='itinerary-time d-flex fs-4 pt-1'>
                        {itinerary.duration}h
                    </span>
                </div>

                <div className='itinerary-price'>
                    <span className='cities-title fs-3 d-flex flex-wrap justify-content-center align-items-center gap-2'>
                        Price:
                        {iconCash.map((icon, index) => <i key={index} className={`bi bi-cash d-flex pt-1 ${icon ? 'green' : 'gray'}`}></i>)}
                    </span>
                </div>

                <div className='d-flex gap-2 like-number'>
                    {likeHeart ? <i className='bi bi-suit-heart-fill likes' onClick={likesFn}></i> :
                        <i className='bi bi-suit-heart likes' onClick={likesFn}></i>
                    }
                    <span className='fs-4'>{itinerary.likes.length}</span>
                </div>
            </div>

            <div className={`itinerary-activities gap-2 col-12 text-center mt-4 d-flex justify-content-evenly align-items-center flex-wrap ${display ? '' : 'd-none'}`}>
                <h2 className='cities-title fs-4 col-12'>Activities</h2>
                {itinerary.activities.map((activity) => <CardCarousel key={activity._id} name={activity.name} hrefImg={activity.img} href={'#'} />)}
            </div>

            <div className={`itineraries-comments col-12 text-center mt-4 d-flex align-items-center flex-column ${display ? '' : 'd-none'}`}>
                <h2 className='cities-title mt-3 fs-4 col-12'>Comments</h2>

                <div className='box-comments pb-3'>
                    {addEditComment ? <Comment item={newComment} city={itinerary.city} newEdit={true} addFn={commentFn} closeFn={insertComment} /> : <></>}

                    {itinerary.comments.toReversed().length > 0 ? itinerary.comments.toReversed().map((item) => <Comment key={item._id} item={item} city={itinerary.city} />)
                        : <h2 className='itinerary-time fs-4 col-12 mt-4'>No comments for now, be the first.</h2>}
                </div>
                {userId ? <button className='comments-button btn-submit p-1' onClick={insertComment}>New Comment</button> : <></>}
            </div>

            <div className='more-button w-100' onClick={viewMore}>
                <h2 className='text-center more-button cities-title d-flex justify-content-center align-items-center gap-3 fs-5 mt-3 mb-0' >
                    {display ? <i className='bi bi-chevron-compact-up cities-title text-center m-0'></i> :
                        <i className='bi bi-chevron-compact-down cities-title text-center m-0'></i>}

                    View {display ? 'Less' : 'More'}

                    {display ? <i className='bi bi-chevron-compact-up cities-title text-center m-0'></i> :
                        <i className='bi bi-chevron-compact-down cities-title text-center m-0'></i>}
                </h2>
            </div>
        </div>
    )
}

export default CardItinerary