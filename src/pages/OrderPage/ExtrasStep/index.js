import React, { useState, useEffect } from 'react';

import Radio from '../../../components/Radio';
import DateTimePicker from '../../../components/DateTimePicker';
import Checkbox from '../../../components/Checkbox';

import { SERVER, HEADERS, DB_GET_RATES } from '../../../components/App/api';

import './style.scss';

const plans = [
  { name: 'Поминутно', price: '7 ₽/мин' },
  { name: 'На сутки', price: '1999 ₽/сутки' },
];

export default function ExtrasStep(props) {
  const {
    carData,
    ratesData,
    setRates,

    setColor,
    setReservationFrom,
    setReservationTo,
    setRate,
    setIsFullTank,
    setHasBabySeat,
    setIsRightHand,

    color,
    reservationFrom,
    reservationTo,
    rate,
    isFullTank,
    hasBabySeat,
    isRightHand,
  } = props;

  const [error, setError] = useState('');

  useEffect(() => {
    let cleanupFunction = false;

    const getRates = async () => {
      const url = new URL(`${SERVER}${DB_GET_RATES}`);
      const headers = HEADERS;
      const response = await fetch(url, { headers });
      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
      } else {
        const ratesData = data.data;

        if (!cleanupFunction) {
          setRates(ratesData);
        }
      }
    };

    !ratesData.length && getRates();

    return () => (cleanupFunction = true);
  }, []);

  const onRateChange = (event) => {
    const id = event.target.value;
    const rate = ratesData.find((rateItem) => rateItem.id === id);
    setRate(rate);
  };

  if (!carData?.colors || !carData?.colors.length) {
    setColor('Любой');
  }

  return (
    <div className='order-process-content__step extras-step'>
      <div className='extras-step__group'>
        <p className='extras-step__group-label'>Цвет</p>

        <ul className='extras-step__color-list'>
          <li className='extras-step__color-item'>
            <Radio
              name='color'
              id='Любой'
              value='Любой'
              text='Любой'
              checked={color === 'Любой'}
              onChange={(event) => setColor(event.target.value)}
            />
          </li>
          {carData?.colors?.map((colorItem, index) => (
            <li key={index} className='extras-step__color-item'>
              <Radio
                name='color'
                id={colorItem}
                value={colorItem}
                text={colorItem[0].toUpperCase() + colorItem.substring(1)}
                checked={colorItem === color}
                onChange={(event) => setColor(event.target.value)}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className='extras-step__group'>
        <p className='extras-step__group-label'>Дата аренды</p>

        <div className='extras-step__date-time-list'>
          <div className='extras-step__date-time-item'>
            <label htmlFor='date-from' className='extras-step__date-time-label'>
              С
            </label>
            <DateTimePicker
              id='date-from'
              dateValue={reservationFrom}
              setDateFunction={setReservationFrom}
              minDateMessage='Дата не должна быть ранее текущей'
            />
          </div>

          <div className='extras-step__date-time-item'>
            <label htmlFor='date-to' className='extras-step__date-time-label'>
              По
            </label>
            <DateTimePicker
              id='date-to'
              disabled={reservationFrom === null}
              minDate={reservationFrom}
              minDateMessage='Дата не должна быть ранее аренды'
              dateValue={reservationTo}
              setDateFunction={setReservationTo}
            />
          </div>
        </div>
      </div>

      <div className='extras-step__group'>
        <p className='extras-step__group-label'>Тариф</p>

        <ul className='extras-step__rate-list'>
          {ratesData.map((rateItem, index) => (
            <li key={index} className='extras-step__list-item'>
              <Radio
                name='rate'
                id={rateItem.id}
                value={rateItem.id}
                text={`${rateItem.rateTypeId.name}, ${rateItem.price} ₽/${rateItem.rateTypeId.unit}`}
                checked={rateItem.id === rate?.id}
                onChange={onRateChange}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className='extras-step__group'>
        <p className='extras-step__group-label'>Доп. услуги</p>

        <ul className='extras-step__service-list'>
          <li className='extras-step__list-item'>
            <Checkbox
              name='isFullTank'
              id='isFullTank'
              value={isFullTank}
              text='Полный бак, 500 ₽'
              checked={isFullTank}
              onChange={(event) => setIsFullTank(event.target.checked)}
            />
          </li>
          <li className='extras-step__list-item'>
            <Checkbox
              name='hasBabySeat'
              id='hasBabySeat'
              value={hasBabySeat}
              text='Детское кресло, 200 ₽'
              checked={hasBabySeat}
              onChange={(event) => setHasBabySeat(event.target.checked)}
            />
          </li>
          <li className='extras-step__list-item'>
            <Checkbox
              name='isRightHand'
              id='isRightHand'
              value={isRightHand}
              text='Правый руль, 1600 ₽'
              checked={isRightHand}
              onChange={(event) => setIsRightHand(event.target.checked)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
