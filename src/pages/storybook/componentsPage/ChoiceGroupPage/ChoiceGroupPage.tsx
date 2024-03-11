import React, { FC, useState } from "react";
import { ChoiceGroupProps } from "../../../../components/ChoiceGroup/types";
import ChoiceGroup from "../../../../components/ChoiceGroup/ChoiceGroup";
import Button from "../../../../components/Button/Button";
import StorybookSizeComponent from "../../../../components/StorybookSizeComponent";
import { sizeList } from "../../../../types/size";
import StorybookViewFullComponent from "../../../../components/StorybookViewComponent/StorybookViewFullComponent";
import { ViewList } from "../../../../types/view";
import ChoiseGroupPageForm from "./ChoiceGroupPageForm/ChoiceGroupPageForm";

const choiceGroupList: string[] = [
  'Button', 'Input', 'Radio', 'Checkbox', 'Switch', 'Chips'
];

const ChoiceGroupPage: FC<ChoiceGroupProps> = () => {
  const [choiceGroupProps, setChoiceGroupProps] = useState<ChoiceGroupProps>({
    form: 'brick',
    list: [],
    onClick: (key) => (null),
    selectedItem: '',
    size: 'S',
    view: "ghost",
    disabled: false,
  });

  const [keyChoce, setKeyChose] = useState<string | null>(null);

  return (
    <div className='styleBoxButton'>
        <div className="styleBox">
          <ChoiceGroup
            list={choiceGroupList}
            selectedItem={keyChoce}
            onClick={(key) => setKeyChose(keyChoce === key ? null : key)}
            size={choiceGroupProps.size}
            form={choiceGroupProps.form}
            view={choiceGroupProps.view}
            disabled={choiceGroupProps.disabled}
          />
        </div>
        <div className='styleBoxMenu'>
          <div className='styleButtonMenu'>
            <Button
              label={`Disabled: ${String(choiceGroupProps.disabled === true)}`} 
              onClick={() => setChoiceGroupProps({...choiceGroupProps, disabled: true ? !choiceGroupProps.disabled : true})}
              view='Secondary'
            />
          </div>
          <StorybookViewFullComponent
            label="Вид checkbox"
            buttonLabelViewFull='Вид'
            listViewFull={ViewList}
            selecteViewFull={choiceGroupProps.view}
            onViewFullClick={(view) => (setChoiceGroupProps({...choiceGroupProps, view}))}
          />
          <StorybookSizeComponent
            label="Размер кнопки"
            buttonLabel='Размер'
            list={sizeList}
            selectedSize={choiceGroupProps.size}
            onSizeClick={(size) => (setChoiceGroupProps({...choiceGroupProps, size}))}
          />
          <ChoiseGroupPageForm
            form={choiceGroupProps.form}
            onFormClick={(form) => (setChoiceGroupProps({...choiceGroupProps, form}))}
          />
      </div>
    </div>
  )
}

export default ChoiceGroupPage;
