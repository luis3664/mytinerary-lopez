import { Link as LinkReact } from 'react-router-dom'

const IconSocial = ({href, classBootstrap}) => {
    return (
        <LinkReact to={href} target='_blank'>
            <i className={classBootstrap}></i>
        </LinkReact>
        // <a href={href} target='_blank'>
        //     <i className={classBootstrap}></i>
        // </a>
    )
}

export default IconSocial