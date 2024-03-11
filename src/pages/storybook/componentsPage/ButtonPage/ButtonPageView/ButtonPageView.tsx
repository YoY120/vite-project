import React, {FC} from 'react';
import { buttonViewTypeList,  ButtonViewType} from '../../../../../components/Button/types';
import Button from '../../../../../components/Button/Button';


type ButtonPageViewProps = {
  view?: ButtonViewType | undefined;
  isDarkTheme?: boolean | undefined;
  onViewClick: (view: ButtonViewType)=> void;
}

const ButtonPageView: FC<ButtonPageViewProps> = ({view, isDarkTheme, onViewClick}) => {
  const handleViewClck = (view: ButtonViewType) => () => onViewClick(view);


  return (
  <div className='styleButtonMenu'>
    {buttonViewTypeList.map((item) => (
      <Button
        key={item}
        isDarkTheme={isDarkTheme}
        label={`View ${item}: ${String(view === item)}`}
        onClick={handleViewClck(item)}
        view='Secondary'
        size="M"
      />
      )
    )}
  </div>
  )
}


export default ButtonPageView;
