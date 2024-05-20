import React, { useContext } from 'react'
import ButtonEdit from '../TaskButtons/ButtonEdit.jsx'
/* import ButtonDelete from '../TaskButtons/ButtonDelete.jsx'   */
import { FaRegTrashAlt } from "react-icons/fa";
import TaskContext from '../../context/TaskContext.jsx';


const TaskCard = ({title, description, taskId }) => {

const { deleteTask } = useContext(TaskContext);

  return (
<tr  className="bg-gradient-to-bl from-transparent to-black  border-y-2 border-green-500">
    <td className="border whitespace-normal  text-white px-4 py-2">
      <span className="block  break-words">
      {title}
      </span>
    </td>
    <td className="border border-transparent flex items-center justify-between px-4 py-2 text-white">
    <span className="block whitespace-normal break-words">
      {description}
    </span>
    <div className='flex gap-3 items-center justify-center '>
      <ButtonEdit taskId={taskId}/>   
      <button onClick={() => deleteTask(taskId)    }>
         <FaRegTrashAlt className='hover:text-red-500 transition-all duration-150 hover:cursor-pointer'/>
    </button>
    </div>
    </td>
</tr>
  )
}

export default TaskCard