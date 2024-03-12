import React, { FC } from "react";
import  './TaskTableHeader.css';
import { Task } from "../TaskTable";

export type Column = {
  label?: string;
  key: keyof Task;
  renderCell?: (row: Task) => React.ReactNode;
  getItemLabel?: (row: Task) => string;
}

export type TaskTableHeaderProps = {
  // headerlist: Task[];
  /**
   * Список колоннок таблицы
   */
  columns?: Column[];
}

/**
 * Компонент шапки таблицы для task
 */
const TaskTableHeader: FC<TaskTableHeaderProps> = ({columns}) => {

  return (
    <tr className="tableHeader">
      {columns?.map((item) => 
        <th key={item.key}>
          {item.label}
        </th>
      )}
    </tr>
  )
}

export default TaskTableHeader;
