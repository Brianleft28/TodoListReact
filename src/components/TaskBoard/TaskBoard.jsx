import './taskboard.css';

import TaskCard from '../TaskCard/TaskCard';
import TaskAside from '../TaskAside/TaskAside';
import { useContext, useEffect } from 'react';
import TaskContext from '../../context/TaskContext';
import TaskEditModal from '../TaskEditModal/TaskEditModal';

const Board = () => {
  const { isOpen, tasks, setIsOpen, setCurrentTask } = useContext(TaskContext);

  const handleEditClick = (task) => {
    setCurrentTask(task);
    setIsOpen(true);
  };

  if (!tasks || tasks.length === 0) {
    return (
      <>
        <div className="text-neutral-content flex justify-center min-h-full text-2xl">
          <h3 className="my-auto ">Comience agregando una tarea</h3>
        </div>
        <TaskAside />
      </>
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-xs mx-auto justify-around-row">
          {/* head */}
          <thead>
            <tr className="pb-2 p-2 border-b-1 border-neutral">
              <th>Titulo</th>
              <th>Descripción</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <br />
            {tasks.map((task) => (
              <>
                <TaskCard
                  taskId={task.id}
                  title={task.title}
                  description={task.description}
                  status={task.status}
                  key={task.id}
                  onEditClick={() => handleEditClick(task)}
                />
                <hr className="hidden" />
              </>
            ))}
          </tbody>
        </table>
      </div>
      {isOpen && <TaskEditModal />}
      <TaskAside />
    </>
  );
};

export default Board;
