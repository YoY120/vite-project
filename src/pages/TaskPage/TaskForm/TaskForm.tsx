import React, {FC} from 'react'
import Text from '../../../components/Text/Text';
import { Task } from '../TaskPage';

type TaskFormOarops = {
  task: Task
}

const TaskForm: FC<TaskFormOarops> = ({task}) => {
  return (
  <div>
    <Text
      label = {task.label}
    />
  </div>
  )
};

export default TaskForm;
