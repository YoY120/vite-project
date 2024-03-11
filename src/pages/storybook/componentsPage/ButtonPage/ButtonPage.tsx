import React, { FC, useState } from "react";
import TextField from "../../../../components/TextField";
import Button from "../../../../components/Button/Button";
import { ButtonProps } from "../../../../components/Button/types";
import ButtonPageView from "./ButtonPageView/ButtonPageView";
import { sizeList } from "../../../../types/size";
import StorybookSizeComponent from "../../../../components/StorybookSizeComponent";

const ButtonPage: FC<ButtonProps> = () => {
  const [buttonProps, setButtonProps] = useState<ButtonProps>({
    label: 'Кнопка',
    disabled: false, 
    loading: false,
    view: 'Primary',
    size: 'L',
  });

  return (
      <div className='styleBoxButton'>
        <div className="styleBox">
          <Button
            {...buttonProps}
          />
        </div>
        {/**
         * текст в кнопке
         */}
        <div className='styleBoxMenu'>
          <div className='styleButtonMenu'>
            <TextField
              label='Назвае кнопки'
              onChange={e => setButtonProps({...buttonProps, label: e.target.value})}
              size='L'
            />
          </div>
          {/**
           * Состояние кнопки
           */}
          <div className='styleButtonMenu'>
            <Button
              label={`Disabled: ${String(buttonProps.disabled === true)}`} 
              onClick={() => setButtonProps({...buttonProps, disabled: true ? !buttonProps.disabled : true})}
              view='Secondary'
            />
            <Button 
              label={`Loading: ${String(buttonProps.loading === true)}`} 
              onClick={() => setButtonProps({...buttonProps, loading: true ? !buttonProps.loading : true})}
              view='Secondary'
            />
            <Button 
              label={`Norm button: ${String((buttonProps.loading === false) && (buttonProps.disabled === false))}`}
              onClick={() => setButtonProps({...buttonProps, disabled: true, loading: true && (!buttonProps.disabled && !buttonProps.loading)})}
              view='Secondary'
            />
          </div>
          {/**
           * Вид кнопки
           */}
          <ButtonPageView
            view={buttonProps.view}
            onViewClick={(view) => (setButtonProps({...buttonProps, view}))}
          />
          {/**
           * Размер кнопки
          */}
          <StorybookSizeComponent
            label="Размер кнопки"
            buttonLabel='Размер'
            list={sizeList}
            selectedSize={buttonProps.size}
            onSizeClick={(size) => (setButtonProps({...buttonProps, size}))}
          />
        </div>
      </div>
  )
}


export default ButtonPage
