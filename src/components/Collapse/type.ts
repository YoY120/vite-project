import { Size } from "../../types/size";
import { ViewFull } from "../../types/view";

/**
 * Форма компонента
 */
export type formCollapse = 'default'| 'brick' | 'round';

export const formCollapseList: formCollapse[] = ['default', 'brick', 'round'];
/**
 * Внешний вид
 */
type viewCollapse = ViewFull;

export type CollapseProps = {
  /**
  * Заголовок коллапса
  */
  label?: string;
  /**
  * Размер
  */
  size?: Size;
  /**
  * Форма компонента
  */
  form?: formCollapse;
  /**
  * Внешний вид
  */
  view?: viewCollapse;
  /**
  * Разделитель между заголовком и содержимым
  */
  divider?: boolean;
  /**
  * Устанавливает боковые отступы
  */
  horizontalSpace?: Size;
  /**
  * Содержимое коллапса
  */
  children?: React.ReactNode;
  /**
  * Состояние коллапса (открыт/закрыт)
  */
  isOpen?: boolean;
  /**
  * Дополнительный CSS-класс
  */
  className?: string;
  /**
  * Действие при клике на коллапс
  */
  onClick?: () => void;
}
