import React, { FC } from "react";
import './TaskTableRow.css';
import { Task } from "../../TaskTable";
import TaskTableHeader from "../TaskTableHeader/TaskTableHeader";

type TaskTableRowProps = {
  rowlist: Task[];
}

const TaskTableRow: FC<TaskTableRowProps> = ({rowlist}) => {
  /**
   * Функция, которая переберает все значения в массиве
   */
  const renderTableRow = rowlist.map(function(item, id) {
    for (id; id < rowlist.length; id++) {
      return (
        <td key={item.id}>
          {item.description}
        </td>
    )}
  })

  

  return (
    /**
     * Всего лишь попытки
     */
    // <div>
    //   {rowlist.map((item, index) => (
    //     <table>
    //       <TaskTableHeader headerlist={[item]}/>
    //       <tbody>
    //         <tr key={item.id}>
    //           <td>
    //             {item.description}
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   ))}
    // </div>

    // <table>
    //   {Array(rowlist).fill(rowlist).map((item, id) => <TaskTableHeader key={id} headerlist={item}/>)}
    //   <tbody>
    //     <tr>
    //       {rowlist.map((item) => (
    //         <td key={item.id++}>
    //           {item.description}
    //         </td>
    //       ))}
    //     </tr>
    //   </tbody>
    // </table>

    /**
     * Рендер таблицы
     */
    <table className="Table">
      {/**
       * Рендер заголовка таблицы
       */}
      {Array(rowlist).fill(rowlist).map((item, id) => <TaskTableHeader key={id} headerlist={item}/>)}
      {/**
       * Рендер строки
       */}
      <tbody className="tableRow">
        <tr>
          {renderTableRow}
        </tr>
      </tbody>
    </table>
  )
}

export default TaskTableRow;