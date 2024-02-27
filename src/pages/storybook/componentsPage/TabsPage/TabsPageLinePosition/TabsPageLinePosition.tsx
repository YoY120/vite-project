import React, { FC } from "react";
import Button from "../../../../../components/Button/Button";
import { linePositionTabs, linePositionTabsList } from "../../../../../components/Tabs/type";

type TabsPageLinePositionProps = {
  linePosition: linePositionTabs | undefined ;
  isDarkTheme?: boolean | undefined;
  onTabsLinePositionClick: (linePosition: linePositionTabs) => void;
}

const TabsPageLinePosition: FC<TabsPageLinePositionProps> = ({linePosition, isDarkTheme, onTabsLinePositionClick}) => {
  const handleTextViewClick = (linePosition: linePositionTabs) => () => onTabsLinePositionClick(linePosition);  
  
  return (
    <div className="styleButtonMenu">
      {linePositionTabsList.map((item) => (
        <Button
          key = {item}
          isDarkTheme = {isDarkTheme}
          label={`${item}: ${String(linePosition === item)}`}
          onClick={handleTextViewClick(item)}
          view='Secondary'
          size="M"
        />
      )
      )}
    </div>
  )
}

export default TabsPageLinePosition;