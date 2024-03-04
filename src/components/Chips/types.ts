import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Size } from "../../types/size";
import React from 'react'

/** 
 * Статус
 */
export type ChipsPropStatus = 'normal' | 'system' | 'success' | 'warning' | 'error';

export const chipsStatusList: ChipsPropStatus[] = ['normal', 'system', 'success', 'warning', 'error']

/**
 * Варианты размера радио кнопки
 */
export type ChipsSize = Size;

/**
 * Типы групп кнопок
 */
export type ChipsProps = { 
  /**
   * Расположение иконка слева
   */
  iconLeft?: React.ReactNode;
  /**
   * Расположение Иконка справа
   */
  iconRight?: React.ReactNode;
  /**
   * Текст кнопки
   */
  label?: string;
  /**
   * Статус кнопки
   */
  status?: ChipsPropStatus;
  /**
   * Вид активного элемента
   */
  isActive?: boolean;
  /**
   * Размер конопки
   */
  size?: ChipsSize;
  /**
  *  Обработчик нажатия
  */
  onClick?: () => void;
};
