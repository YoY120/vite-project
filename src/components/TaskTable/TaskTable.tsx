import React, { FC } from "react";
import TaskTableRow from "./TaskTableComponents/TaskTableRow/TaskTableRow";

export type Task = {
  id: number;
  name: string;
  description: string;
  isSuccess: boolean;
  isArchived: boolean;
}

type TaskTableProps = {
  list: Task[];
}

type TaskTableRowProps = {
  row: Task;
}

const TaskTable: FC<TaskTableProps> = ({list}) => {
  return (
    list.map((item) => <TaskTableRow key={item.id} rowlist={[item]}/>)
  )
}

// list.map((item) => <TaskTableRow/>)

// TaskTableHeader
// TaskTableRow

export default TaskTable;
