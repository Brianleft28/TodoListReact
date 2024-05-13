import './TaskBoard.css'
import TaskCard from '../TaskCard/TaskCard'


const Board = ({ tasks }) => {
  if (!tasks) {
    return <div className='text-white flex justify-center min-h-full mt-5 text-2xl'>Loading...</div>;
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