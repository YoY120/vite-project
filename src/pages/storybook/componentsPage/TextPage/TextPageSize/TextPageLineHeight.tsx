import React, {FC} from 'react';
import { Size, sizeList } from '../../../../../types/size';
import Button from '../../../../../components/Button/Button';


type TextPageSizeProps = {
  lineHeight?: Size | undefined;
  isDarkTheme: boolean | undefined;
  onSizeClick: (size: Size)=> void;
}

const TextPageLineHeight: FC<TextPageSizeProps> = ({lineHeight, isDarkTheme, onSizeClick}) => {
  const handleSizeClck = (size: Size) => () => onSizeClick(size);

  return (
  <div className='styleButtonMenu'>
    <p>Высота строки</p>
    {sizeList.map((item) => (
      <Button
        key={item}
        isDarkTheme={isDarkTheme}
        label={`Size ${item}: ${String(lineHeight === item)}`}
        onClick={handleSizeClck(item)}
        view='Secondary'
        size="M"
      />
      )
    )}
  </div>
  )
}


export default TextPageLineHeight;