import SelectOptions from '../../Select/Select';
import { StatusTaskOptions } from '../../../data/SelectOptions';
import { useTaskService } from '../../../logic/useTaskService';
import { useEffect, useState } from 'react';
import SelectOptionsStatus from '../../Select/SelectStatus';
import { saveTasks } from '../../../logic/localStorageService';

const TaskView = ({ task }) => {
  const { setStatus, deleteTask } = useTaskService();
  const [tasks, setTasks] = useState(task);

  const handleStatusChange = (taskId, newStatus) => {
    setStatus(taskId, newStatus);
    console.log('nuevo estado ' + newStatus);
  };

  useEffect(() => {
    if (tasks) {
      saveTasks(tasks);
    }
  }, [task, tasks]);

  const handleDelete = (taskId) => {
    deleteTask(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  if (!task) {
    return <div>Loading</div>;
  }
  if (tasks.length === 0) {
    return (
      <div className="flex-grow p-4 border-2 pt-4 border-neutral/50 max-w-[1080px] h-auto mx-auto flex flex-col justify-start">
        <p className="text-2xl flex mx-auto items-center h-full">
          Comience agregando una tarea
        </p>
      </div>
    );
  }
  return (
    <>
      {' '}
      <div className="grid grid-row-1  gap-1 max-h-[400px]">
        {/*    */}
        {tasks.map((task, index) => {
          return (
            <div
              key={index}
              className="col-span-1 mb-1 pb-2 text-[12px] w-full border-b-2 border-neutral/50 "
            >
              <div className="grid gap-1 grid-cols-5">
                <div className="flex items-start">{task.title}</div>
                <div className="col-span-2">
                  <p className="break-words w-80">{task.description}</p>
                </div>
                <div className="flex items-center justify-center">
                  <SelectOptionsStatus
                    options={StatusTaskOptions}
                    status={task.status}
                    onChange={(newStatus) =>
                      handleStatusChange(task.id, newStatus)
                    }
                  />
                </div>
                <div className="flex flex-row gap-1 items-center justify-evenly">
                  <button className="btn btn-primary">Editar</button>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="btn btn-primary"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default TaskView;
