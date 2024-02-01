import { FieldStatus, Size } from "../../types/size";

/**
 * Стили поля для ввода
 */
export type TextFieldStatus = FieldStatus;

/**
 * Размер поля для ввода
 */
export type TextFieldSize = Size;

/**
 * Расположение Label
 */
export type TextFiledLabelPosition = 'Top' | 'Left';

/**
 * Свойсва компонента TextField
 */
export type TextFieldProps = {
  /**
   * Заголовок поля ввода
   */
  label?: string;
  /**
   * Расположение Label
   */
  labelPosition?: TextFiledLabelPosition;
  /**
   * Подпись под полем ввода
   */
  caption?: string;
  /**
   * Подсказка внутри поля ввода
   */
  placeholder?: string;
  /**
   * Блокировка поля ввода
   */
  disabled?: boolean;
  /**
   * Стили поля для ввода
   */
  status?: TextFieldStatus;
  /**
   * Размер полея для ввода
   */
  size?: TextFieldSize;
  /**
   *  Обработчик ввода
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}