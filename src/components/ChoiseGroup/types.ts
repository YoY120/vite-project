import { Size } from "../../types/size";
import { ViewFull } from "../../types/view";

export type ChoiseGroupProps = {
  list: string[];
  /**
   * Выбранный жлемент
   */
  selectedItem: string | null;
  size?: Size;
  view?: ViewFull;
  form?: 'round' | 'brick' | 'default';
  /**
   * Обработчик нажатия
   * key - выбранный элемент
   */
  onClick: (key: string) => void;
}