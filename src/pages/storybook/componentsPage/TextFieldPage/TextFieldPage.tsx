import React, { FC, useState } from "react";
import { TextFieldProps } from "../../../../components/TextField/types";
import TextField from "../../../../components/TextField/TextField";
import Button from "../../../../components/Button/Button";
import TextFieldPageStatus from "./TextFieldPageStatus/TextFieldPageStatus";
import TextFieldInput from "./TextFieldPageInput/TextFieldPageInput";
import StorybookSizeComponent from "../../../../components/StorybookSizeComponent";
import { sizeList } from "../../../../types/size";


const TextFieldPage: FC<TextFieldProps> = (labelText) => {

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
        {/** 
         * TODO:ПОЛЕ ДЛЯ ВВОДА!
        */}
        {/* <TextFieldInput
          label={textFilefProps}
          onTextFieldInputChange={(textFilefProps) => (setTextFilefProps({...textFilefProps: e.target.values}))}
        /> */}
        <div className='styleButtonMenu'>
          <Button
            label={`Disabled: ${String(textFilefProps.disabled  === true)}`} 
            onClick={e => setTextFilefProps({...textFilefProps, disabled: true ? !textFilefProps.disabled : true})}
            view='Secondary'
          />
        </div>
        {/**
         * Выбор статус поля для ввода
         */}
        <TextFieldPageStatus
          status={textFilefProps.status}
          onTextFieldStatusClick={(status) => (setTextFilefProps({...textFilefProps, status}))}
        />
        {/**
         * Кнопки выбора размера для поля вво
         */}
        <StorybookSizeComponent
          label="Размер Поля для ввода"
          buttonLabel='Размер'
          list={sizeList}
          selectedSize={textFilefProps.size}
          onSizeClick={(size) => (setTextFilefProps({...textFilefProps, size}))}
        />
      </div>
    </div>
  )
}

export default TextFieldPage