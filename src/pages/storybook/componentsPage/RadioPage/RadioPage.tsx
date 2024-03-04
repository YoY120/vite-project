import React, { FC, useState } from "react";
import { RadioProps } from "../../../../components/Radio/types";
import Radio from "../../../../components/Radio";
import TextField from "../../../../components/TextField";
import Button from "../../../../components/Button/Button";
import StorybookSizeComponent from "../../../../components/StorybookSizeComponent";
import { sizeList } from "../../../../types/size";
import { ViewList } from "../../../../types/view";
import StorybookViewComponent from "../../../../components/StorybookViewComponent/StorybookViewComponent/StorybookViewComponent";

const RadioPage: FC<RadioProps> = () => {

  const [radioProps, setRadioProps] = useState<RadioProps>({
    label: '',
    view: 'primary',
    checked: false,
    disabled: false,
    size: 'L',
  })

  return (
    <div className='styleBoxButton'>
      <div className="styleBox">
        <Radio
          {...radioProps}
        />
      </div>
      <div className='styleBoxMenu'>
        <div className='styleButtonMenu'>
          <TextField
            label='Назвае кнопки'
            onChange={e => setRadioProps({...radioProps, label: e.target.value})}
            size='L'
          />
        </div>
        <div className='styleButtonMenu'>
          <Button
            label={`Checked: ${String(radioProps.checked === true)}`} 
            onClick={() => setRadioProps({...radioProps, checked: true ? !radioProps.checked : true})}
            view='Secondary'
          />
          <Button 
            label={`Disabled: ${String((radioProps.disabled === false))}`}
            onClick={() => setRadioProps({...radioProps, disabled: true ? !radioProps.disabled : true})}
            view='Secondary'
          />
        </div>
        {/**
         * Вид Radio Кнопки
         */}
        <StorybookViewComponent
          label="Вид checkbox"
          buttonLabelView='Вид'
          listView={ViewList}
          selecteView={radioProps.view}
          onViewClick={(view) => (setRadioProps({...radioProps, view}))}
        />
        {/** 
         * Рахзмер Radio кнопки
        */}
        <StorybookSizeComponent
          label="Размер Radio кнопки"
          buttonLabel='Размер'
          list={sizeList}
          selectedSize={radioProps.size}
          onSizeClick={(size) => (setRadioProps({...radioProps, size}))}
        />
      </div>
    </div>
  )
}

export default RadioPage