import React, { FC } from "react";
import  './TaskTableHeader.css';
import { Task } from "../../TaskTable";

export type TaskTableHeaderProps = {
  headerlist: Task[];
}

const TaskTableHeader: FC<TaskTableHeaderProps> = ({headerlist}) => {

  // const renderTableHeader = (item) => {
  //   return (
  //     {headerlist.map((item) => (
  //       <th key={item.id}>
  //         {item.name}
  //       </th>
  //     ))}
  //   )
  // }
  /**
   * Функция, котороая переюерает значения массива
   */
  const renderTableHeader = headerlist.map(function(item, id) {
    for (id; id < headerlist.length; id++) {
      return (
            <th key={item.id}>{item.name}</th>
          )
      }
    })
  /**
   * возвращает значения масива
   */
  return (
    <thead className="tableHeader">
      <tr>
        {renderTableHeader}
      </tr>
    </thead>
  )
}

export default TaskTableHeader;