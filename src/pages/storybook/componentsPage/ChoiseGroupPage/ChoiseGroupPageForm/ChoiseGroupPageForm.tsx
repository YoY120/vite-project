import React, { FC } from "react";
import { FormChoiseGroup, FormChoiseGroupList } from "../../../../../components/ChoiseGroup/types";
import Button from "../../../../../components/Button/Button";

type ChoiseGroupFormProps = {
  form?: FormChoiseGroup | undefined;
  isDarkTheme?: boolean | undefined;
  onFormClick: (form: FormChoiseGroup) => void;
}

const ChoiseGroupPageForm: FC<ChoiseGroupFormProps> = ({form, onFormClick, isDarkTheme}) => {
  const HandlFormClick = (form: FormChoiseGroup) => () => onFormClick(form);

  return (
    <div className='styleButtonMenu'>
      {FormChoiseGroupList.map((item) => (
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

export default ChoiseGroupPageForm;