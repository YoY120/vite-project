import React, { FC } from "react";
import './TaskTableRow.css';
import { Task } from "../TaskTable";
import TaskTableHeader from "../TaskTableHeader";
import { Column } from "../TaskTableHeader/TaskTableHeader";

type TaskTableRowProps = {
  /**
   * Элемент строки
   */
  row: Task;
  /**
   * Список колоннок таблицы
   */
  columns: Column[];
}

/**
 * Компонент строки в таблице для task
 */
const TaskTableRow: FC<TaskTableRowProps> = ({row, columns}) => {

  return (  
    <tr className="tableRow">
      {columns.map(({key, renderCell, getItemLabel}) => <td className="tableRowCell" key={key}>{
        renderCell ? renderCell(row) : getItemLabel ? getItemLabel(row) : String(row[key])
      }</td>)}
    </tr>
  )
}

export default TaskTableRow;
