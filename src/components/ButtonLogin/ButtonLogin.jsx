import './buttonLogin.css'

const ButtonLogin = ({href, title}) => {
    return (
        <a href={href} className='btn' id='buttonLogin'>{title}</a>
    )
}

export default ButtonLogin