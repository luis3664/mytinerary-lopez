import './anchor.css'

const Anchor = ({href, title}) => {
    return (
        <a href={href} className='text-decoration-none'>{title}</a>
    )
}

export default Anchor