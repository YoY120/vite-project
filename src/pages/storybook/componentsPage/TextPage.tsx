import React, { FC, useState } from "react";
import Text from "../../../components/Text/Text";
import TextField from "../../../components/TextField/TextField";
import Button from "../../../components/Button/Button";
import { Aling, Display, SizeText, TextFont, TextProps, TextViewType, Weight } from "../../../components/Text/types";

type TextPageProps = {
  isDarkTheme?: boolean;
}

// TODO: сделать переключенгие темной и светлой темы для этой страницы
const TextPage: FC<TextPageProps> = ({isDarkTheme}) => {
  const [textProps, setTextProps] = useState<TextProps>({
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
  
  return (
    <div className='styleBoxButton'>
    <div>
      <Text
        isDarkTheme={isDarkTheme}
        {...textProps}
      />
    </div>
    
    <div className='styleBoxMenu'>
      <div className='styleButtonMenu'>
        <TextField
          label='Назвае поля ввода'
          onChange={e => setTextProps({...textProps, label: e.target.value})}
          size='L'
        />
      </div>

      <div className='styleButtonMenu'>
        <Button
          isDarkTheme={isDarkTheme}
          label={`alert: ${String(textProps.view === 'alert')}`} 
          onClick={() => setTextProps({...textProps, view: 'alert'})}
          view='Secondary'
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`brand: ${String(textProps.view === 'brand')}`} 
          onClick={() => setTextProps({...textProps, view: 'brand'})}
          view='Secondary'
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`ghost: ${String(textProps.view === 'ghost')}`} 
          onClick={() => setTextProps({...textProps, view: 'ghost'})}
          view='Secondary'
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`link: ${String(textProps.view === 'link')}`} 
          onClick={() => setTextProps({...textProps, view: 'link'})}
          view='Secondary'
        />
        <Button
          isDarkTheme={isDarkTheme}
          label='светлая / темная тема'
          view='Secondary'
          onClick={() => {null}}
        />
      </div>

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

      <div className='styleButtonMenu'>
        <Button
          isDarkTheme={isDarkTheme}
          label={`2xs_LineHeight: ${String(textProps.lineHeight === '2XS')}`} 
          onClick={() => setTextProps({...textProps, lineHeight: '2XS'})}
          view='Secondary'
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`s_LineHeight: ${String(textProps.lineHeight === 'XS')}`} 
          onClick={() => setTextProps({...textProps, lineHeight: 'XS'})}
          view='Secondary'
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`m_LineHeight: ${String(textProps.lineHeight === 'M')}`} 
          onClick={() => setTextProps({...textProps, lineHeight: 'M'})}
          view='Secondary'
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`l_LineHeight: ${String(textProps.lineHeight === 'L')}`} 
          onClick={() => setTextProps({...textProps, lineHeight: 'L'})}
          view='Secondary'
        />
      </div>

      <div className='styleButtonMenu'>
        <Button
          isDarkTheme={isDarkTheme}
          label={`xs_Spacing: ${String(textProps.spacing === 'XS')}`} 
          onClick={() => setTextProps({...textProps, spacing: 'XS'})}
          view='Secondary'
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`s_Spacing: ${String(textProps.spacing === 'S')}`} 
          onClick={() => setTextProps({...textProps, spacing: 'S'})}
          view='Secondary'
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`m_Spacing: ${String(textProps.spacing === 'M')}`} 
          onClick={() => setTextProps({...textProps, spacing: 'M'})}
          view='Secondary'
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`l_Spacing: ${String(textProps.spacing === 'L')}`} 
          onClick={() => setTextProps({...textProps, spacing: 'L'})}
          view='Secondary'
        />
      </div>

      <div className='styleButtonMenu'>
        <Button
          isDarkTheme={isDarkTheme}
          label={`black: ${String(textProps.weight === 'black')}`} 
          onClick={() => setTextProps({...textProps, weight: 'black'})}
          view='Secondary'
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`bold: ${String(textProps.weight === 'bold')}`} 
          onClick={() => setTextProps({...textProps, weight: 'bold'})}
          view='Secondary'
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`light: ${String(textProps.weight === 'light')}`} 
          onClick={() => setTextProps({...textProps, weight: 'light'})}
          view='Secondary'
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`regular: ${String(textProps.weight === 'regular')}`} 
          onClick={() => setTextProps({...textProps, weight: 'regular'})}
          view='Secondary'
        />
      </div>

      <div className='styleButtonMenu'>
        <Button
          isDarkTheme={isDarkTheme}
          label={`left: ${String(textProps.align === 'left')}`} 
          onClick={() => setTextProps({...textProps, align: 'left'})}
          view='Secondary'
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`center: ${String(textProps.align === 'center')}`} 
          onClick={() => setTextProps({...textProps, align: 'center'})}
          view='Secondary'
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`right: ${String(textProps.align === 'right')}`} 
          onClick={() => setTextProps({...textProps, align: 'right'})}
          view='Secondary'
        />
      </div>

      <div className='styleButtonMenu'>
        <Button
          isDarkTheme={isDarkTheme}
          label={`block: ${String(textProps.display === 'block')}`} 
          onClick={() => setTextProps({...textProps, display: 'block'})}
          view='Secondary'
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`inlineBlock: ${String(textProps.display === 'inlineBlock')}`} 
          onClick={() => setTextProps({...textProps, display: 'inlineBlock'})}
          view='Secondary'
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`inline: ${String(textProps.display === 'inline')}`} 
          onClick={() => setTextProps({...textProps, display: 'inline'})}
          view='Secondary'
        />
      </div>

      <div className='styleButtonMenu'>
        <Button
          isDarkTheme={isDarkTheme}
          label={`2xs_SizeText: ${String(textProps.size === '2XS')}`} 
          onClick={() => setTextProps({...textProps, size: '2XS'})}
          view='Secondary'
          size="M"
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`xs_SizeText: ${String(textProps.size === 'XS')}`} 
          onClick={() => setTextProps({...textProps, size: 'XS'})}
          view='Secondary'
          size="M"
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`s_SizeText: ${String(textProps.size === 'S')}`} 
          onClick={() => setTextProps({...textProps, size: 'S'})}
          view='Secondary'
          size="M"
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`m_SizeText: ${String(textProps.size === 'M')}`} 
          onClick={() => setTextProps({...textProps, size: 'M'})}
          view='Secondary'
          size="M"
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`l_SizeText: ${String(textProps.size === 'L')}`} 
          onClick={() => setTextProps({...textProps, size: 'L'})}
          view='Secondary'
          size="M"
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`xl_SizeText: ${String(textProps.size === 'XL')}`} 
          onClick={() => setTextProps({...textProps, size: 'XL'})}
          view='Secondary'
          size="M"
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`2xl_SizeText: ${String(textProps.size === '2XL')}`} 
          onClick={() => setTextProps({...textProps, size: '2XL'})}
          view='Secondary'
          size="M"
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`3xl_SizeText: ${String(textProps.size === '3XL')}`} 
          onClick={() => setTextProps({...textProps, size: '3XL'})}
          view='Secondary'
          size="M"
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`4xl_SizeText: ${String(textProps.size === '4XL')}`} 
          onClick={() => setTextProps({...textProps, size: '4XL'})}
          view='Secondary'
          size="M"
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`5xl_SizeText: ${String(textProps.size === '5XL')}`} 
          onClick={() => setTextProps({...textProps, size: '5XL'})}
          view='Secondary'
          size="M"
        />
        <Button
          isDarkTheme={isDarkTheme}
          label={`6xl_SizeText: ${String(textProps.size === '6XL')}`} 
          onClick={() => setTextProps({...textProps, size: '6XL'})}
          view='Secondary'
          size="M"
        />
      </div>

    </div>
  </div>
  )
}

export default TextPage;
