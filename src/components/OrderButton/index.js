import React from 'react';

import './style.scss';

export default function OrderButton({
  text,
  activeStep,
  setActiveStep,
  disabled,
  onClick,
  isConfirmed,
}) {
  return (
    <button
      className={
        disabled
          ? 'order-button order-button_disabled'
          : isConfirmed
          ? 'order-button order-button_confirmed'
          : 'order-button'
      }
      onClick={onClick || (() => setActiveStep(activeStep + 1))}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
