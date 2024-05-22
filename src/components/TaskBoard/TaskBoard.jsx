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

  useEffect(() => {
    console.log('is open?: ' + console.log(isOpen));
    console.log('tasks', tasks);
  }, [tasks]);

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
      <div className="overflow-x-auto mt-5">
        <table className="table table-xs mx-auto max-w-3xl justify-around-row">
          {/* head */}
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Descripción</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <>
                <br className="text-base-100" />
                <TaskCard
                  taskId={task.id}
                  title={task.title}
                  description={task.description}
                  status={task.status}
                  key={index}
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
