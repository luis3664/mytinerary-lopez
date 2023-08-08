import './buttonLogin.css'

const ButtonLogin = ({href, title}) => {
    return (
        <a href={href} className='btn' id='buttonLogin'>
            <i className="bi bi-person-fill me-2"></i>
            {title}
        </a>
    )
}

export default ButtonLogin