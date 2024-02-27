import React, {FC} from 'react';
import { displayList, Display } from '../../../../../components/Text/types';
import Button from '../../../../../components/Button/Button';

type TextPageDisplayProps = {
  display: Display | undefined;
  isDarkTheme: boolean | undefined;
  onDisplayClick: (display: Display)=> void;
}

const TextPageDisplay: FC<TextPageDisplayProps> = ({display, isDarkTheme, onDisplayClick}) => {
  const handleSizeClck = (display: Display) => () => onDisplayClick(display);

  return (
  <div className='styleButtonMenu'>
    {displayList.map((item) => (
      <Button
        key={item}
        isDarkTheme={isDarkTheme}
        label={`${item}_SizeText: ${String(display === item)}`}
        onClick={handleSizeClck(item)}
        view='Secondary'
        size="M"
      />
      )
    )}
  </div>
  )
}

export default TextPageDisplay;