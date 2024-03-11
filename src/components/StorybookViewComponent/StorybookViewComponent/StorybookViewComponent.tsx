import React, { FC } from "react";
import { ViewType } from '../../../types/view';
import Text from "../../Text/Text";
import Button from "../../Button/Button";

type StorybookViewComponentProps = {
  label: string;
  buttonLabelView: string;
  listView: ViewType[];
  selecteView?: ViewType;
  isDarkTheme?: boolean;
  onViewClick: (view: ViewType) => void;
}

const StorybookViewComponent: FC<StorybookViewComponentProps> = ({
  label,
  buttonLabelView,
  listView = [],
  selecteView,
  isDarkTheme,
  onViewClick,
}) => {
  const handlViewClick = (selecteView: ViewType) => () => onViewClick(selecteView);

  return (
    <div className='styleButtonMenu'>
      <Text label={label} size="S" spacing="S" />
      {listView.map((item) => (
        <Button
          key={item}
          isDarkTheme={isDarkTheme}
          label={`${buttonLabelView} ${item}: ${String(selecteView === item)}`}
          onClick={handlViewClick(item)}
          view='Secondary'
          size="M"  
        />
      )
      )}
    </div>
  )
}

export default StorybookViewComponent;
