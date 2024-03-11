import React, { FC, useState } from "react";
import { TabsProps } from "../../../../components/Tabs/type";
import Button from "../../../../components/Button/Button";
import Tabs from "../../../../components/Tabs/Tabs";
import TextField from "../../../../components/TextField";
import TabsPageSize from "./TabsPageSize/TabsPageSize";
import TabsPageLinePosition from "./TabsPageLinePosition/TabsPageLinePosition";

const TabsPage: FC<TabsProps> = () => {
  const [tabsProps, setTabsProps] = useState<TabsProps>({
    label: 'Кнопка 1',
    size: 'M',
    view: 'clear',
    linePosition: 'bottom',
    disabled: false
  });

  return (
    <div className='styleBoxButton'>
      <div className="styleBox">
        <Tabs
          {...tabsProps}
        />
      </div>
      <div className='styleBoxMenu'>
        <div className='styleButtonMenu'>
          <TextField
            label='Назвае кнопки'
            onChange={e => setTabsProps({...tabsProps, label: e.target.value})}
            size='L'
          />
        </div>
        <div className='styleButtonMenu'>
          <Button
            label={`Disabled: ${String(tabsProps.disabled === true)}`}
            onClick={() => setTabsProps({...tabsProps, disabled: true ? !tabsProps.disabled : true})}
            view='Secondary'
          />
        </div>
        <div className='styleButtonMenu'>
          <Button 
            label={`clear: ${String(tabsProps.view === 'clear')}`} 
            onClick={() => setTabsProps({...tabsProps, view: 'clear'})}
            view='Secondary'
          />
          <Button 
            label={`bordered: ${String(tabsProps.view === 'bordered')}`} 
            onClick={() => setTabsProps({...tabsProps, view: 'bordered'})}
            view='Secondary'
          />
        </div>
        <TabsPageSize
          size={tabsProps.size}
          onSizeTabsClick={(size) => setTabsProps({...tabsProps, size})}
        />
        <TabsPageLinePosition
          linePosition={tabsProps.linePosition}
          onTabsLinePositionClick={(linePosition) => setTabsProps({...tabsProps, linePosition})}
        />
      </div>
    </div>
  )
}

export default TabsPage;
