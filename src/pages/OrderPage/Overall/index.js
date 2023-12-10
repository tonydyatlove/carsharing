import React, { useState } from 'react';
import { connect } from 'react-redux';

import OrderButton from '../../../components/OrderButton';
import Confirm from '../Confirm';
import { durationToString } from '../../../utils/durationToString';
import { calculatePrice } from '../../../utils/calculatePrice';

import './style.scss';

function Overall(props) {
  const { activeStep, setActiveStep } = props;
  const [showOrderConfirm, setShowOrderConfirm] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const {
    cityData,
    pointData,
    carData,
    color,
    reservationFrom,
    reservationTo,
    rate,
    isFullTank,
    hasBabySeat,
    isRightHand,
  } = props;

  let onClick = undefined;
  let orderButtonText = '';
  let disabled = false;

  const handleConfirm = () => {
    setIsConfirmed(true);
    setShowOrderConfirm(false);
  };

  switch (activeStep) {
    case 0:
      orderButtonText = 'Выбрать модель';
      disabled = !(cityData && pointData);
      break;
    case 1:
      orderButtonText = 'Дополнительно';
      disabled = !carData;
      break;
    case 2:
      orderButtonText = 'Итого';
      disabled = !(color && reservationFrom && reservationTo && rate);
      break;
    case 3:
      orderButtonText = isConfirmed ? 'Отменить' : 'Заказать';
      onClick = () => {
        setShowOrderConfirm(true);
      };
      break;
    default:
  }

  return (
    <>
      <div className='overall'>
        <p className='overall__title'>Ваш заказ:</p>

        <ul className='overall__list'>
          {cityData && pointData ? (
            <>
              <div className='overall__right overall__city-name'>{`${cityData?.name}, `}</div>
              <li className='overall__item'>
                <span className='overall__media-hidden'>Пункт выдачи</span>
                <span className='overall__right'>{`${pointData.address}`}</span>
              </li>
            </>
          ) : (
            <></>
          )}
          {carData ? (
            <li className='overall__item'>
              <span className='overall__media-hidden'>Модель</span>
              <span className='overall__right'>{`${carData.name}`}</span>
            </li>
          ) : (
            <></>
          )}
          {color ? (
            <li className='overall__item'>
              <span className='overall__media-hidden'>Цвет</span>
              <span className='overall__media-lowercase overall__color overall__right'>{` ${
                color[0].toUpperCase() + color.substring(1)
              }`}</span>
            </li>
          ) : (
            <></>
          )}
          {reservationFrom && reservationTo ? (
            <li className='overall__item'>
              <span className='overall__media-hidden'>Длительность аренды</span>
              <span className='overall__right'>
                {durationToString(reservationFrom, reservationTo)}
              </span>
            </li>
          ) : (
            <></>
          )}
          {rate ? (
            <li className='overall__item'>
              <span className='overall__media-hidden'>Тариф</span>
              <span className='overall__media-lowercase overall__right'>{`${rate.rateTypeId.name}`}</span>
            </li>
          ) : (
            <></>
          )}
          {isFullTank ? (
            <li className='overall__item'>
              <span className='overall__media-lowercase'>Полный бак</span>
              <span className='overall__media-hidden overall__right'>{`Да`}</span>
            </li>
          ) : (
            <></>
          )}
          {hasBabySeat ? (
            <li className='overall__item'>
              <span className='overall__media-lowercase'>Детское кресло</span>
              <span className='overall__media-hidden overall__right'>{`Да`}</span>
            </li>
          ) : (
            <></>
          )}
          {isRightHand ? (
            <li className='overall__item'>
              <span className='overall__media-lowercase'>Правый руль</span>
              <span className='overall__media-hidden'>{`Да`}</span>
            </li>
          ) : (
            <></>
          )}
        </ul>

        <p className='overall__price'>
          <span className='overall__price-title'>Цена:</span>{' '}
          <span className='overall__price-number'>
            {carData
              ? reservationFrom && reservationTo && rate
                ? `${calculatePrice(
                    reservationFrom,
                    reservationTo,
                    rate,
                    isFullTank,
                    hasBabySeat,
                    isRightHand
                  )} ₽`
                : `от ${carData.priceMin} до ${carData.priceMax} ₽`
              : '—'}
          </span>
        </p>

        <div className='overall__button'>
          <OrderButton
            text={orderButtonText}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            disabled={disabled}
            isConfirmed={isConfirmed}
            onClick={onClick}
          />
        </div>
      </div>
      {showOrderConfirm && (
        <Confirm
          onConfirmClick={handleConfirm}
          onDenyClick={() => setShowOrderConfirm(false)}
        />
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cityData: state.order.cityData,
    pointData: state.order.pointData,
    carData: state.order.carData,
    color: state.order.extras.color,
    reservationFrom: state.order.extras.reservationTime.from,
    reservationTo: state.order.extras.reservationTime.to,
    rate: state.order.extras.rate,
    isFullTank: state.order.extras.service.isFullTank,
    hasBabySeat: state.order.extras.service.hasBabySeat,
    isRightHand: state.order.extras.service.isRightHand,
  };
};

export default connect(mapStateToProps)(Overall);
