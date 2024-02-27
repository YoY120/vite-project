import React, {FC} from 'react';
import { Size } from '../../types/size';
import Button from '../Button/Button';
import Text from '../Text/Text';

type StorybookSizeComponentProps = {
  label: string;
  buttonLabel: string;
  list: Size[]; 
  selectedSize?: Size;
  isDarkTheme?: boolean;
  onSizeClick: (size: Size)=> void;
}

const StorybookSizeComponent: FC<StorybookSizeComponentProps> = ({
  label,
  buttonLabel,
  list = [], 
  selectedSize, 
  isDarkTheme, 
  onSizeClick
}) => {
  const handleSizeClck = (selectedSize: Size) => () => onSizeClick(selectedSize);

  return (
    <div className='styleButtonMenu'>
      <Text label={label} size='M' spacing='S'/>
      {list.map((item) => (
        <Button
          key={item}
          isDarkTheme={isDarkTheme}
          label={`${buttonLabel} ${item}: ${String(selectedSize === item)}`}
          onClick={handleSizeClck(item)}
          view='Secondary'
          size="M"
        />
        )
      )}
    </div>
  )
}

export default StorybookSizeComponent;
