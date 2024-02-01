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
  const SwitchClassName = ` ${view ? view : ''} 
  ${size}_Switch`;


  return (
    // <div>
    //   <label className = "labelSwitch">
    //     <input 
    //       className = {SwitchClassName} 
    //       checked = {checked} 
    //       disabled = {disabled} 
    //       onChange = {onChange}
    //       type = "checkbox"
    //     />
    //     <span 
    //       className = {`${view ? view : ''} 
    //       ${size === 'L' ? 'L_Switch_Font' : ''} 
    //       ${size === 'M' ? 'M_Switch_Font' : ''} 
    //       ${size === 'S' ? 'S_Switch_Font' : ''} 
    //       ${size === 'XS' ? 'XS_Switch_Font' : ''}`}>
    //         {label}
    //     </span>
    //   </label> 
    // </div>
    <div className="switchContainer">
      <div className="toggle-switch">
        <input type="checkbox" id="checkboxInput" disabled = {disabled} checked = {checked} onChange = {onChange}/>
          <label htmlFor="checkboxInput" className="toggleSwitch"></label>
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