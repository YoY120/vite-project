import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

/**
 * Варианты внешнего вида радио кнопки кнопки
 */
export type ChipsViewType = 'primary' | 'secondary';

/**
 * Варианты размера радио кнопки
 */
export type ChipsSize = 'L_Chips' | 'M_Chips' | 'S_Chips' | 'XS_Chips';

/**
 * Свойство компанента Radio
 */
export type ChipsProps = {
  /**
   *  Содержимое кнопки
   */
  item?: {
    /**
    * Текст кнопки
    */
    label?: string,
    /**
     *  Статус кнопки
     */
    // status?: string;
    /**
     *  Статус активности
     */
    active?: boolean
  }

  /**
   *  Свойство активности кнопки
   */
  // interactive?: boolean;

  /**
   *  Вид кнопки
   */
  activeView?: ChipsViewType;

  /**
   *  Размер кнопки
   */
  size_Chips?: ChipsSize;

  /**
   *  Обработчик нажатия
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  /**
   *  Событие клика по элементу
   */
  // onItemClick?: () => ChipsPropOnItemClick;
}