import React from 'react';
import { connect } from 'react-redux';

import TotalStep from '../TotalStep';
import { setOrderStatuses } from '../../../store/data/actions';

function TotalStepContainer(props) {
  const { carData, reservationFrom, orderStatuses, setOrderStatuses } = props;

  return (
    <TotalStep
      carData={carData}
      reservationFrom={reservationFrom}
      orderStatuses={orderStatuses}
      setOrderStatuses={setOrderStatuses}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    orderStatuses: state.data.orderStatusesData,
    carData: state.order.carData,
    reservationFrom: state.order.extras.reservationTime.from,
  };
};

const mapDispatchToProps = { setOrderStatuses };

export default connect(mapStateToProps, mapDispatchToProps)(TotalStepContainer);
