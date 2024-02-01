import React, { FC } from "react";
import './Chips.css';
import { ChipsProps } from "./types";

/**
 * Типизация Checkbox кнопки
 */
const Chips: FC<ChipsProps> = ({
  item = {label: 'label', active: true},
  // interactive = true,
  activeView = 'primary',
  size_Chips = 'L_Chips',
  onClick = () => null,
}) => {
  const ChipsClassName = `Chips 
    ${activeView ? activeView : ''} 
    ${size_Chips ? size_Chips : ''}
    ${item.active ? item.active : ''}`;

  return (
    <div>
      <button
        className = {ChipsClassName}
        onClick = {onClick}>
          {item.label}
      </button>
    </div>
  )
}

export default Chips;