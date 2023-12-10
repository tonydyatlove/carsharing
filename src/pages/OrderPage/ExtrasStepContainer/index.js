import React from 'react';
import { connect } from 'react-redux';

import ExtrasStep from '../ExtrasStep';
import { setRates } from '../../../store/data/actions';
import {
  setColor,
  setReservationFrom,
  setReservationTo,
  setRate,
  setIsFullTank,
  setHasBabySeat,
  setIsRightHand,
} from '../../../store/order/actions';

function ExtrasStepContainer(props) {
  const {
    carData,
    ratesData,
    setRates,

    color,
    reservationFrom,
    reservationTo,
    rate,
    isFullTank,
    hasBabySeat,
    isRightHand,

    setColor,
    setReservationFrom,
    setReservationTo,
    setRate,
    setIsFullTank,
    setHasBabySeat,
    setIsRightHand,
  } = props;

  return (
    <ExtrasStep
      carData={carData}
      ratesData={ratesData}
      setRates={setRates}
      setColor={setColor}
      setReservationFrom={setReservationFrom}
      setReservationTo={setReservationTo}
      setRate={setRate}
      setIsFullTank={setIsFullTank}
      setHasBabySeat={setHasBabySeat}
      setIsRightHand={setIsRightHand}
      color={color}
      reservationFrom={reservationFrom}
      reservationTo={reservationTo}
      rate={rate}
      isFullTank={isFullTank}
      hasBabySeat={hasBabySeat}
      isRightHand={isRightHand}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    carData: state.order.carData,
    ratesData: state.data.ratesData,
    color: state.order.extras.color,
    reservationFrom: state.order.extras.reservationTime.from,
    reservationTo: state.order.extras.reservationTime.to,
    rate: state.order.extras.rate,
    isFullTank: state.order.extras.service.isFullTank,
    hasBabySeat: state.order.extras.service.hasBabySeat,
    isRightHand: state.order.extras.service.isRightHand,
  };
};

const mapDispatchToProps = {
  setRates,
  setColor,
  setReservationFrom,
  setReservationTo,
  setRate,
  setIsFullTank,
  setHasBabySeat,
  setIsRightHand,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExtrasStepContainer);
