import React from 'react'

import './style.scss'


export default function Arrow ({ direction, handleClick, start, end }) {
    
    const classDir = (direction === 'right') ? 'slider__arrow_right' : 'slider__arrow_left';
    const classDisable = (start || end) ? 'slider__arrow_disabled' : '';

    return (
        <div className={`slider__arrow ${classDir} ${classDisable}`} 
            onClick={handleClick}>
        </div>
    )
}