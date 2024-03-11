import React, { FC } from "react";
import Button from "../../../../../components/Button/Button";
import { FieldStatus, fieldStatusList } from "../../../../../components/TextField/types";

type TextFieldPageStatusProps = {
  status: FieldStatus | undefined;
  onTextFieldStatusClick: (status: FieldStatus ) => void;
}

const TextFieldPageStatus: FC<TextFieldPageStatusProps> = ({status, onTextFieldStatusClick}) => {
  const handlTextFieldStatusClick = (status: FieldStatus) => () => onTextFieldStatusClick(status);

  return (
    <div className='styleButtonMenu'>
      <p>Вид поля для ввода</p>
      {fieldStatusList.map((index) => (
        <Button
          key={index}
          label={`${index}: ${String(status === index)}`}
          onClick={handlTextFieldStatusClick(index)}
          view='Secondary'
          size="M"
        />
        )
      )}
    </div>
  )
}

export default TextFieldPageStatus;
