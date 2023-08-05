import React from 'react'

const IconSocial = ({href, classBootstrap}) => {
    return (
        <a href={href} target='_blank'>
            <i class={classBootstrap}></i>
        </a>
    )
}

export default IconSocial