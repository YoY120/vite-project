import React, { FC } from "react";
import TaskTableRow from "./TaskTableRow";
import TaskTableHeader from './TaskTableHeader';
import { Column } from "./TaskTableHeader/TaskTableHeader";
import Checkbox from "../Checkbox";
import Button from "../Button";
import "./TaskTable.css";

export type Task = {
  /**
   * Уникальный номер task
   */
  id: number;
  /**
   * Название
   */
  name: string;
  /**
   * Описание
   */
  description: string;
  /**
   * Флаг успешного выполения
   */
  isSuccess: boolean;
  /**
   * Флаг архивного 
   */
  isArchived: boolean;
}

type TaskTableProps = {
  list: Task[];
}

type TaskTableRowProps = {
  row: Task;
}

const taskCoumns: Column[] = [
  {
    key: 'isSuccess', 
    label: '',
    renderCell: (row) =>
    <Checkbox 
      checked={row.isSuccess}
      classNames="TableChecboxCenter"
    />
  },
  {
    key: 'id', 
    label: 'Номер', 
    getItemLabel: (row) => `№ ${row.id}`
  }, 
  {
    key: 'name', 
    label: 'Название'
  },
  {
    key: 'description', 
    label: 'Описание'},
  {
    key: 'isArchived', 
    label: 'Архив',
    renderCell: (row) => 
    <Checkbox 
      label={row.isArchived ? 'Сохранен' : 'Не сохранен'} 
      checked={row.isArchived}
      classNames="TableChecboxCenter"
    />
  }
]

/**
 * Компонент таблицы для task
 */
const TaskTable: FC<TaskTableProps> = ({list}) => (
  <div className="backgroundTable">
    <table className="Table">
      <thead className="tableHeard">
        <TaskTableHeader columns={taskCoumns}/>
      </thead>
      <tbody className="tableBody">
        {list.map((item) => <TaskTableRow key={item.id} columns={taskCoumns} row={item}/>)}
      </tbody>
    </table>
  </div>
    
)


export default TaskTable;
