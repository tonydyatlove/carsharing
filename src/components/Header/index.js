import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'


export default function Header() {
    return (
        <div className="header">
            <Link className="header__title" to="/">Need for drive</Link>
            <span className="header__city">Минск</span>
        </div>
    )
}
