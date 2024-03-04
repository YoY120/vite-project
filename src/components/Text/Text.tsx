import React, { FC } from "react";
import './Text.css';
import { TextProps } from "./types";
// import '../../index.css'


/**
 * Типизация Checkbox кнопки
 */
const Text: FC<TextProps> = ({
  label,
  view = 'alert',
  font = 'primary',
  lineHeight = 'L',
  spacing = 'L',
  fontStyle = 'italic',
  weight = 'black',
  transform = 'uppercase',
  cursor = 'pointer',
  decoration = 'underline',
  align = 'center',
  display = 'block',
  size = 'L',
  isDarkTheme = true,
  // space = '|',
}) => {
  const TextClassName = `Text
    ${view}_TextView
    ${font}_TextFont
    lineHeight_${lineHeight}
    spacing_${spacing}
    ${fontStyle ? fontStyle : ''}
    ${weight ? weight : ''}
    ${transform ? transform : ''}
    ${cursor ? cursor : ''}
    ${decoration ? decoration : ''}
    ${align ? align : ''}
    ${display ? display : ''}
    sizeText_${size}`;

  return (
    <div className={TextClassName}>
      {label}
    </div>
  )
}

export default Text;