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
  /**
   * Рамка
   */
  const SwitchClassName = `toggleSwitch 
  ${checked === false 
    ? `toggleSwitch_befo ${view}_SwichToggleBefo ${size}_SwichToggle`
    : `toggleSwitch_after ${view}_SwichToggleAfter ${size}_SwichToggle`}`;
  /**
   * Переключатель
   */
  const CheckboxInput = `checkboxInput 
  ${checked === false 
    ? `checkboxInput_befo ${view}_SwichBoxBefo ${size}_SwichBox ${size}_SwichBoxBefo` 
    : `checkboxInput_after ${view}_SwichBoxAfter ${size}_SwichBox ${size}_SwichBoxAfter`}`;

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
      <div className = {`${view ? `${view}_Swich` : ''} 
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
