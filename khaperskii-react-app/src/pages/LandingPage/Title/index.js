import React from 'react'

import './styles.scss'

export default function Title(props) {
    return (
        <div className='title-block'>
            <div className="title-block__title">{props.title}</div>
            <div className="title-block__line"> </div>
            <div className="title-block__subtitle">{props.subtitle}</div>
        </div>
    )
}