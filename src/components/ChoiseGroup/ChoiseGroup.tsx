import React, { FC } from "react"
import { ChoiseGroupProps } from "./types"
import './ChoiseGroup.css'
import classNames from "classnames"

/* TODO: Нужно переименовать Choise => Choice */

// TODO: не хватает комментария для компонента
/**
 * Группа кнопок. Можно выбрать один или несколько вариантов.
 */
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

  // TODO: кажется излишним такое количество комментариев в классах. Не нужно комментировать каждый шаг
  // Комментируются только
  // Типы, всё, что экспортируется. И можно покоментировать что-то не очевидное
  // тут я предложу немного поменять
  // return (
  //   <div className={classNames('ChoiseGroup',
  //   /**
  //    *  Форма (общие)
  //    */
  //   form === 'round' && 'round_ChoiseGroup',
  //   form === 'default' || form === 'brick' ? 'default_ChoseGroup' : '',
  //   /**
  //    * Вид элементов
  //    */
  //   view && `${view}_viewChoiseGroup`,
  //   /**
  //    * Неактивные кнопки
  //    */
  //   disabled && 'disabled_ChoiseGroup'
  //   )}>
  //     {list.map((item, index) => (
  //       <div
  //         className={classNames("item",
  //         /**
  //          * Выбранная кнопка
  //          */
  //         selectedItem === item && 'selectedItem_ChoiseGroup',
  //         /**
  //          * Размер кнопки
  //          */
  //         size && `${size}_sizeChoiseGroup`,
  //         /**
  //          * Вид
  //          */
  //         view && `${view}_viewChoiseGroup`,
  //         /**
  //          * Формы, с учетом первого и последнего элемнта
  //          */
  //         form === 'brick' ? index === 0 ? 'brickOne' : index !== list.length-1 ? 'brichOther' : 'brickEnd' : '',
  //         form === 'round' && 'roundStyle',
  //         form === 'default' ? index === 0 ? 'defaultOne' : index !== list.length-1 ? 'defaultOther' : 'defaultEnd' : '',
  //         /**
  //          * Неактивный элемент
  //          */
  //         disabledItem || disabled && 'disabledItem_ChoiseGroup',
  //         )}
  //         /**
  //          * Обработчик нажатия
  //          */
  //         onClick={handleClick(item)}
  //       >
  //         {/**
  //         * Имя элемента
  //         */}
  //         {item}
  //       </div>
  //     ))}
  //   </div>
  // )

  const getFormByItem = (index: number) => {
    // TODO: можно решить вопрос с формой так, как ты написал, только немного упростить понимание
    // А вообще, давай от этого избавимся, есть ведь псевдоклассы css, почитай что это и реализуй это место с их
    // использованием ()
    // https://developer.mozilla.org/ru/docs/Web/CSS/:first-child
    // https://developer.mozilla.org/ru/docs/Web/CSS/:last-child
    switch (form) {
      case 'brick': return index === 0 ? 'brickOne' : index !== list.length-1 ? 'brichOther' : 'brickEnd';
      case 'round': return 'roundStyle';
      case 'default': return index === 0 ? 'defaultOne' : index !== list.length-1 ? 'defaultOther' : 'defaultEnd';
    }
  }

  return (
    <div className={classNames('ChoiseGroup',
      form && `${form}_formChoiseGroup`,
      view && `${view}_viewChoiseGroup`,
      disabled && 'disabled_ChoiseGroup'
    )}>
      {list.map((item, index) => (
        <div
          className={classNames("item",
            selectedItem === item && 'selectedItem_ChoiseGroup',
            size && `${size}_sizeChoiseGroup`,
            view && `${view}_viewChoiseGroup`,
            getFormByItem(index),
            disabledItem || disabled && 'disabledItem_ChoiseGroup',
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
