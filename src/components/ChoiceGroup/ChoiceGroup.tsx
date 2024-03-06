import React, { FC } from "react"
import { ChoiceGroupProps } from "./types"
import './ChoiceGroup.css'
import classNames from "classnames"

/* TODO: Нужно переименовать Choise => Choice */

// TODO: не хватает комментария для компонента
/**
 * Группа кнопок. Можно выбрать один или несколько вариантов.
 */
const ChoiceGroup: FC<ChoiceGroupProps> = ({
  form = 'brich',
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

/**
 * Функция смены формы
 */
  const getFormByItem = (index: number) => {
    switch (form) {
      case 'brich': return 'brich_FormChoiceGroup';
      case 'round': return 'round_FromChoiceGroup';
      case 'default': return 'default_FormChoiceGroup';
    }
  }

  return (
    <div className={classNames('ChoiceGroup',
      form && `${form}_formChoiceGroup`,
      view && `${view}_viewChoiceGroup`,
      disabled && 'disabled_ChoiceGroup'
    )}>
      {list.map((item, index) => (
        <div
          className={classNames("item",
            selectedItem === item && 'selectedItem_ChoiceGroup',
            size && `${size}_sizeChoiceGroup`,
            view && `${view}_viewChoiceGroup`,
            getFormByItem(index),
            disabledItem || disabled && 'disabledItem_ChoiceGroup',
          )}
          onClick={handleClick(item)}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default ChoiceGroup;
