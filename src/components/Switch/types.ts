import { DetailedHTMLProps } from "react";
import { Size } from "../../types/size";
import { ViewType } from "../../types/view";

/**
 * Варианты внешнего вида радио кнопки кнопки
 */
export type SwitchViewType = ViewType;

/**
 * Варианты размера радио кнопки
 */
export type SwitchSize = Size;

/**
 * Свойство компанента Radio
 */
export type SwitchProps = {
  /**
   * Текст кнопки
   */
  label?: string;

  /**
   *  Вид кнопки
   */
  view?: SwitchViewType;

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
  size?: SwitchSize;

  /**
   *  Обработчик нажатия
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  onClick?: () => void;
}
