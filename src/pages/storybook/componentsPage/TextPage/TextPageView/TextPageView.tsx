import React, { FC } from "react";
import { TextViewType,  textViewTypeList} from "../../../../../components/Text/types";
import Button from "../../../../../components/Button/Button";

type TextPageViewProps = {
  textView: TextViewType | undefined ;
  isDarkTheme: boolean | undefined;
  onTextViewClick: (textView: TextViewType) => void;
}

const TextPageView: FC<TextPageViewProps> = ({textView, isDarkTheme, onTextViewClick}) => {
  const handleTextViewClick = (textView: TextViewType) => () => onTextViewClick(textView);  
  
  return (
    <div className="styleButtonMenu">
      {textViewTypeList.map((item) => (
        <Button
          key = {item}
          isDarkTheme = {isDarkTheme}
          label={`${item}: ${String(textView === item)}`}
          onClick={handleTextViewClick(item)}
          view='Secondary'
          size="M"
        />
      )
      )}
    </div>
  )
}

export default TextPageView;
