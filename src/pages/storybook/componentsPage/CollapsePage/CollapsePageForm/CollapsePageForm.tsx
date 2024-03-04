import React, {FC} from 'react';
import { formCollapse, formCollapseList } from "../../../../../components/Collapse/type";
import Button from '../../../../../components/Button/Button';


type CollapsePageFormProps = {
  form?: formCollapse | undefined;
  isDarkTheme?: boolean | undefined;
  onFormClick: (form: formCollapse)=> void;
}

const ButtonPageForm: FC<CollapsePageFormProps> = ({form, isDarkTheme, onFormClick}) => {
  const handleFormClck = (form: formCollapse) => () => onFormClick(form);


  return (
  <div className='styleButtonMenu'>
    {formCollapseList.map((item) => (
      <Button
        key={item}
        isDarkTheme={isDarkTheme}
        label={`View ${item}: ${String(form === item)}`}
        onClick={handleFormClck(item)}
        view='Secondary'
        size="M"
      />
      )
    )}
  </div>
  )
}


export default ButtonPageForm;