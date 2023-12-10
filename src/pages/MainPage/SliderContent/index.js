import React from 'react'

import Slide from '../Slide'

import jpg1 from "../../../assets/jpg-slider-1.jpg"
import jpg2 from "../../../assets/jpg-slider-2.jpg"
import jpg3 from "../../../assets/jpg-slider-3.jpg"
import jpg4 from "../../../assets/jpg-slider-4.jpg"


const sliderInfo = [
    {
        title: "Бесплатная парковка",
        desc: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах",
        background: jpg1
    },
    {
        title: "Страховка",
        desc: "Полная страховка автомобиля",
        background: jpg2
    },
    {
        title: "Бензин",
        desc: "Полный бак на любой заправке города за наш счёт",
        background: jpg3
    },
    {
        title: "Обслуживание",
        desc: "Автомобиль проходит еженедельное ТО",
        background: jpg4
    }
]

export default function SliderContent ({translate, transition, width}) {
    const style = {
        display: "flex",

        transform: `translateX(-${translate}px)`,
        transition: `transform ease-out ${transition}s`,

        height: "100%",
        width:` ${width}px`
    }

    return(
        <div className="slider__content" style={style}>
            {sliderInfo.map((info, i) => (
                <Slide key = {i}
                       title={info.title}
                       desc={info.desc}
                       index={i + 1}
                       background={info.background} 
                />
            ))}
        </div>
    )
}
