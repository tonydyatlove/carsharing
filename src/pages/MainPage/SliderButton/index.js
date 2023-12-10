import React from 'react'

import './style.scss'


export default function SliderButton ({index}) {
    return <button className={`slider__button slider__button_${index}`}>Подробнее</button>
}