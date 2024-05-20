import React from 'react'
import { useTaskService } from '../../hooks/useTaskService'
import { FaRegTrashAlt } from "react-icons/fa";

const ButtonDelete = ({ taskId }) => {

  const{ deleteTask } = useTaskService()
  
  return (
    <>
    <button onClick={() => deleteTask(taskId)    }>
      <FaRegTrashAlt className='hover:text-red-500 transition-all duration-150 hover:cursor-pointer'/>
    </button>
    
    </>
  )
}

export default ButtonDelete