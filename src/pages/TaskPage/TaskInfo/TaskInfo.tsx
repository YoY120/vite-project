import React, {FC} from 'react'
import Text from "../../../components/Text/Text";
import Button from "../../../components/Button/Button";
import { Task } from '../TaskPage';

type TaskInfoProps = {
  task: Task;
  onEditClick: () => void;
}

const TaskInfo: FC<TaskInfoProps> = ({task, onEditClick}) => {
  return (
  <div>
    <Text
      label={task.label}
    />
    <Text
      label={task.description}
    />
    <Text
      label={task.email}
    /> 
    <Button label='Редактировать' onClick={onEditClick}/>
  </div>
  )
}

export default TaskInfo;