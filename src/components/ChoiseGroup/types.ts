import { Size } from "../../types/size";
import { ViewFull } from "../../types/view";

/**
 * Форма (Варианты)
 */
export type FormChoiseGroup = 'round' | 'brick' | 'default';

export const FormChoiseGroupList: FormChoiseGroup[] = ['round', 'brick', 'default'];

export type ChoiseGroupProps = {
  list: string[];
  /**
   * Выбранный элемент
   */
  selectedItem: string | null;
  /**
   * Размер элемента
   */
  size?: Size;
  /**
   * Вид элемента
   */
  view?: ViewFull;
  /**
   *  Форма
   */
  form?: FormChoiseGroup;
  /**
   * Неактивный кнопки
   */
  disabled?: boolean;
  /**
   * Неактивная кнопка
   */
  disabledItem?: boolean;
  /**
   * Обработчик нажатия
   * key - выбранный элемент
   */
  onClick: (key: string) => void;
}