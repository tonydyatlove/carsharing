import React, { useState } from 'react'

import Navigation from '../Navigation'
import OrderProcessContent from '../OrderProcessContent'

import './style.scss'


export default function OrderProcess() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="order-process">
        
            <Navigation activeStep={activeStep} setActiveStep={setActiveStep} />

            <div className="order-process__content">
                <OrderProcessContent activeStep={activeStep} setActiveStep={setActiveStep} />
            </div>

        </div>
    )
}
