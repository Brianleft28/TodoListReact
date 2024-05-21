import React, { useContext } from 'react'
import ButtonEdit from '../TaskButtons/ButtonEdit.jsx'
/* import ButtonDelete from '../TaskButtons/ButtonDelete.jsx'   */
import { FaRegTrashAlt } from "react-icons/fa";
import TaskContext from '../../context/TaskContext.jsx';


const TaskCard = ({title, description, taskId, onEditClick, status}) => {

const { deleteTask } = useContext(TaskContext);
console.log(status)
  return (
<tr  className="bg-gradient-to-bl from-transparent to-black  border-y-2 border-green-500">
    <td className="border whitespace-normal  text-white px-4 py-2">
      <div className='flex justify-between '>

      <span className="inline-block  ">
      {title}
      </span>
      <div className='inline-block items-center justify-end'>
      <button className='mr-3' onClick={onEditClick}>
      <ButtonEdit />   
      </button>
      <button onClick={() => deleteTask(taskId)    }>
         <FaRegTrashAlt className='hover:text-red-500 transition-all duration-150 hover:cursor-pointer'/>
    </button>
    </div>
      </div>
    </td>
    <td className="border border-transparent flex items-center justify-between px-4 py-2 text-white">
    <span className="block whitespace-normal break-words">
      {description}
    </span>
    </td>
    {
    status === true ?  (

      <td className='border  whitespace-normal text-white px-4 py-2'>
      <div className='flex justify-center bg-green-300 p-2'>
      Me are the next function XD
      </div>
    </td>
      ) :  <td className='border whitespace-normal text-white px-4 py-2'>
      no hay nada que ver acá
    </td>
    }
</tr>
  )
}

export default TaskCard