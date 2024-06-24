import { useContext } from 'react';
import FilteredTaskContent from '../../../context/FilteredTaskContent';
import { StatusTaskOptions } from '../../../data/SelectOptions';
import { useTaskService } from '../../../logic/useTaskService';
import SelectOptionsStatus from '../../Select/SelectStatus';

const TaskView = ({ task, deleteTask }) => {
  const { tasks, setTasks, setStatus } = useTaskService();
  const handleStatusChange = (taskId, newStatus) => {
    setStatus(taskId, newStatus);
    console.log('nuevo estado ' + newStatus);
  };

  if (!task) {
    return <div>Loading</div>;
  }
  return (
    <>
      {' '}
      <div className="grid grid-row-1  gap-1 max-h-[400px]">
        {/*    */}
        {task?.map((t, index) => {
          return (
            <div
              key={index}
              className="col-span-1 mb-1 pb-2 text-[12px] w-full border-b-2 border-neutral/50 "
            >
              <div className="grid gap-1 grid-cols-5">
                <div className="flex items-start">{t.title}</div>
                <div className="col-span-2">
                  <p className="break-words w-80">{t.description}</p>
                </div>
                <div className="flex items-center justify-center">
                  <SelectOptionsStatus
                    options={StatusTaskOptions}
                    status={t.status}
                    onChange={(newStatus) =>
                      handleStatusChange(t.id, newStatus)
                    }
                  />
                </div>
                <div className="flex flex-row gap-1 items-center justify-evenly">
                  <button className="btn btn-primary">Editar</button>
                  <button
                    onClick={() => deleteTask(t.id)}
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
