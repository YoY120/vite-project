import React, { FC } from "react";
import  './TaskTableHeader.css';
import { Task } from "../../TaskTable";

export type TaskTableHeaderProps = {
  headerlist: Task[];
}

const TaskTableHeader: FC<TaskTableHeaderProps> = ({headerlist}) => {
  return (
    <thead>
      <tr>
        {headerlist.map((TaskTableHeaderProps) => (
          <th key={TaskTableHeaderProps.id}>
            {TaskTableHeaderProps.name}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TaskTableHeader;