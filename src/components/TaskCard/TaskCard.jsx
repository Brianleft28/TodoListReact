import React from 'react'

const TaskCard = ({title, description}) => {
  return (
    <div className='m-4 w-64 flex flex-col flex-wrap p-2 text-white h-30 bg-green-500 shadow-md rounded-sm text-xl'>
        <div className='bg-black p-2'>
          <h4>Titulo: {title}</h4>
        </div>
        <div className='bg-white text-gray-900 p-2'>
          <p>Descripcion: {description}</p>
        </div>
    </div>
  )
}

export default TaskCard