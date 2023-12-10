import React from 'react'

import Dot from '../Dot'

import './style.scss'


export default function Dots ({ activeIndex }) {
    return (
    <div className="slider__dots">
        <Dot key={0} active={activeIndex === 0} />
        <Dot key={1} active={activeIndex === 1} />
        <Dot key={2} active={activeIndex === 2} />
        <Dot key={3} active={activeIndex === 3} />
    </div>)
}
