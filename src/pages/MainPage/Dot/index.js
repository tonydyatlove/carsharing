import React from 'react'

import './style.scss'


export default function Dot ({ active }) {
    return <span className={active ? "slider__dot slider__dot_active" : "slider__dot"}></span>
}