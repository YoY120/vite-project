import { DetailedHTMLProps } from "react";
import { Size } from "../../types/size";
import { ViewType } from "../../types/view";

/**
 * Варианты внешнего вида радио кнопки кнопки
 */
export type CheckboxViewType = ViewType;

/**
 * Варианты размера радио кнопки
 */
export type CheckboxSize = Size;

/**
 * Свойство компанента Radio
 */
export type CheckboxProps = {
  /**
   * Текст кнопки
   */
    label?: string;

  /**
   *  Вид кнопки
   */
    view?: CheckboxViewType;

  /**
   *  Активная кнопка
   */
    checked?: boolean;

  /**
   *  Блокировка кнопки
   */
    disabled?: boolean;

  /**
   *  Размер кнопки
   */
    size?: CheckboxSize;

  /**
   *  Обработчик нажатия
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
