import React, {FC} from 'react';
import { ChipsPropStatus, chipsStatusList } from '../../../../../components/Chips/types';
import Button from '../../../../../components/Button/Button';


type ButtonPageViewProps = {
  status: ChipsPropStatus | undefined;
  onStatusClick: (status: ChipsPropStatus) => void;
}

const ChipsPageStatus: FC<ButtonPageViewProps> = ({status, onStatusClick}) => {
  const handleStatusClck = (status: ChipsPropStatus) => () => onStatusClick(status);

  return (
  <div className='styleButtonMenu'>
    {chipsStatusList.map((item) => (
      <Button
        key={item}
        label={`Status ${item}: ${String(status === item)}`}
        onClick={handleStatusClck(item)}
        view='Secondary'
        size="M"
      />
      )
    )}
  </div>
  )
}


export default ChipsPageStatus;