import React, { FC, useState } from "react";
import Switch from "../../../../components/Switch/Switch";
import { SwitchProps } from "../../../../components/Switch/types";
import TextField from "../../../../components/TextField";
import Button from "../../../../components/Button/Button";
import StorybookSizeComponent from "../../../../components/StorybookSizeComponent";
import { sizeList } from "../../../../types/size";
import StorybookViewComponent from "../../../../components/StorybookViewComponent/StorybookViewComponent/StorybookViewComponent";
import { ViewList } from "../../../../types/view";

const SwichPage: FC<SwitchProps> = () => {
  const [swichProps, setSwichProps] = useState<SwitchProps>({
    label: 'Swich',
    view: 'primary',
    checked: false,
    disabled: false,
    size: 'L',
  })

  return (
    <div className='styleBoxButton'>
      <div className="styleBox">
        <Switch
          {...swichProps}
        />
      </div>
    <div className='styleBoxMenu'>
      <div className='styleButtonMenu'>
        <TextField
          label='Назвае кнопки'
          onChange={e => setSwichProps({...swichProps, label: e.target.value})}
          size='L'
        />
      </div>
      <div className='styleButtonMenu'>
        <Button
          label={`Checked: ${String(swichProps.checked === true)}`} 
          onClick={() => setSwichProps({...swichProps, checked: true ? !swichProps.checked : true})}
          view='Secondary'
        />
        <Button 
          label={`Disabled: ${String((swichProps.disabled === false))}`}
          onClick={() => setSwichProps({...swichProps, disabled: true ? !swichProps.disabled : true})}
          view='Secondary'
        />
      </div>
      {/**
       * Вид Swich Кнопки
       */}
      <StorybookViewComponent
        label="Вид checkbox"
        buttonLabelView='Вид'
        listView={ViewList}
        selecteView={swichProps.view}
        onViewClick={(view) => (setSwichProps({...swichProps, view}))}
      />
      <StorybookSizeComponent
        label="Размер Swich кнопки"
        buttonLabel='Размер'
        list={sizeList}
        selectedSize={swichProps.size}
        onSizeClick={(size) => (setSwichProps({...swichProps, size}))}
      />
    </div>
  </div>
  )
}

export default SwichPage