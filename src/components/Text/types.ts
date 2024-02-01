import { DetailedHTMLProps } from "react";
import { Size } from "../../types/size";

// Не ипортируте
// import { Space } from '@consta/uikit/MixSpace';

/**
 * Варианты внешнего вида радио кнопки кнопки
 */
export type TextViewType = | 'alert' 
  | 'brand' 
  | 'ghost' 
  | 'link' 
  | 'linkMinor' 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'warning';

/**
 *  Гарнитура
 */
export type TextFont =  | 'primary'| 'mono';

/**
 *  Насыщенность
 */                        
export type Weight = | 'black' 
  | 'bold' 
  | 'light' 
  | 'regular' 
  | 'semibold' 
  | 'thin';

/**
 *  Выравнивание
 */
export type Aling = | 'left' | 'center' | 'right';

/**
 *  Поведение контейнера с текстом в документе (блочный или строчный элемент)
 */
export type Display = | 'block' | 'inlineBlock' | 'inline'

/**
 * Размер текста
 */
export type SizeText = | 'sizeText_2XS' 
  | 'sizeText_XS' 
  | 'sizeText_S' 
  | 'sizeText_M' 
  | 'sizeText_L' 
  | 'sizeText_XL' 
  | 'sizeText_2XL' 
  | 'sizeText_3XL' 
  | 'sizeText_4XL' 
  | 'sizeText_5XL' 
  | 'sizeText_6XL'

/**
 * Свойство компанента Text
 */
export type TextProps = {
  isDarkTheme?: boolean;
  /**
   * Текст
   */
  label?: string;

  /**
   *  Тип и цвет текста
   */
  view?: TextViewType;

  /**
   *  Гарнитура
   */
  font?: TextFont;

  /**
   *  Высота строки
   */
  lineHeight?: Size;

  /**
   *  Межбуквенное расстояние
   */
  spacing?: Size;

  /**
   *  Начертание
   */
  fontStyle?: string;

  /**
   *  Насыщенность
   */
  weight?: Weight;

  /**
   *  Регистр
   */
  transform?: string;

  /**
   *  Отображение курсора
   */
  cursor?: string;

  /**
   *  Подчеркивание
   */
  decoration?: string;

  /**
   *  Выравнивание
   */
  align?: Aling;

  /**
   *  Поведение контейнера с текстом в документе (блочный или строчный элемент)
   */
  display?: Display;

  /**
   *  Размер текста
   */
  size?: Size;

  /**
   * Отступ
   */
  // space?: Space;
}