import { DetailedHTMLProps } from "react";
import { Size } from "../../types/size";

/**
 * Варианты внешнего вида радио кнопки кнопки
 */
export type RadioViewType = 'primary' | 'ghost';

/**
 * Варианты размера радио кнопки
 */
export type RadioSize = Size;

/**
 * Свойство компанента Radio
 */
export type RadioProps = {
  /**
   * Текст кнопки
   */
    label?: string;

  /**
   *  Вид кнопки
   */
    view?: RadioViewType;

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
    size?: RadioSize;

  /**
   *  Обработчик нажатия
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}