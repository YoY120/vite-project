import React, { FC, useState } from "react";
import { CollapseProps } from "./type";
import classNames from "classnames";
import Text from "../Text/Text";
import './Collapse.css';

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
          size && `collapseSize_${size}`, 
          form && `collapseForm_${form}`, 
          view && `collapseView_${view}`, 
          divider && 'collapseDivider', 
          horizontalSpace && `collapseHorisontalSpace_${horizontalSpace}`,
          className,
          )}
          onClick={onClick}>
        {label}
      </button>
      {isOpen && children}
    </div>
  )
}

export default Collapse;