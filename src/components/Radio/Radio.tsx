import React, { FC, useState } from "react";
import './Radio.css';
import { RadioProps } from "./types";

/**
 * Типизация Radio кнопки
 */
const Radio: FC<RadioProps> = ({
  label,
  view = 'primary',
  checked = false,
  disabled = false,
  size = '',
  onChange = () => null,
}) => {
  const radioClassName = `Radio 
  ${view ? `${view}_Radio` : ''} 
  ${size}_Radio`;

  return (
    <div>
      <label className="labelRadio">
        <input 
          className={radioClassName} 
          checked={checked} 
          disabled={disabled} 
          onChange={onChange}
          type="radio"
        />
        <span className={`
          ${view ? `${view}_Radio` : ''} 
          ${size === 'L' ? 'L_Font' : ''} 
          ${size === 'M' ? 'M_Font' : ''} 
          ${size === 'S' ? 'S_Font' : ''} 
          ${size === 'XS' ? 'XS_Font' : ''}`}
          >
          {label}
        </span>
      </label>
    </div>
  )
}

export default Radio;
