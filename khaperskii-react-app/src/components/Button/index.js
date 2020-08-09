import React from 'react'

import './styles.scss'

export default function Button(props) {
    return (
    <button className="button">{props.name}</button>
    )
}