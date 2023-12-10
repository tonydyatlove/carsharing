import React from 'react';

import './style.scss';

export default function Checkbox({ ...props }) {
  return (
    <>
      <input className='checkbox' type='checkbox' {...props} />
      <label className='checkbox-label' htmlFor={props.id}>
        {props.text}
      </label>
    </>
  );
}
