/**
 * Размер компонента
 */
export type SizeTabs = 'XS' | 'S' | 'M';

export const sizeTabsList: SizeTabs[] = ['XS', 'S', 'M'];
/**
 * Внешний вид компонента (с рамкой или без)
 */
type ViewTabs = 'bordered' | 'clear';
/**
 * Расположение табов (вертикальных или горизонатальных)
 * и линии, которая отмечает активный таб
 */
export type linePositionTabs = 'bottom' | 'top' | 'left' | 'right';

export const linePositionTabsList: linePositionTabs[] = ['bottom', 'top', 'left', 'right']
/**
 * Типы Tabs
 */
export type TabsProps = {
  /**
   * Название кнопки
  */
  label?: string;
  /**
   * Размер компонента
  */
  size?: SizeTabs;
  /**
   * Внешний вид компонента (с рамкой или без)
  */
  view?: ViewTabs;
  /**
  * Расположение табов (вертикальных или горизонатальных)
  * и линии, которая отмечает активный таб
  */
  linePosition?: linePositionTabs;
  /**
   * Дополнительный CSS-класс
  */
  className?: string;
  /**
   * Неактивны все элементы
  */
  disabled?: boolean;
  /**
   * Действие при выборе элемента
  */
  onChange?: () => void;
  /**
   * Действие при выборе элемента
  */
  onClick?: () => void;
}
