import React, { FC, useState } from "react";
import Switch from "../../../components/Switch/Switch";
import { SwitchProps } from "../../../components/Switch/types";
import TextField from "../../../components/TextField/TextField";
import Button from "../../../components/Button/Button";

const SwichPage: FC<SwitchProps> = () => {

  const [swichProps, setSwichProps] = useState<SwitchProps>({
    label: '',
    view: 'primary',
    checked: false,
    disabled: false,
    size: 'L',
  })

  return (
    <div className='styleBoxButton'>
    <div>
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
      <div className='styleButtonMenu'>
        <Button
          label={`Primary: ${String(swichProps.view  === 'primary')}`}
          onClick={() => setSwichProps({...swichProps, view: 'primary'})}
          view='Secondary'
        />
        <Button
          label={`Ghost: ${String(swichProps.view === 'ghost')}`}
          onClick={() => setSwichProps({...swichProps, view: 'ghost'})}
          view='Secondary'
        />
      </div>
      <div className='styleButtonMenu'>
        <Button
          label={`L: ${String(swichProps.size === 'L')}`}
          onClick={() => setSwichProps({...swichProps, size: 'L'})}
          view='Secondary'
        />
        <Button
          label={`M: ${String(swichProps.size === 'M')}`}
          onClick={() => setSwichProps({...swichProps, size: 'M'})}
          view='Secondary'
        />
        <Button
          label={`S: ${String(swichProps.size === 'S')}`}
          onClick={() => setSwichProps({...swichProps, size: 'S'})}
          view='Secondary'
        />
        <Button
          label={`XS: ${String(swichProps.size === 'XS')}`}
          onClick={() => setSwichProps({...swichProps, size: 'XS'})}
          view='Secondary'
        />
      </div>
    </div>
  </div>
  )
}

export default SwichPage