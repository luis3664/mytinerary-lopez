import './buttonLogin.css'
import { useDispatch } from 'react-redux'
import { Link as LinkRouter } from 'react-router-dom'
import { logOut } from '../../redux/actions/usersAction'


const ButtonLogin = ({ href, title, login = false }) => {
    const dispatch = useDispatch()

    const dispatchFunc = () => {
        dispatch(logOut());
    }

    return (
        <LinkRouter to={href} className='btn' id='buttonLogin' onClick={login ? dispatchFunc : () => { }}>
            <i className="bi bi-person-fill me-2"></i>
            {title}
        </LinkRouter>
    )
}

export default ButtonLogin