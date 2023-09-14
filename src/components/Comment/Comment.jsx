import { useEffect, useRef, useState } from 'react'
import './comment.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, updateComment } from '../../redux/actions/citiesAction';

const Comment = ({ item, newEdit = false, city, addFn = () => { }, closeFn = () => { } }) => {
    const editText = useRef(null);
    const [edit, setEdit] = useState(false);
    const { userId, notify } = useSelector(store => store.users);
    const dispatch = useDispatch();

    const editFn = () => {
        if (edit) {
            let aux = { ...item };

            aux.comment = editText.current.value;

            dispatch(updateComment({ newComment: aux, city: city })).then(res => {
                if (res.payload.success) {
                    notify.successComment('Update comment success.');
                    setEdit(false);
                } else {
                    notify.reject('Sorry, something went wrong.');
                };
            });
        } else {
            setEdit(true);
        }
    };

    const deleteCommentFn = () => {
        dispatch(deleteComment({ comment: item._id, city: city })).then(res => {
            if (res.payload.success) {
                notify.successComment('Deleted comment success.');
            } else {
                notify.reject('Sorry, something went wrong.');
            };
        });
    };

    useEffect(() => {
        if (newEdit) {
            setEdit(true);
        };
    }, []);

    return (
        <div className='itinerary-comment p-1 p-sm-3 mt-2'>
            <div className='col-12 d-flex justify-content-sm-start justify-content-center align-items-center gap-3 flex-wrap'>
                <figure className='user-photo m-0'>
                    <img className='w-100 h-100' src={item.userPhoto} alt='foto' />
                </figure>
                <span className='cities-title fs-5'>{item.userName}</span>
            </div>

            <div className='container-comment col-12 d-flex text-start mt-2 flex-column'>
                {edit ? <textarea type='parrafo' rows='2' cols='40' className='ms-2 mb-2 p-2 fs-5 login-input w-100' ref={editText} defaultValue={item.comment} /> :
                    <p className='ms-2 mb-2'>{item.comment}</p>
                }

                {userId == item.user ?
                    <div className='d-flex justify-content-end align-items-center gap-2 edit-buttons'>
                        {edit ? <></> : <button className='btn-submit p-1 m-0' onClick={deleteCommentFn}><i className='bi bi-trash3-fill'></i></button>}
                        {newEdit ?
                            <>
                                <button className='btn-submit p-1 m-0' onClick={closeFn}><i className='bi bi-x-lg'></i></button>
                                <button className={`btn-submit p-1 m-0 ${edit ? 'active-edit' : ''}`} onClick={() => addFn(editText.current.value, item)}><i className='bi bi-plus-lg'></i></button>
                            </>
                            :
                            <>
                                <button className={`btn-submit p-1 m-0 ${edit ? '' : 'd-none'}`} onClick={() => setEdit(false)}><i className='bi bi-x-lg'></i></button>
                                <button className={`btn-submit p-1 m-0 ${edit ? 'active-edit' : ''}`} onClick={editFn}><i className={edit ? 'bi bi-check-lg' : 'bi bi-pencil-square'}></i></button>
                            </>
                        }
                    </div>
                    :
                    <></>
                }

            </div>
        </div>
    )
}

export default Comment