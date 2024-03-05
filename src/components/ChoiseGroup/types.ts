import { Size } from "../../types/size";
import { ViewFull } from "../../types/view";

/* TODO: Нужно переименовать Choise => Choice */

/**
 * Форма компонента ChoiseGroup
 */
export type FormChoiseGroup = 'round' | 'brick' | 'default';

// TODO: посмотри в сторону enum, возможно тебе понравится
export enum FormChoiseGroupEnum {
  round = 'round',
  brick = 'brick',
  default = 'default'
}

// TODO: не хватает комментария для списка
/**
 * Список форм компонента ChoiseGroup
 */
export const FormChoiseGroupList: FormChoiseGroup[] = ['round', 'brick', 'default'];

// TODO: не хватает комментария для типа
/**
 * Свойства компонента ChoiseGroup
 */
export type ChoiseGroupProps = {
  /**
   * Список кнопок
   */
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
  // TODO: по аналогии с верхними элементами лучше написать комментарий "Форма элемента"
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