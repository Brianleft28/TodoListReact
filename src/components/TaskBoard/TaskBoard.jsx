import TaskCard from '../TaskCard/TaskCard'
import TaskAside from '../TaskAside/TaskAside';
import { useTaskService } from '../../hooks/useTaskService';

const Board = () => {

const { tasks } = useTaskService();
if (tasks.length === 0 || tasks === '') {
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
<div className=' mt-3 flex justify-center'>
  <div className=' align-middle max-w-[985px] md:w-screen flex justify-center items-center'>
    <table className="shadow-lg max-w-full w-full table-auto border-collapse border-y-2 border-x-2  border-green-500">
      <thead>
        <tr className="selection:bg-none hover:cursor-default bg-green-500 border-b-4 border-gray-500 text-white">
          <th className="border border-green-500  px-4 py-2">Título</th>
          <th className="border border-green-500 px-4 py-2">Descripción</th>
        </tr>
      </thead>
      <tbody >
        {tasks.map((task, index) => (
          <TaskCard title={task.title} description={task.description} key={index}/>
        ))}
      </tbody>
    </table>
  </div>
  <TaskAside />
</div>

  )
}



export default Board