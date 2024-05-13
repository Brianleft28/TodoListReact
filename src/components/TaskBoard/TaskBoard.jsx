import './TaskBoard.css'
import TaskCard from '../TaskCard/TaskCard'
import TaskAside from '../TaskAside/TaskAside';


const Board = ({ tasks }) => {
  if (!tasks) {
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
    
    <div className="board">
      {
        tasks.map((task, index) => (
          <TaskCard
          key={index}
          title={task.title}
          description={task.description}
          />
        ))
      }

    </div>
  )
}



export default Board