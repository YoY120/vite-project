import React, { FC } from "react";
import { FormChoiceGroup, FormChoiсeGroupList } from "../../../../../components/ChoiceGroup/types";
import Button from "../../../../../components/Button/Button";

type ChoiseGroupFormProps = {
  form?: FormChoiceGroup | undefined;
  isDarkTheme?: boolean | undefined;
  onFormClick: (form: FormChoiceGroup) => void;
}

const ChoiсeGroupPageForm: FC<ChoiseGroupFormProps> = ({form, onFormClick, isDarkTheme}) => {
  const HandlFormClick = (form: FormChoiceGroup) => () => onFormClick(form);

  return (
    <div className='styleButtonMenu'>
      {FormChoiсeGroupList.map((item) => (
        <Button
          key={item}
          isDarkTheme={isDarkTheme}
          label={`form ${item}: ${String(form === item)}`}
          onClick={HandlFormClick(item)}
          view='Secondary'
          size="M"
        />
        )
      )}
    </div>
  )
}

export default ChoiсeGroupPageForm;