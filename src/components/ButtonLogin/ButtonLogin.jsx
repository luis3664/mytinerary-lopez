import { Link as LinkRouter } from 'react-router-dom'
import './buttonLogin.css'

const ButtonLogin = ({href, title}) => {
    return (
        <LinkRouter to={href} className='btn' id='buttonLogin'>
            <i className="bi bi-person-fill me-2"></i>
            {title}
        </LinkRouter>
    )
}

export default ButtonLogin