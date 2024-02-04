import React, { FC, useState } from "react";
import './Switch.css';
import { SwitchProps } from "./types";

/**
 * Типизация Checkbox кнопки
 */
const Switch: FC<SwitchProps> = ({
  label,
  view = 'primary',
  checked = false,
  disabled = false,
  size = 'L',
  onChange = () => null,
}) => {
  const SwitchClassName = `toggleSwitch ${checked === false ? 'toggleSwitch_befo' : 'toggleSwitch_after'}`;

  const CheckboxInput = `checkboxInput ${checked === false ? 'checkboxInput_befo' : 'checkboxInput_after'}`;

  return (
    <div className="switchContainer">
      <div className="toggle-switch">
        <label  className={SwitchClassName}>
          <input
            className= {CheckboxInput}
            disabled = {disabled} 
            checked = {checked}
            onChange = {onChange}
          />
        </label>
      </div>
      <div className = {`${view ? view : ''} 
        ${size === 'L' ? 'L_Switch_Font' : ''} 
        ${size === 'M' ? 'M_Switch_Font' : ''} 
        ${size === 'S' ? 'S_Switch_Font' : ''} 
        ${size === 'XS' ? 'XS_Switch_Font' : ''}`}>
          {label}
      </div>
    </div>
  )
}

export default Switch;