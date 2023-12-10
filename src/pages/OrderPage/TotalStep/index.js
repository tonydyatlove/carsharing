import React, { useState, useEffect } from 'react';

import { normalizeImageLink } from '../../../utils/normalizeImageLink';

import {
  SERVER,
  HEADERS,
  DB_GET_ORDER_STATUSES,
} from '../../../components/App/api';

import './style.scss';

export default function TotalStep(props) {
  const { carData, reservationFrom, orderStatuses, setOrderStatuses } = props;
  const [error, setError] = useState('');

  useEffect(() => {
    let cleanupFunction = false;

    const getOrderStatuses = async () => {
      const url = new URL(`${SERVER}${DB_GET_ORDER_STATUSES}`);
      const headers = HEADERS;
      const response = await fetch(url, { headers });
      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
      } else {
        const orderStatusesData = data.data;

        if (!cleanupFunction) {
          setOrderStatuses(orderStatusesData);
        }
      }
    };

    !orderStatuses.length && getOrderStatuses();

    return () => (cleanupFunction = true);
  }, []);

  return (
    <div className='order-process-content__step total-step'>
      <div className='total-step__car-section'>
        <div className='total-step__car-text'>
          <div className='total-step__text-item'>
            <span className='total-step__model'>{carData.name}</span>
          </div>
          <div className='total-step__text-item'>
            <span className='total-step__number'>
              {carData.number.toUpperCase()}
            </span>
          </div>
          <div className='total-step__tank total-step__text-item'>
            <span className='total-step__field'>Топливо </span>
            {carData.tank}
          </div>
          <div className='total-step__available total-step__text-item'>
            <span className='total-step__field'>Доступна с </span>
            {reservationFrom.toLocaleString('ru', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>

        <div className='total-step__car-image'>
          <img src={`${normalizeImageLink(carData.thumbnail.path)}`} alt='' />
        </div>
      </div>
    </div>
  );
}
