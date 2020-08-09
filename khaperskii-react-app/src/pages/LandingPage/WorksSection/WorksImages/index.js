import React from 'react'

import './styles.scss'

import img1 from '..//..//..//..//assets/images/works/img1.png'
import img2 from '..//..//..//..//assets/images/works/img2.png'
import img3 from '..//..//..//..//assets/images/works/img3.png'
import img4 from '..//..//..//..//assets/images/works/img4.png'
import img5 from '..//..//..//..//assets/images/works/img5.png'
import img6 from '..//..//..//..//assets/images/works/img6.png'
import img7 from '..//..//..//..//assets/images/works/img7.png'
import img8 from '..//..//..//..//assets/images/works/img8.png'
import img9 from '..//..//..//..//assets/images/works/img9.png'

export default function WorksImages() {
    return (
        <div className = 'worksimages'>
            <div className = 'worksimages__item'>
                <img src={img1} alt='img1'/>
            </div>

            <div className = 'worksimages__item'>
                <img src={img2} alt='img2'/>
            </div>

            <div className = 'worksimages__item'>
                <img src={img3} alt='img3'/>
            </div>

            <div className = 'worksimages__item'>
                <img src={img4} alt='img4'/>
            </div>
    
            <div className = 'worksimages__item'>
                <img src={img5} alt='img5'/> 
            </div>
    
            <div className = 'worksimages__item'>
                <img src={img6} alt='img6'/> 
            </div>

            <div className = 'worksimages__item'>
                <img src={img7} alt='img7'/>
            </div>
    
            <div className = 'worksimages__item'>
                <img src={img8} alt='img8'/>   
            </div>
    
            <div className = 'worksimages__item'>
                <img src={img9} alt='img9'/>
            </div>
           
        </div>
    )
}