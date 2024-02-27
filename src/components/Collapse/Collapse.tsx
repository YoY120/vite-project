import React, { FC, useState } from "react";
import { CollapseProps } from "./type";
import classNames from "classnames";
import Text from "../Text/Text";

const Collapse: FC<CollapseProps> = ({
  label = '',
  size = 'M',
  form = 'brick',
  view = 'primary',
  divider = false,
  horizontalSpace = 'S',
  children = '',
  isOpen = false,
  className = '',
  onClick = () => (null),
}) => {
  return (
    <div>
      <button 
        className = {classNames(
          'Collapse',
          size && `${size}_Collapse`, 
          form && `${form}`, 
          view && `${view}`, 
          divider && 'divider', 
          horizontalSpace && `${horizontalSpace}_HorizontalSpace`,
          className,
          )}
          onClick={onClick}>
        {label}
      </button>
      {/* {isOpen && <Text label={String({children})}/>} */}
      {isOpen && <div>{children}</div>}
    </div>
  )
}

export default Collapse;