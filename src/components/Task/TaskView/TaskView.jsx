import SelectOptions from '../../Select/Select';
import { StatusTaskOptions } from '../../../data/SelectOptions';
import { useTaskService } from '../../../logic/useTaskService';
import { useEffect } from 'react';
import SelectOptionsStatus from '../../Select/SelectStatus';

const TaskView = ({ task }) => {
  const { tasks, setTasks, setStatus, deleteTask } = useTaskService();

  const handleStatusChange = (taskId, newStatus) => {
    setStatus(taskId, newStatus);
    console.log('nuevo estado ' + newStatus);
  };

  useEffect(() => {
    if (tasks) {
      setTasks(task);
    }
  }, []);

  const handleDelete = (taskId) => {
    deleteTask(taskId);
  };

  if (!task) {
    return <div>Loading</div>;
  }
  return (
    <>
      {' '}
      <div className="grid grid-row-1  gap-1 max-h-[400px]">
        {/*    */}
        {task?.map((task, index) => {
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
