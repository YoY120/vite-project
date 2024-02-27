import React, { FC } from "react";
import { Weight, weightList } from "../../../../../components/Text/types";
import Button from "../../../../../components/Button/Button";

type TextPageWeightProps = {
  weight: Weight | undefined;
  isDarkTheme: boolean | undefined;
  onWeightClick: (Weight: Weight) => void;
}

const TextPageWeight: FC<TextPageWeightProps> = ({weight, isDarkTheme, onWeightClick}) => {
  const handleSizeClck = (Weight: Weight) => () => onWeightClick(Weight);

  return (
  <div className='styleButtonMenu'>
    {weightList.map((item) => (
      <Button
        key={item}
        isDarkTheme={isDarkTheme}
        label={`${item}_Weight: ${String(weight === item)}`}
        onClick={handleSizeClck(item)}
        view='Secondary'
        size="M"
      />
      )
    )}
  </div>
  )

}

export default TextPageWeight;