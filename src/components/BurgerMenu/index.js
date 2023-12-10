import React from 'react'

import './style.scss'


export default function BurgerMenu({menuActive, setMenuActive}) {
    const onClickHandler = () => {
        setMenuActive(!menuActive);
    }

    return (
    <button className={menuActive ? "sidebar__burger sidebar__burger_active" : "sidebar__burger"} 
         onClick={onClickHandler}
    >
        <span></span>
    </button>)
}