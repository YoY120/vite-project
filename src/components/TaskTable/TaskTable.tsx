import React, { FC } from "react";

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
  return <>TaskTable</>
}

// list.map((item) => <TaskTableRow/>)

// TaskTableHeader
// TaskTableRow

export default TaskTable;
