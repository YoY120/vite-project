import React, { FC, useState } from "react";
import { ChipsProps } from "../../../../components/Chips/types";
import Chips from "../../../../components/Chips/Chips";
import TextField from "../../../../components/TextField";
import Button from "../../../../components/Button/Button";
import StorybookSizeComponent from "../../../../components/StorybookSizeComponent";
import { sizeList } from "../../../../types/size";
import ChipsPageStatus from "./ChipsStatusPage/ChipsStatusPage";

const ChipsList: string[] = ['Кнопка 1', 'Кнопка 2', 'Кнопка 3'];

const ChipsPage: FC<ChipsProps> = () => {
  const [chipsProps, setChipsProps] = useState<ChipsProps>({
    status: 'normal',
    label: 'Chips',
    isActive: true,
    size: 'M',
    onClick: () => (null),
    Chipslist: [],
  })


  return (
    <div className='styleBoxButton'>
      <div className="styleBox">
        <Chips
          Chipslist={ChipsList}
          status={chipsProps.status}
          label={chipsProps.label}
          isActive={chipsProps.isActive}
          size={chipsProps.size}
        />
      </div>
      <div className='styleBoxMenu'>
        {/* <div className='styleButtonMenu'>
          <TextField
            label='Назвае кнопки'
            onChange={e => setChipsProps({...chipsProps, label: e.target.value})}
            size='L'
          />
        </div> */}
        {/**
         * Состояние кнопки
         */}
        <div className='styleButtonMenu'>
          <Button 
            label={`Loading: ${String(chipsProps.isActive === true)}`} 
            onClick={() => setChipsProps({...chipsProps, isActive: true ? !chipsProps.isActive : false})}
            view='Secondary'
          />
        </div>
        {/**
         * Вид кнопки
         */}
        <ChipsPageStatus
          status={chipsProps.status}
          onStatusClick={(status) => setChipsProps({...chipsProps, status})}
        />
        {/**
         * Размер кнопки
        */}
        <StorybookSizeComponent
          label="Размер кнопки"
          buttonLabel='Размер'
          list={sizeList}
          selectedSize={chipsProps.size}
          onSizeClick={(size) => (setChipsProps({...chipsProps, size}))}
        />
      </div>
    </div>
)
  
}

export default ChipsPage