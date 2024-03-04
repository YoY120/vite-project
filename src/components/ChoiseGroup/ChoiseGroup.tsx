import React, { FC } from "react"
import { ChoiseGroupProps } from "./types"
import './ChoiseGroup.css'
import classNames from "classnames"

const ChoiseGroup: FC<ChoiseGroupProps> = ({
  form = 'brick',
  list,
  onClick,
  selectedItem,
  size,
  view,
  disabled = false,
}) => {
  const handleClick = (key: string) => () => {
    onClick(key)
  }

  return (
    <div className={classNames('ChoiseGroup', 
    form === 'round' ? 'round' : '',
    form === 'default' || form === 'brick'  ? 'default_ChoseGroup' : '', 
    view && `${view}_viewChoiseGroup`,
    disabled && 'disabled'
    )}>
      {list.map((item, index) => (
        <div 
          className={classNames("item", 
          selectedItem === item ? 'selectedItem' : '', 
          size && `${size}_sizeChoiseGroup`, 
          view && `${view}_viewChoiseGroup`,
          form === 'brick' ? index === 0 ? 'brickOne' : index !== list.length-1 ? 'brichOther' : 'brickEnd' : '',
          form === 'round' ? 'roundStyle': '',
          form === 'default' ? index === 0 ? 'defaultOne' : index !== list.length-1 ? 'defaultOther' : 'defaultEnd' : '',
          disabled && 'disabled',
          )}
          onClick={handleClick(item)}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default ChoiseGroup;
