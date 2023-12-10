import React from 'react'

import SliderButton from '../SliderButton'

import './style.scss'


export default function Slide ({title, desc, index, background}) {
    const maxStyle = {
        height: "100%",
        width: "100%",
        padding: "0 96px",
        background: `url(${background}) center / cover no-repeat`    }

    const minStyle = {
        height: "100%",
        width: "100%",
        padding: "0 64px",
        background: `url(${background}) center / cover no-repeat`
    }

    const style = function() {
        if (window.innerWidth < 1440) {
            return minStyle;
        }
        else return maxStyle;
    }

    return (
        <div className="slide" style={style()}>
            <h2 className="slide__title">{title}</h2>
            <p className="slide__desc">{desc}</p>
            <SliderButton index={index}>Подробнее</SliderButton>
        </div>
    )
}
