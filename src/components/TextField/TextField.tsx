import React, { FC } from "react";
import { TextFieldProps } from "./types";
import './TextField.css'

/**
 * Текстовое поле ввода
 */
const TextField: FC<TextFieldProps> = ({
  label, 
  labelPosition = 'Top',
  caption = '',
  placeholder = '', 
  disabled = false, 
  status = 'default', 
  size = 'L', 
  onChange = () => {null},
  isDarkTheme = true,
}) => {
  const imputClassNames = `Imput
  ${isDarkTheme === true ? 'Imput_dark' : 'Imput_lingt' }
  ${status ? status : ''} 
  ${size}_input
  ${disabled ? 'disabled' : '' }`;

  return (
    <div>
      <label className= {`Label 
        ${size === 'L' && 'L_LabelTextField'}
        ${size === 'M' && 'M_LabelTextField'}
        ${size === 'S' && 'S_LabelTextField'}
        ${size === 'XS' && 'XS_LabelTextField'}
        ${size === 'XL' && 'XL_LabelTextField'}`}  
        htmlFor="username"
        >
        {label}
      </label>
      <input 
        className = {imputClassNames} 
        placeholder={placeholder} 
        disabled = {disabled} 
        id="username" 
        onChange={onChange}
      />
      <caption className={`Caption 
        ${size === 'L' && `L_Caption`}
        ${size === 'M' && `M_Caption`}
        ${size === 'S' && `S_Caption`}
        ${size === 'XS' && `XS_Caption`}
        ${size === 'XL' && `XL_Caption`}`}
      >
        {caption}
      </caption>
    </div> 
  )
}

export default TextField;
