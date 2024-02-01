import React, { FC } from "react";
import './Checkbox.css';
import { CheckboxProps } from "./types";

/**
 * Типизация Checkbox кнопки
 */
const Checkbox: FC<CheckboxProps> = ({
  label,
  view = 'primary',
  checked = false,
  disabled = false,
  size = '',
  onChange = () => null,
}) => {
  const CheckboxClassName = `Checkbox 
  ${view ? view : ''} 
  ${size}_Chackbox`;

  return (
    <div>
      <label className = "labelCheckbox">
        <input 
          className = {CheckboxClassName} 
          checked = {checked} 
          disabled = {disabled} 
          onChange = {onChange}
          type = "Checkbox"
        />
        <span 
          className = {`${view ? view : ''} 
          ${size === 'L' ? 'L_Font' : ''} 
          ${size === 'M' ? 'M_Font' : ''} 
          ${size === 'S' ? 'S_Font' : ''} 
          ${size === 'XS' ? 'XS_Font' : ''}`}>
            {label}
        </span>
      </label>
    </div>
  )
}

export default Checkbox;