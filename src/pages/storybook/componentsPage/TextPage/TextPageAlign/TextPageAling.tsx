import React, {FC} from "react";
import { Aling, alignList } from "../../../../../components/Text/types";
import Button from "../../../../../components/Button/Button";

type TextPageAlintProps = {
  align: Aling | undefined;
  isDarkTheme: boolean | undefined;
  onAlingClick: (alint: Aling) => void;
}

const TextPageAling: FC<TextPageAlintProps> = ({align, isDarkTheme, onAlingClick}) => {
  const handleSizeClck = (align: Aling) => () => onAlingClick(align);

  return (
    <div className='styleButtonMenu'>
      {alignList.map((item) => (
        <Button
          key={item}
          isDarkTheme={isDarkTheme}
          label={`${item}: ${String(align === item)}`}
          onClick={handleSizeClck(item)}
          view='Secondary'
          size="M"
        />
        )
      )}
    </div>
    )
}


export default TextPageAling;