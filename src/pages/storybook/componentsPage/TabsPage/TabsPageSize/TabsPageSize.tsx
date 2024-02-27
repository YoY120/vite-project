import React, {FC} from 'react';
import Button from '../../../../../components/Button/Button';
import { SizeTabs, sizeTabsList } from '../../../../../components/Tabs/type';


type TabsPageSizeProps = {
  size?: SizeTabs | undefined;
  isDarkTheme?: boolean | undefined;
  onSizeTabsClick: (size: SizeTabs)=> void;
}

const TabsPageSize: FC<TabsPageSizeProps> = ({size, isDarkTheme, onSizeTabsClick}) => {
  const handleTabsSizeClck = (size: SizeTabs) => () => onSizeTabsClick(size);

  return (
  <div className='styleButtonMenu'>
    <p>Размер кнопки</p>
    {sizeTabsList.map((item) => (
      <Button
        key={item}
        isDarkTheme={isDarkTheme}
        label={`Size ${item}: ${String(size === item)}`}
        onClick={handleTabsSizeClck(item)}
        view='Secondary'
        size="M"
      />
      )
    )}
  </div>
  )
}


export default TabsPageSize;