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
  disabledItem = false,
}) => {
  /**
   * Обработчик нажатия кнопки
   */
  const handleClick = (key: string) => () => {
    onClick(key)
  }

  return (
    <div className={classNames('ChoiseGroup', 
    /**
     *  Форма (общие)
     */
    form === 'round' && 'round_ChoiseGroup',
    form === 'default' || form === 'brick' ? 'default_ChoseGroup' : '', 
    /**
     * Вид элементов
     */
    view && `${view}_viewChoiseGroup`,
    /**
     * Неактивные кнопки
     */
    disabled && 'disabled_ChoiseGroup'
    )}>
      {list.map((item, index) => (
        <div 
          className={classNames("item", 
          /**
           * Выбранная кнопка
           */
          selectedItem === item && 'selectedItem_ChoiseGroup', 
          /**
           * Размер кнопки
           */
          size && `${size}_sizeChoiseGroup`, 
          /**
           * Вид
           */
          view && `${view}_viewChoiseGroup`,
          /**
           * Формы, с учетом первого и последнего элемнта
           */
          form === 'brick' ? index === 0 ? 'brickOne' : index !== list.length-1 ? 'brichOther' : 'brickEnd' : '',
          form === 'round' && 'roundStyle',
          form === 'default' ? index === 0 ? 'defaultOne' : index !== list.length-1 ? 'defaultOther' : 'defaultEnd' : '',
          /**
           * Неактивный элемент
           */
          disabledItem || disabled && 'disabledItem_ChoiseGroup',
          )}
          /**
           * Обработчик нажатия 
           */
          onClick={handleClick(item)}
        >
          {/**
          * Имя элемента
          */}
          {item}
        </div>
      ))}
    </div>
  )
}

export default ChoiseGroup;
