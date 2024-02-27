import React, { FC } from "react";
import TextField from "../../../../../components/TextField/TextField";

type LabelTextField = 'Placeholder' | 'Label' | 'Caption';

const TextFieldListList: LabelTextField[] = ['Placeholder', 'Label', 'Caption'];

type TextFiledPegeInputProps = {
  label: string | undefined;
  // label: LabelTextField | undefined;
  onTextFieldInputChange: (label) => void;
}

const TextFieldInput: FC<TextFiledPegeInputProps> = ({label, onTextFieldInputChange}) => {
  const handlTextFieldInputChangle = (label) => () => onTextFieldInputChange(label);

  return (
    <div className='styleImputMenu forInput'>
      {TextFieldListList.map((index) => (
          <TextField
            key={index}
            label={`${String(label === index)}`}
            onChange={handlTextFieldInputChangle(index)}
            size='L'
          />
        )
      )}
    </div>
  )
}

export default TextFieldInput;