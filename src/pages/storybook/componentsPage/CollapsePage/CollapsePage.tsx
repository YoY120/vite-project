import React, { FC, useState} from "react";
import { CollapseProps } from "../../../../components/Collapse/type";
import Button from "../../../../components/Button/Button";
import Collapse from "../../../../components/Collapse/Collapse";
import TextField from "../../../../components/TextField/TextField";
import StorybookSizeComponent from "../../../../components/StorybookSizeComponent";
import { sizeList } from "../../../../types/size";
import StorybookViewFullComponent from "../../../../components/StorybookViewComponent/StorybookViewFullComponent/StorybookViewFullComponent";
import { ViewFullList } from "../../../../types/view";
import ButtonPageForm from "./CollapsePageForm/CollapsePageForm";

const CollapsePageL: FC<CollapseProps> = () => {
  const [collapseProps, setCollapseProps] = useState<CollapseProps>({
    label: '',
    size: 'M',
    form: 'brick',
    view: 'primary',
    divider: false,
    horizontalSpace: 'S',
    children: '',
    isOpen: false,
  });

  return (
    <div className='styleBoxButton'>
      <div className="styleBox">
        <Collapse
          {...collapseProps}
        />
      </div>
      <div className='styleBoxMenu'>
        <div className='styleButtonMenu'>
          <TextField
            label='Назвае кнопки'
            onChange={e => setCollapseProps({...collapseProps, label: e.target.value})}
            size='L'
          />
          <TextField
            label='Назвае кнопки'
            onChange={e => setCollapseProps({...collapseProps, children: e.target.value})}
            size='L'
          />
        </div>
        <div className='styleButtonMenu'>
          <Button
            label={`isOpen: ${String(collapseProps.isOpen === true)}`} 
            onClick={() => setCollapseProps({...collapseProps, isOpen: true ? !collapseProps.isOpen : false})}
            view='Secondary'
          />
        </div>
        <StorybookSizeComponent
          label="Размер кнопки"
          buttonLabel='Размер'
          list={sizeList}
          selectedSize={collapseProps.size}
          onSizeClick={(size) => (setCollapseProps({...collapseProps, size}))}
        />
        <StorybookViewFullComponent
          label='Вид Кнопки'
          buttonLabelViewFull='Вид'
          listViewFull={ViewFullList}
          selecteViewFull={collapseProps.view}
          onViewFullClick={(view) => (setCollapseProps({...collapseProps, view}))}
        />
        <ButtonPageForm
          form={collapseProps.form}
          onFormClick={(form) => setCollapseProps({...collapseProps, form})}
        />
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

export default CollapsePageL;