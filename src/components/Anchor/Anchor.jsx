import './anchor.css'

const Anchor = ({href, title}) => {
    return (
        <a href={href}>{title}</a>
    )
}

export default Anchor