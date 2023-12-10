import React from 'react';

import LocationStepContainer from '../LocationStepContainer';
import ModelStepContainer from '../ModelStepContainer';
import ExtrasStepContainer from '../ExtrasStepContainer';
import TotalStepContainer from '../TotalStepContainer';
import Overall from '../Overall';

import './style.scss';

const renderStep = (activeStep) => {
  switch (activeStep) {
    case 0:
      return <LocationStepContainer />;
    case 1:
      return <ModelStepContainer />;
    case 2:
      return <ExtrasStepContainer />;
    case 3:
      return <TotalStepContainer />;
    default:
  }
};

export default function OrderProcessContent({ activeStep, setActiveStep }) {
  return (
    <div className='order-process-content'>
      {renderStep(activeStep)}

      <div className='order-process-content__overall'>
        <Overall activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>
    </div>
  );
}
