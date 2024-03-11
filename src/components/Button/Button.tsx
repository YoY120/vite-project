import React, {FC} from 'react';
import './Button.css';
import { ButtonProps } from './types';

/**
 * Компонент кнопка
 */
const Button: FC<ButtonProps> = ({
  label,
  className = '',
  disabled = false, 
  loading = false,
  view = 'Primary',
  size = 'L',
  onClick = () => {null},
  isDarkTheme = true,
}) => {
  const buttonClassNames = `Button 
    ${className} 
    ${size}_button
    ${isDarkTheme ? `${view}_Dark` : `${view}_light`} 
    ${disabled ? 'disabledButton' : '' } 
    ${loading ? 'loadingButton' : ''}`;

  return <button className={buttonClassNames} onClick={onClick}>{label}</button>
}

export default Button;
