import React, { FC } from "react";
import TaskTable, { Task } from "../../components/TaskTable/TaskTable";
import { TaskTableHeaderProps } from "../../components/TaskTable/TaskTableHeader/TaskTableHeader";
/**
 * данные для таблицы
 */
const taskList: Task[] = [
  {
    id: 1,
    name: 'Тестовая задача 1',
    description: 'Описание тестовой задачи',
    isArchived: false,
    isSuccess: false
  },
  {
    id: 2,
    name: 'Тестовая задача 2',
    description: 'Описание тестовой задачи',
    isArchived: false,
    isSuccess: true
  },
  {
    id: 3,
    name: 'Тестовая задача 3',
    description: 'Описание тестовой задачи',
    isArchived: true,
    isSuccess: false
  },
  {
    id: 4,
    name: 'Тестовая задача 4',
    description: 'Описание тестовой задачи',
    isArchived: true,
    isSuccess: true
  }
];
/**
 * Рендер таблицы
 */
const TaskTablePage: FC<TaskTableHeaderProps> = () => {
  return (
    <TaskTable list={taskList}/>
  )
}

export default TaskTablePage;
