import React, {FC} from 'react';
import { Size, sizeList } from '../../../../../types/size';
import Button from '../../../../../components/Button/Button';


type TextPageSizeProps = {
  spacing?: Size | undefined;
  isDarkTheme: boolean | undefined;
  onSizeClick: (size: Size)=> void;
}

const TextPageSpacing: FC<TextPageSizeProps> = ({spacing, isDarkTheme, onSizeClick}) => {
  const handleSizeClck = (size: Size) => () => onSizeClick(size);

  return (
  <div className='styleButtonMenu'>
    <p>Межбуквенное расстояние</p>
    {sizeList.map((item) => (
      <Button
        key={item}
        isDarkTheme={isDarkTheme}
        label={`Size ${item}: ${String(spacing === item)}`}
        onClick={handleSizeClck(item)}
        view='Secondary'
        size="M"
      />
      )
    )}
  </div>
  )
}


export default TextPageSpacing;