import React, { FC, useState } from "react";
import { ChoiseGroupProps } from "../../../../components/ChoiseGroup/types";
import ChoiseGroup from "../../../../components/ChoiseGroup/ChoiseGroup";
import Button from "../../../../components/Button/Button";
import StorybookSizeComponent from "../../../../components/StorybookSizeComponent";
import { sizeList } from "../../../../types/size";
import StorybookViewFullComponent from "../../../../components/StorybookViewComponent/StorybookViewFullComponent";
import { ViewList } from "../../../../types/view";
import ChoiseGroupPageForm from "./ChoiseGroupPageForm/ChoiseGroupPageForm";

const choiseGroupList: string[] = [
  'Button', 'Input', 'Radio', 'Checkbox', 'Switch', 'Chips'
];

const ChoiseGroupPage: FC<ChoiseGroupProps> = () => {
  const [choiseGroupProps, setChoiseGroupProps] = useState<ChoiseGroupProps>({
    form: 'brick',
    list: [],
    onClick: (key) => (null),
    selectedItem: '',
    size: 'S',
    view: "ghost",
    disabled: false,
  });

  const [keyChose, setKeyChose] = useState<string | null>(null);

  return (
    <div className='styleBoxButton'>
        <div className="styleBox">
          <ChoiseGroup
            list={choiseGroupList}
            selectedItem={keyChose}
            onClick={(key) => setKeyChose(keyChose === key ? null : key)}
            size={choiseGroupProps.size}
            form={choiseGroupProps.form}
            view={choiseGroupProps.view}
            disabled={choiseGroupProps.disabled}
          />
        </div>
        <div className='styleBoxMenu'>
          <div className='styleButtonMenu'>
            {/**
             * Состояние кнопки
             */}
            <Button
              label={`Disabled: ${String(choiseGroupProps.disabled === true)}`} 
              onClick={() => setChoiseGroupProps({...choiseGroupProps, disabled: true ? !choiseGroupProps.disabled : true})}
              view='Secondary'
            />
          </div>
          {/**
           * Вид кнопки
           */}
          <StorybookViewFullComponent
            label="Вид checkbox"
            buttonLabelViewFull='Вид'
            listViewFull={ViewList}
            selecteViewFull={choiseGroupProps.view}
            onViewFullClick={(view) => (setChoiseGroupProps({...choiseGroupProps, view}))}
          />
          {/**
           * Размер кнопки
          */}
          <StorybookSizeComponent
            label="Размер кнопки"
            buttonLabel='Размер'
            list={sizeList}
            selectedSize={choiseGroupProps.size}
            onSizeClick={(size) => (setChoiseGroupProps({...choiseGroupProps, size}))}
          />
          {/**
           *  Форма
           */}
          <ChoiseGroupPageForm
            form={choiseGroupProps.form}
            onFormClick={(form) => (setChoiseGroupProps({...choiseGroupProps, form}))}
          />
      </div>
    </div>
  )
}

export default ChoiseGroupPage