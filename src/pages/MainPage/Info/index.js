import React from 'react';

import Header from '../../../components/Header';
import LinkButton from '../../../components/LinkButton';

import './style.scss';

export default function Info() {
  return (
    <div className='info'>
      <div className='wrapper'>
        <Header />

        <div className='info__main-info'>
          <h1>
            <span className='info__title info__title_black'>Каршеринг</span>
            <span className='info__title info__title_accent'>
              Need for drive
            </span>
          </h1>

          <p className='info__text'>Поминутная аренда авто твоего города</p>

          <div className='info__link-button'>
            <LinkButton
              className='info__link-button'
              linkTo='/order'
              text='Забронировать'
            />
          </div>
        </div>

        <div className='info__footer'>
          <a className='main-page__link info__phone' href='tel:+375444444444'>
            8 (444) 444-444-44
          </a>
          <span className='info__copyright'>© 2023 «Need for drive»</span>
        </div>
      </div>
    </div>
  );
}
