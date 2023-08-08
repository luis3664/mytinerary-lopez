import './anchor.css'
import { Link as LinkReact } from 'react-router-dom'

const Anchor = ({href, title}) => {
    return (
        <LinkReact to={href} className='text-decoration-none'>{title}</LinkReact>
    )
}

export default Anchor