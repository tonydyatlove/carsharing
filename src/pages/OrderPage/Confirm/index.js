import React from 'react';

import ConfirmButton from '../../../components/ConfirmButton';

import './style.scss';

export default function Confirm({ onConfirmClick, onDenyClick }) {
  return (
    <div className='confirm'>
      <div className='confirm__modal modal'>
        <div className='modal__title'>Подтвердить заказ</div>
        <div className='modal__buttons'>
          <ConfirmButton text='Подтвердить' onClick={onConfirmClick} />
          <ConfirmButton text='Вернуться' deny onClick={onDenyClick} />
        </div>
      </div>
    </div>
  );
}
