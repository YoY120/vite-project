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
}) => {
  const buttonClassNames = `Button 
  ${className} 
  ${size}_button
  ${view ? view : ''} 
  ${disabled ? 'disabled' : '' } 
  ${loading ? 'loading' : ''}`;

  return <button className={buttonClassNames} onClick={onClick}>{label}</button>
}

export default Button;
