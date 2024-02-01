import React, { FC } from "react";
import { TextFieldProps } from "./types";
import './TextField.css'

/**
 * Текстовое поле ввода
 */
const TextField: FC<TextFieldProps> = ({
  label = '', 
  labelPosition = 'Top',
  caption = '',
  placeholder = '', 
  disabled = false, 
  status = 'default', 
  size = 'L', 
  onChange = () => {null}
}) => {
  const imputClassNames = `Imput 
  ${status ? status : ''} 
  ${size}_input 
  ${disabled ? 'disabled' : '' }`;

  return (
    <div>
      <label className= {`Label 
        ${size ? size : ''}`}  
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
      <caption className={`Caption ${size ? size : ''}`}>
        {caption}
      </caption>
    </div> 
  )
}

export default TextField;
