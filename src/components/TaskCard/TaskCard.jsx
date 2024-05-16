import React from 'react'
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
const TaskCard = ({title, description}) => {
  return (
<tr  className="bg-gradient-to-bl from-transparent to-black  border-y-2 border-green-500">
    <td className="border text-white px-4 py-2">{title}</td>
      <td className="border border-transparent flex items-center justify-between px-4 py-2 text-white">{description}
        <div className='flex gap-3 items-center justify-center '>
          <FaEdit className='ml-11 hover:text-green-500 transition-all duration-150 hover:cursor-pointer'/>
          <FaRegTrashAlt className='hover:text-red-500 transition-all duration-150 hover:cursor-pointer'/>
        </div>
      </td>
</tr>
  )
}

export default TaskCard