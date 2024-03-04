import { Size } from "../../types/size";

/**
 * Стили поля для ввода
 */
export type FieldStatus = 'default' | 'success' | 'warning' | 'alert';

export const fieldStatusList: FieldStatus[] = ['default', 'success', 'warning', 'alert'];

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
   * Светлая.темная тема
   */
  isDarkTheme?: boolean;
  /**
   * Заголовок поля ввода
   */
  label: string;
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
  status?: FieldStatus;
  /**
   * Размер полея для ввода
   */
  size?: TextFieldSize;
  /**
   *  Обработчик ввода
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
