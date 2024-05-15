import './TaskBoard.css'
import TaskCard from '../TaskCard/TaskCard'
import TaskAside from '../TaskAside/TaskAside';
import { useTaskService } from '../../hooks/useTaskService';

const Board = () => {

const { tasks } = useTaskService();
  if (tasks.length === 0) {
    return (  
<>
      <div 
      className='text-white flex justify-center min-h-full text-2xl'>
      <h3 className='  my-auto'>
        Comience agregando una tarea
      </h3>
      </div>
      <TaskAside/>
    </>
    )
  }

  return (
    <div className='w-92'>
    <div className="flex max-w-100">
      {
        tasks.map((tasks, index) => (
          <TaskCard
          key={index}
          title={tasks.title}
          description={tasks.description}
          />
        ))
      }
    </div>
      <TaskAside/>
      </div>

  )
}



export default Board