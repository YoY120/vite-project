import React, { FC } from "react"
import { ChoiseGroupProps } from "./types"
import './ChoiseGroup.css'
import classNames from "classnames"

const ChoiseGroup: FC<ChoiseGroupProps> = ({
  form,
  list,
  onClick,
  selectedItem,
  size,
  view
}) => {
  const handleClick = (key: string) => () => {
    onClick(key)
  }

  return (
    <div className="ChoiseGroup">
      {list.map((item) => (
        <div 
          className={classNames("item", selectedItem === item ? 'selectedItem' : '')}
          onClick={handleClick(item)}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default ChoiseGroup;
