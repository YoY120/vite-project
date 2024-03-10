import React, {FC, useState} from "react"


import TaskInfo from './TaskInfo'
import TaskForm from './TaskForm'

export type Task = {
  label: string;
  description: string;
  email: string;
  coments?: string[];
}

const initialTaskValue: Task = {
  label: 'Стандартная задача',
  description: 'Описание стандартной задачи',
  email: '123@mail.ru'
}

const TaskPage: FC  = () => {
  const task = initialTaskValue;

  const [isEdit, setIsEdit] = useState(false)



  // Обработчики
  const handleEditClick = () => {
    setIsEdit(true);
  }

  return (
  <div>
    {isEdit 
      ? <TaskForm
          task={task}
        /> 
      : <TaskInfo 
          task={task}
          onEditClick={handleEditClick}
        /> 
    }
  </div>
  )
}

export default TaskPage