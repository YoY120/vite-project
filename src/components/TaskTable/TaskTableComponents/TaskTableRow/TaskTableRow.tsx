import React, { FC } from "react";
import './TaskTableRow.css';
import { Task } from "../../TaskTable";
import TaskTableHeader from "../TaskTableHeader/TaskTableHeader";

type TaskTableRowProps = {
  rowlist: Task[];
}

const TaskTableRow: FC<TaskTableRowProps> = ({rowlist}) => {
  return (
    // <div>
    //   {rowlist.map((item) => (
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
    <table>
      {rowlist.map((item) => <TaskTableHeader headerlist={[item]}/>)}
      <tbody>
        <tr>
          {rowlist.map((TaskTableRowProps) => (
            <td key={TaskTableRowProps.id}>
              {TaskTableRowProps.description}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default TaskTableRow;