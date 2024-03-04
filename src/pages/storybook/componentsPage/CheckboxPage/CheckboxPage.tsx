import React, { FC, useState } from "react";
import Checkbox from "../../../../components/Checkbox";
import TextField from "../../../../components/TextField";
import Button from "../../../../components/Button/Button";
import { CheckboxProps } from "../../../../components/Checkbox/types";
import StorybookSizeComponent from "../../../../components/StorybookSizeComponent";
import { sizeList } from "../../../../types/size";
import StorybookViewComponent from "../../../../components/StorybookViewComponent/StorybookViewComponent/StorybookViewComponent";
import { ViewList } from "../../../../types/view";

const CheckboxPage: FC<CheckboxProps> = () => {

  const [checkboxProps, setCheckboxProps] = useState<CheckboxProps>({
  label: 'Checkbox',
  view: 'primary',
  checked: false,
  disabled: false,
  size: 'L',
  })

  return (
    <div className='styleBoxButton'>
      <div className="styleBox">
        <Checkbox
          {...checkboxProps}
          onChange={() => setCheckboxProps({...checkboxProps, checked: true ? !checkboxProps.checked : true})}
        />
      </div>
      <div className='styleBoxMenu'>
        <div className='styleButtonMenu'>
          <TextField
            label='Назвае кнопки'
            onChange={e => setCheckboxProps({...checkboxProps, label: e.target.value})}
            size='L'
          />
        </div>
        <div className='styleButtonMenu'>
          <Button
            label={`Checked: ${String(checkboxProps.checked === true)}`} 
            onClick={() => setCheckboxProps({...checkboxProps, checked: true ? !checkboxProps.checked : true})}
            view='Secondary'
          />
          <Button 
            label={`Disabled: ${String((checkboxProps.disabled === false))}`}
            onClick={() => setCheckboxProps({...checkboxProps, disabled: true ? !checkboxProps.disabled : true})}
            view='Secondary'
          />
        </div>
        <StorybookViewComponent
          label="Вид checkbox"
          buttonLabelView='Вид'
          listView={ViewList}
          selecteView={checkboxProps.view}
          onViewClick={(view) => (setCheckboxProps({...checkboxProps, view}))}
        />
        <StorybookSizeComponent
          label="Размер checkbox"
          buttonLabel='Размер'
          list={sizeList}
          selectedSize={checkboxProps.size}
          onSizeClick={(size) => (setCheckboxProps({...checkboxProps, size}))}
        />
      </div>
    </div>
  )
}

export default CheckboxPage