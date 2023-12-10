import React from 'react'
import LangButton from '../LangButton'

import { ReactComponent as TelegramIcon } from '../../assets/vector/icon-telegram.svg'
import { ReactComponent as FacebookIcon } from '../../assets/vector/icon-facebook.svg'
import { ReactComponent as InstagramIcon } from '../../assets/vector/icon-instagram.svg'

import "./style.scss"


export default function Menu({isActive}) {
    return (
    <nav className={isActive ? "dropdown dropdown_active" : "dropdown"}>
        <div className="dropdown__sidebar">
            <div className="dropdown__lang-button">
                <LangButton />
            </div>
        </div>

        <div className="dropdown__opaque">
            <div className="dropdown__content">
                <ul className="dropdown__links">
                    <li><a className="main-page__link dropdown__link dropdown__link_white" href="/#">Парковка</a></li>
                    <li><a className="main-page__link dropdown__link dropdown__link_white" href="/#">Страховка</a></li>
                    <li><a className="main-page__link dropdown__link dropdown__link_white" href="/#">Бензин</a></li>
                    <li><a className="main-page__link dropdown__link dropdown__link_white" href="/#">Обслуживание</a></li>
                </ul>                

                <ul className="dropdown__social">
                    <li><a href="/#">
                        <TelegramIcon />
                    </a></li>

                    <li><a href="/#">
                        <FacebookIcon />
                    </a></li>

                    <li><a href="/#">
                        <InstagramIcon />
                    </a></li>                                    
                </ul>
            </div>            
        </div>

        <div className="dropdown__transparent"></div>
    </nav>);
}
