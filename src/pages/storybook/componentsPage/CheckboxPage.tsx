import React, { FC, useState } from "react";
import Checkbox from "../../../components/Checkbox";
import TextField from "../../../components/TextField/TextField";
import Button from "../../../components/Button/Button";
import { CheckboxProps } from "../../../components/Checkbox/types";

const CheckboxPage: FC<CheckboxProps> = () => {

  const [checkboxProps, setCheckboxProps] = useState<CheckboxProps>({
  label: '',
  view: 'primary',
  checked: false,
  disabled: false,
  size: 'L',
  })

  return (
    <div className='styleBoxButton'>
          <div>
            <Checkbox
              {...checkboxProps}
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
            <div className='styleButtonMenu'>
              <Button
                label={`Primary: ${String(checkboxProps.view === 'primary')}`}
                onClick={() => setCheckboxProps({...checkboxProps, view: 'primary'})}
                view='Secondary'
              />
              <Button
                label={`Ghost: ${String(checkboxProps.view === 'ghost')}`}
                onClick={() => setCheckboxProps({...checkboxProps, view: 'ghost'})}
                view='Secondary'
              />
            </div>
            <div className='styleButtonMenu'>
              <Button
                label={`L: ${String(checkboxProps.size === 'L')}`}
                onClick={() => setCheckboxProps({...checkboxProps, size: 'L'})}
                view='Secondary'
              />
              <Button
                label={`M: ${String(checkboxProps.size === 'M')}`}
                onClick={() => setCheckboxProps({...checkboxProps, size: 'M'})}
                view='Secondary'
              />
              <Button
                label={`S: ${String(checkboxProps.size === 'S')}`}
                onClick={() => setCheckboxProps({...checkboxProps, size: 'S'})}
                view='Secondary'
              />
              <Button
                label={`XS: ${String(checkboxProps.size === 'XS')}`}
                onClick={() => setCheckboxProps({...checkboxProps, size: 'XS'})}
                view='Secondary'
              />
            </div>
          </div>
        </div>
  )
}

export default CheckboxPage