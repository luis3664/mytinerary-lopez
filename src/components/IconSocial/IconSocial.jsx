import React from 'react'

const IconSocial = ({href, classBootstrap}) => {
    return (
        <a href={href} target='_blank'>
            <i className={classBootstrap}></i>
        </a>
    )
}

export default IconSocial