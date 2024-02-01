import React, { FC, useState } from "react";
import { RadioProps } from "../../../components/Radio/types";
import Radio from "../../../components/Radio";
import TextField from "../../../components/TextField/TextField";
import Button from "../../../components/Button/Button";

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
      <div>
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
        <div className='styleButtonMenu'>
          <Button
            label={`Primary: ${String(radioProps.view === 'primary')}`}
            onClick={() => setRadioProps({...radioProps, view: 'primary'})}
            view='Secondary'
          />
          <Button
            label={`Ghost: ${String(radioProps.view === 'ghost')}`}
            onClick={() => setRadioProps({...radioProps, view: 'ghost'})}
            view='Secondary'
          />
        </div>
        <div className='styleButtonMenu'>
          <Button
            label={`L: ${String(radioProps.size === 'L')}`}
            onClick={() => setRadioProps({...radioProps, size: 'L'})}
            view='Secondary'
          />
          <Button
            label={`M: ${String(radioProps.size  === 'M')}`}
            onClick={() => setRadioProps({...radioProps, size: 'M'})}
            view='Secondary'
          />
          <Button
            label={`S: ${String(radioProps.size  === 'S')}`}
            onClick={() => setRadioProps({...radioProps, size: 'S'})}
            view='Secondary'
          />
          <Button
            label={`XS: ${String(radioProps.size  === 'XS')}`}
            onClick={() => setRadioProps({...radioProps, size: 'XS'})}
            view='Secondary'
          />
        </div>
      </div>
    </div>
  )
}

export default RadioPage