import React, { FC, useState } from "react";
import TextField from "../../../components/TextField/TextField";
import Button from "../../../components/Button/Button";
import { ButtonProps } from "../../../components/Button/types";

const ButtonPage: FC<ButtonProps> = () => {
  const [buttonProps, setButtonProps] = useState<ButtonProps>({
    label: 'Хз',
    disabled: false, 
    loading: false,
    view: 'Primary',
    size: 'L',
  });

  /**
   *  Обработчик блокировки кнопки
   */
    const [disabledState, setDisabledState] = useState<boolean>(false);

    /**
     *  Обработчик загрузки кнопки
     */
    const [loadingState, setLoadingState] = useState<boolean>(false);

  function handlDisabledClick() {
    if (disabledState && !loadingState) {
      setDisabledState(false);
      setLoadingState(true);
    } else {
      setDisabledState(true);
      setLoadingState(false);
    }
  }

  function handlLoadingClick() {
    if (!loadingState && disabledState) {
      setLoadingState(true);
      setDisabledState(false);
    } else {
      setLoadingState(false);
      setDisabledState(true);
    }
  }

  function handlLoadDisablClick() {
    setLoadingState(false);
    setDisabledState(false);
  }

  return (
      <div className='styleBoxButton'>
        <div className="styleBox">
          <Button
            {...buttonProps}
          />
        </div>
        <div className='styleBoxMenu'>
          <div className='styleButtonMenu'>
            <TextField
              label='Назвае кнопки'
              onChange={e => setButtonProps({...buttonProps, label: e.target.value})}
              size='L'
            />
          </div>
          <div className='styleButtonMenu'>
            <Button
              label={`Disabled: ${String(disabledState === true)}`} 
              onClick={handlDisabledClick}
              view='Secondary'
            />
            <Button 
              label={`Loading: ${String(loadingState === true)}`} 
              onClick={handlLoadingClick}
              view='Secondary'
            />
            <Button 
              label={`Norm button: ${String((loadingState === false) && (disabledState === false))}`}
              onClick={handlLoadDisablClick}
              view='Secondary'
            />
          </div>
          <div className='styleButtonMenu'>
            <Button
              label={`Primary: ${String(buttonProps.view === 'Primary')}`}
              onClick={() => setButtonProps({...buttonProps, view: 'Primary'})}
              view='Secondary'
            />
            <Button
              label={`Secondary: ${String(buttonProps.view  === 'Secondary')}`}
              onClick={() => setButtonProps({...buttonProps, view:  'Secondary'})}
              view='Secondary'
            />
            <Button
              label={`Ghost: ${String(buttonProps.view  === 'Ghost')}`}
              onClick={() => setButtonProps({...buttonProps, view:  'Ghost'})}
              view='Secondary'
            />
            <Button
              label={`Clear: ${String(buttonProps.view === 'Clear')}`}
              onClick={() => setButtonProps({...buttonProps, view:  'Clear'})}
              view='Secondary'
            />
          </div>
          <div className='styleButtonMenu'>
            <Button
              label={`L: ${String(buttonProps.size === 'L')}`}
              onClick={() => setButtonProps({...buttonProps, size: 'L'})}
              view='Secondary'
            />
            <Button
              label={`M: ${String(buttonProps.size === 'M')}`}
              onClick={() => setButtonProps({...buttonProps, size:  'M'})}
              view='Secondary'
            />
            <Button
              label={`S: ${String(buttonProps.size === 'S')}`}
              onClick={() => setButtonProps({...buttonProps, size:  'S'})}
              view='Secondary'
            />
            <Button
              label={`XS: ${String(buttonProps.size === 'XS')}`}
              onClick={() => setButtonProps({...buttonProps, size:  'XS'})}
              view='Secondary'
            />
          </div>
        </div>
      </div>
  )
}

export default ButtonPage