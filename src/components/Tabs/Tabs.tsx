import React, { FC } from "react";
import { TabsProps } from "./type";
import './Tabs.css';
import classNames from "classnames";

const Tabs: FC<TabsProps> = ({
  label = '',
  size = 'M',
  view = 'clear',
  linePosition = 'top',
  className = '',
  disabled = true,
  onChange = () => (null),
  onClick = () => (null),
}) => {
  return (
    <div>
      <button 
        className={classNames(
          'Tabs',
          size && `${size}_TabsSize`,
          view && `${view}_TabsView`,
          linePosition && `${linePosition}_TabsLinePosition`,
          disabled && 'disabled_Tabs',
          className,
        )}
        disabled={disabled}
        onChange={onChange}
        onClick={onClick}>
        {label}
      </button>
    </div>
  )
}

export default Tabs;
