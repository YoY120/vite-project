import React, {FC} from 'react';
import { Size, sizeList } from '../../../../../types/size';
import Button from '../../../../../components/Button/Button';


type TextPageSizeProps = {
  size?: Size | undefined;
  isDarkTheme: boolean | undefined;
  onSizeClick: (size: Size)=> void;
}

const TextPageSizeText: FC<TextPageSizeProps> = ({size, isDarkTheme, onSizeClick}) => {
  const handleSizeClck = (size: Size) => () => onSizeClick(size);

  return (
  <div className='styleButtonMenu'>
    <p>Размер кнопки</p>
    {sizeList.map((item) => (
      <Button
        key={item}
        isDarkTheme={isDarkTheme}
        label={`Size ${item}: ${String(size === item)}`}
        onClick={handleSizeClck(item)}
        view='Secondary'
        size="M"
      />
      )
    )}
  </div>
  )
}


export default TextPageSizeText;