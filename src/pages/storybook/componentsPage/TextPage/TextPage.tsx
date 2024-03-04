import React, { FC, useState } from "react";
import Text from "../../../../components/Text/Text";
import Button from "../../../../components/Button/Button";
import { Aling, Display, TextFont, TextProps, TextViewType, Weight } from "../../../../components/Text/types";
import TextPageSize from "./TextPageSize/TextPageSize";
import TextPageView from "./TextPageView/TextPageView";
import TextPageWeight from "./TextPageWeight/TextPageWeight";
import TextPageAling from "./TextPageAlign/TextPageAling";
import TextPageDisplay from "./TextPageDisplay/TextPageDisplay";
import TextPageSizeText from "./TextPageSize/TextPageSize";
import TextPageSpacing from "./TextPageSize/TextPageSpacing";
import TextPageLineHeight from "./TextPageSize/TextPageLineHeight";
import StorybookSizeComponent from "../../../../components/StorybookSizeComponent";
import { sizeList } from "../../../../types/size";
import TextField from "../../../../components/TextField";

type TextPageProps = {
  isDarkTheme?: boolean;
  handleThemeClick?: () => void;
}

// 1. проверить валидность расстановки скобок 
// (()) - правильно
// ()() - правильно
// )()( - не правильно
// 2. Проверить валидность знаков 
// 65 + 65 - правильно
// 65 65 + - не правильно
// 65 + 65 (33 + 33) - не правильно
// 3. Определить последовательность дейтсвий (рекурсия (грокаем алгоритм - бинарный поиск))
const tttt: Array<string | number> = [62, '+', 55, '*', '(', 63, '-', 65, ')'];

// TODO: сделать переключенгие темной и светлой темы для этой страницы
const TextPage: FC<TextPageProps> = ({isDarkTheme, handleThemeClick}) => {
  const [textProps, setTextProps] = useState<TextProps>({
    view: 'alert',
    font: 'primary',
    lineHeight: 'L',
    spacing: 'L',
    fontStyle: 'italic',
    weight: 'black',
    transform: 'uppercase',
    cursor: 'pointer',
    decoration: 'underline',
    align: 'center',
    display: 'block',
    size: 'L',
  })

  console.log(isDarkTheme)

  return (
    <div className='styleBoxButton'>
      <div className="styleBox">
        <Text
          isDarkTheme={isDarkTheme}
          {...textProps}
        />
      </div>
    
    <div className='styleBoxMenu'>
      <div className='styleButtonMenu'>
        <TextField
          isDarkTheme={isDarkTheme}
          label='Назвае поля ввода'
          onChange={e => setTextProps({...textProps, label: e.target.value})}
          size='L'
        />
      </div>

      {/**
      *  Цвет текста
      */}
      <TextPageView
          isDarkTheme={isDarkTheme}
          textView={textProps.view} 
          onTextViewClick={(view) => (setTextProps({...textProps, view}))}
        />
      <div className='styleButtonMenu'>
        <Button
          isDarkTheme={isDarkTheme}
          label='светлая / темная тема'
          view='Secondary'
          onClick={handleThemeClick}
        />
      </div>

      {/**
      *  Гарнитура
      */}
      <div className='styleButtonMenu'>
        <Button
          isDarkTheme={isDarkTheme}
          label={`primary: ${String(textProps.font === 'primary')}`} 
          onClick={() => setTextProps({...textProps, font: 'primary'})}
          view='Secondary'
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`mono: ${String(textProps.font === 'mono')}`} 
          onClick={() => setTextProps({...textProps, font: 'mono'})}
          view='Secondary'
        />
      </div>

      {/**
      *  Выстоа строки
      */}
      <TextPageLineHeight
        isDarkTheme = {isDarkTheme}
        lineHeight = {textProps.lineHeight}
        onSizeClick={(lineHeight) => (setTextProps({...textProps, lineHeight}))}
      />

      {/**
      *  Межбуквенное расстояние
      */}
      <TextPageSpacing
        isDarkTheme = {isDarkTheme}
        spacing={textProps.spacing}
        onSizeClick={(spacing) => (setTextProps({...textProps, spacing}))}
      />

      {/**
      *   Насыщенность
      */}
      <TextPageWeight
        isDarkTheme={isDarkTheme} 
        weight={textProps.weight} 
        onWeightClick={(weight) => {setTextProps({...textProps, weight})}} 
      />

      {/**
      *  Выпавнивание теста
      */}
      <TextPageAling
        isDarkTheme={isDarkTheme} 
        align={textProps.align} 
        onAlingClick={(align) => {setTextProps({...textProps, align})}} 
      />
      
      {/**
      *  Дисплей 
      */}
      <TextPageDisplay
        isDarkTheme={isDarkTheme} 
        display={textProps.display} 
        onDisplayClick={(display) => {setTextProps({...textProps, display})}} 
      />
      {/** 
       * Размер текста
       */}
      <StorybookSizeComponent
        label="Размер кнопки"
        buttonLabel='Размер'
        list={sizeList}
        selectedSize={textProps.size}
        onSizeClick={(size) => (setTextProps({...textProps, size}))}
      />
    </div>
  </div>
  )
}           

export default TextPage;
