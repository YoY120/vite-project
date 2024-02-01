import React, { FC, useState } from "react";
import { TextFieldProps } from "../../../components/TextField/types";
import TextField from "../../../components/TextField/TextField";
import Button from "../../../components/Button/Button";

const TextFieldPage: FC<TextFieldProps> = () => {

  const [textFilefProps, setTextFilefProps] = useState<TextFieldProps>({
    label: '', 
    caption: '',
    placeholder: '', 
    disabled: false, 
    status: 'default', 
    size: 'L', 
  })

  return (
    <div className='styleBlockInput'>
            <div className='styleBox'>
            <TextField
              {...textFilefProps}
              />
            </div>
            <div className='styleBoxMenu'>
              <div className='styleImputMenu forInput'>
                <TextField
                  label='Placeholder:'
                  onChange={e => setTextFilefProps({...textFilefProps, placeholder: e.target.value})}
                  size='L'
                />
                <TextField
                  label='Label:'
                  onChange={e => setTextFilefProps({...textFilefProps, label: e.target.value})}
                  size='L'
                />
                <TextField
                  label='Caption:'
                  onChange={e => setTextFilefProps({...textFilefProps, caption: e.target.value})}
                  size='L'
                />
              </div>
              <div className='styleButtonMenu'>
                <Button
                  label={`Disabled: ${String(textFilefProps.disabled  === true)}`} 
                  onClick={e => setTextFilefProps({...textFilefProps, disabled: true ? !textFilefProps.disabled : true})}
                  view='Secondary'
                />
              </div>
              <div className='styleButtonMenu'>
                <Button
                  label={`default: ${String(textFilefProps.status === 'default')}`}
                  onClick={() => setTextFilefProps({...textFilefProps, status: 'default'})}
                  view='Secondary'
                />
                <Button
                  label={`success: ${String(textFilefProps.status === 'success')}`}
                  onClick={() => setTextFilefProps({...textFilefProps, status: 'success'})}
                  view='Secondary'
                />
                <Button
                  label={`warning: ${String(textFilefProps.status === 'warning')}`}
                  onClick={() => setTextFilefProps({...textFilefProps, status: 'warning'})}
                  view='Secondary'
                />
                <Button
                  label={`alert: ${String(textFilefProps.status === 'alert')}`}
                  onClick={() => setTextFilefProps({...textFilefProps, status: 'alert'})}
                  view='Secondary'
                />
              </div>
              <div className='styleButtonMenu'>
                <Button
                  label={`L: ${String(textFilefProps.size === 'L')}`}
                  onClick={() => setTextFilefProps({...textFilefProps, size: 'L'})}
                  view='Secondary'
                />
                <Button
                  label={`M: ${String(textFilefProps.size === 'M')}`}
                  onClick={() => setTextFilefProps({...textFilefProps, size: 'M'})}
                  view='Secondary'
                />
                <Button
                  label={`S: ${String(textFilefProps.size === 'S')}`}
                  onClick={() => setTextFilefProps({...textFilefProps, size: 'S'})}
                  view='Secondary'
                />
                <Button
                  label={`XS: ${String(textFilefProps.size === 'XS')}`}
                  onClick={() => setTextFilefProps({...textFilefProps, size: 'XS'})}
                  view='Secondary'
                />
              </div>
            </div>
          </div>
  )
}

export default TextFieldPage