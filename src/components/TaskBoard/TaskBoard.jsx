import TaskCard from '../TaskCard/TaskCard'
import TaskAside from '../TaskAside/TaskAside';
import { useContext, useEffect } from 'react';
import TaskContext from '../../context/TaskContext';

const Board = () => {

const { tasks }  = useContext(TaskContext);

useEffect (() => {
  console.log('tasks', tasks)
},[tasks])

if (!tasks || tasks.length === 0) {
    return (  
    <>
      <div className='text-white flex justify-center min-h-full text-2xl'>
        <h3 className='  my-auto'>Comience agregando una tarea</h3>
      </div>
      <TaskAside/>
    </>
    )
  }

  return (  
  <div className='items-center mt-3 flex flex-col w-full'>
    <div className='w-full flex justify-center'>
      <div className='w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto flex justify-center'>
        <table className="shadow-lg mx-auto w-full table-auto border-collapse border-y-2 border-x-2 border-green-500">
          <thead>
            <tr className="selection:bg-none hover:cursor-default bg-green-500 border-b-4 border-gray-500 text-white">
              <th className="border border-green-500 px-4 py-2">Título</th>
              <th className="border border-green-500 px-4 py-2">Descripción</th>
            </tr>
          </thead>
          <tbody>
            {
            tasks.map((task, index) => (
              <TaskCard taskId={task.id} title={task.title} description={task.description} key={index} />
            ))
            }
          </tbody>
        </table>
    </div>
  </div>
  <TaskAside />
</div>

  )
}



export default Board