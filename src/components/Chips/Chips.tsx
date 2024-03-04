import React, { FC } from "react";
import './Chips.css';
import { ChipsProps } from "./types"; 
import classNames from "classnames";

/**
 * Типы кнопок
 */
const Chips: FC<ChipsProps> = ({
  status = 'normal',
  label = '',
  isActive = true,
  size = 'M',
  onClick = () => (null), 
}) => {

  return (
    <div>
      <button
        className = {classNames('Chips', isActive && 'isActive' , size && `size_${size}`, status && `status_${status}`)}
        onClick = {onClick}>
          {label}
      </button>
    </div>
  )
}

export default Chips;