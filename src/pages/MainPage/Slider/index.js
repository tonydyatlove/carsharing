import React, { useState } from 'react'
import { withSize } from 'react-sizeme'

import SliderContent from '../SliderContent'
import Arrow from '../Arrow'
import Dots from '../Dots'

import './style.scss'


const Slider = (props) => {
    const { width } = props.size;
    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.5,
        start: true,
        end: false
    });
    const { activeIndex, translate, transition, start, end } = state;

    const nextSlide = () => {
        if (activeIndex === 3) {
            return;
        }
        if (activeIndex === 2){
            setState({
                ...state,
                activeIndex: activeIndex + 1,
                translate: (activeIndex + 1) * width,
                end: true
            })
            return;
        }
        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * width,
            start: false
        })
    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            return;
        }
        if (activeIndex === 1) {
            setState({
                ...state,
                activeIndex: activeIndex - 1,
                translate: (activeIndex - 1) * width,
                start: true
            });
            return;
        }      
        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * width,
            end: false
        })
    }

    return (
    <div className="slider">    
        <SliderContent translate={translate}
                       transition={transition}
                       width={width * 4} />

        <Arrow direction='left' handleClick={prevSlide} start={start}/>
        <Arrow direction='right' handleClick={nextSlide} end={end}/>

        <Dots activeIndex={activeIndex} />       
    </div>
    )    
}

export default withSize()(Slider)
