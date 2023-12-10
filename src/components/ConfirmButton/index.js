import React from 'react';

import './style.scss';

export default function ConfirmButton({ text, deny, onClick }) {
  return (
    <button
      className={
        deny
          ? 'confirm-button confirm-button_deny'
          : 'confirm-button confirm-button_confirm'
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
}
