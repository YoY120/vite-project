import React, { FC } from "react";
import { ViewFull } from "../../../types/view";
import Text from "../../Text/Text";
import Button from "../../Button/Button";

type StorybookViewFullComponentProps = {
  label: string;
  buttonLabelViewFull: string;
  listViewFull: ViewFull[];
  selecteViewFull?: ViewFull;
  isDarkTheme?: boolean;
  onViewFullClick: (view: ViewFull) => void;
}

const StorybookViewFullComponent: FC<StorybookViewFullComponentProps> = ({
  label,
  buttonLabelViewFull,
  listViewFull = [],
  selecteViewFull,
  isDarkTheme,
  onViewFullClick,
}) => {
  const handlViewFullClick = (selecteViewFull: ViewFull) => () => onViewFullClick(selecteViewFull);

  return (
    <div className='styleButtonMenu'>
      <Text label={label} size="S" spacing="S" />
      {listViewFull.map((item) => (
        <Button
          key={item}
          isDarkTheme={isDarkTheme}
          label={`${buttonLabelViewFull} ${item}: ${String(selecteViewFull === item)}`}
          onClick={handlViewFullClick(item)}
          view='Secondary'
          size="M"  
        />
      )
      )}
    </div>
  )
}

export default StorybookViewFullComponent;