import React, { Children, FC, useState} from "react";
import { CollapseProps } from "../../../../components/Collapse/type";
import Button from "../../../../components/Button/Button";
import Collapse from "../../../../components/Collapse/Collapse";
import TextField from "../../../../components/TextField";
import StorybookSizeComponent from "../../../../components/StorybookSizeComponent";
import { sizeList } from "../../../../types/size";
import StorybookViewFullComponent from "../../../../components/StorybookViewComponent/StorybookViewFullComponent/StorybookViewFullComponent";
import { ViewFullList } from "../../../../types/view";
import ButtonPageForm from "./CollapsePageForm/CollapsePageForm";

export const CollapsePage: FC<CollapseProps> = () => {
  const [collapseProps, setCollapseProps] = useState<CollapseProps>({
    label: '',
    size: 'M',
    form: 'brick',
    view: 'primary',
    divider: false,
    horizontalSpace: 'S',
    isOpen: false,
    children: '',
  });

  return (
    <div className='styleBoxButton'>
      <div className="styleBox">
        {/**
         * Collapse
         */}
        <Collapse
          {...collapseProps}
          onClick={() => setCollapseProps({...collapseProps, isOpen: true ? !collapseProps.isOpen : false})}
        >
        {collapseProps.children}
        </Collapse>
      </div>
      <div className='styleBoxMenu'>
        <div className='styleButtonMenu'>
          {/**
           * Поле для ввода названия кнопки collaps
           */}
          <TextField
            label='Назвае collaps'
            onChange={e => setCollapseProps({...collapseProps, label: e.target.value})}
            size='L'
          />
          {/**
           * Поле для ввода скрытого текста
           */}
          <TextField
            label='Скрытый текст'
            onChange={e => setCollapseProps({...collapseProps, children: e.target.value})}
            size='L'
          />
        </div>
        <div className='styleButtonMenu'>
          {/**
           * Показывает скрытый текст
           */}
          <Button
            label={`isOpen: ${String(collapseProps.isOpen === true)}`} 
            onClick={() => setCollapseProps({...collapseProps, isOpen: true ? !collapseProps.isOpen : false})}
            view='Secondary'
          />
          {/**
           * Черта
           */}
          <Button
            label={`divider: ${String(collapseProps.divider === true)}`} 
            onClick={() => setCollapseProps({...collapseProps, divider: true ? !collapseProps.divider : false})}
            view='Secondary'
          />
        </div>
        {/**
         * Развмер кнопки
         */}
        <StorybookSizeComponent
          label="Размер кнопки"
          buttonLabel='Размер'
          list={sizeList}
          selectedSize={collapseProps.size}
          onSizeClick={(size) => (setCollapseProps({...collapseProps, size}))}
        />
        {/**
         * Внешний вид
         */}
        <StorybookViewFullComponent
          label='Вид Кнопки'
          buttonLabelViewFull='Вид'
          listViewFull={ViewFullList}
          selecteViewFull={collapseProps.view}
          onViewFullClick={(view) => (setCollapseProps({...collapseProps, view}))}
        />
        {/**
         * Форма
         */}
        <ButtonPageForm
          form={collapseProps.form}
          onFormClick={(form) => setCollapseProps({...collapseProps, form})}
        />
        {/**
         * Отсутпы
         */}
        <StorybookSizeComponent
          label="Горизонтальные отступы"
          buttonLabel='Отступ'
          list={sizeList}
          selectedSize={collapseProps.horizontalSpace}
          onSizeClick={(horizontalSpace) => (setCollapseProps({...collapseProps, horizontalSpace}))}
        />
      </div>
    </div>
  )
}
