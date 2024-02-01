import { Size } from "../../types/size";

/**
 * Варианты внешнего вида кнопки
 */
export type ButtonViewType = 'Primary' | 'Secondary' | 'Ghost' | 'Clear';

/**
 * Варианты размера кнопки
 */
export type TextFieldSize = Size;

/**
 * Свойство компанента Button
 */
export type ButtonProps = {
  isDarkTheme?: boolean;
  /**
   * Текст кнопки
   */
  label?: string;
  /**
   * Внешний класс
   */
  className?: string;
  /**
   * Блокировка кнопки
   */
  disabled?: boolean;
  /**
   * Режим загрузки 
   */
  loading?: boolean;
  /**
   * Внешний вид кнопка
   */
  view?: ButtonViewType;
  /**
  * Внешний вид кнопка
  */
  size?: TextFieldSize;
  /**
   * Обработчик нажатия
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
