import React from 'react';

import Header from '../../../components/Header';
import OrderProcess from '../OrderProcess';

import './style.scss';

export default function OrderPageContent() {
  return (
    <div className='content'>
      <div className='content__header-wrapper'>
        <Header />
      </div>

      <div className='content__process-wrapper'>
        <OrderProcess />
      </div>
    </div>
  );
}
