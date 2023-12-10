import React from 'react';

import Sidebar from '../../components/Sidebar';
import OrderPageContent from './OrderPageContent';

import './style.scss';


export default function OrderPage({ menuActive, setMenuActive }) {
    return ( 
    <div className="order-page">        
        <OrderPageContent />
        <Sidebar menuActive={menuActive} setMenuActive={setMenuActive} />
    </div>);
}