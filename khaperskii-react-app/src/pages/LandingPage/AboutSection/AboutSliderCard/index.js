import React from 'react'

 import './styles.scss'

 export default function AboutSliderCard(props) {
    return (
        <div className='aboutslidercard'> 
            <div className='aboutslidercard__img'>
                 {props.image}
            </div>

            <div className='aboutslidercard__name'> 
                {props.name}
            </div>

            <div className='aboutslidercard__position'> 
                {props.position}
            </div>
        </div>
    )
 }