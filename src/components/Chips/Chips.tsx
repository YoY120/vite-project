import React, { FC } from "react";
import './Chips.css';
import { ChipsProps } from "./types"; 
import classNames from "classnames";

/**
 * Типы кнопок
 */
const Chips: FC<ChipsProps> = ({
  Chipslist = [],
  status = 'normal',
  isActive = true,
  size = 'M',
  onClick = () => (null),
}) => {

  return (
    <div className="Chips">
      {Chipslist.map((item) => (
        <button
          className = {classNames('Chips', 
            isActive && 'isActiveChips' , 
            size && `sizeChips_${size}`, 
            status && `statusChips_${status}`)}
          onClick = {() => onClick(item)}
        >
          {item}
        </button>))}
    </div>
  )
}

export default Chips;
