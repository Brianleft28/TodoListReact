import React, { useContext, useEffect, useState } from 'react';
import SelectOptions from '../Select/Select';
import SprintContext from '../../context/SprintContext';
import TaskContext from '../../context/TaskContext';
import FilteredTaskContent from '../../context/FilteredTaskContent';
import TaskCard from '../Task/TaskCard/TaskCard';
import ModalCreateSprint from '../Modals/ModalCreateSprint';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoIosCreate } from 'react-icons/io';

const AdminBoard = () => {
  const [showModalSprint, setShowModalSprint] = useState(false);

  const handleShowModalSprint = () => {
    setShowModalSprint(!showModalSprint);
  };

  const { sprints, deleteSprint, setSelectedSprintId, selectedSprintId } =
    useContext(SprintContext);

  const { tasks } = useContext(TaskContext);
  const { theseTask, setTheseTask } = useContext(FilteredTaskContent);

  const handleSelectChange = (sprintId) => {
    setSelectedSprintId(sprintId);
  };

  const selectedSprint = sprints.find(
    (sprint) => sprint.id === selectedSprintId
  );

  const filteredTasks = tasks.filter(
    (task) => task.sprintId === selectedSprintId
  );

  useEffect(() => {
    if (sprints.length > 0 && selectedSprintId === null) {
      handleSelectChange(sprints[0].id);
    }
  }, [sprints]);

  useEffect(() => {
    setTheseTask(filteredTasks);
  }, [selectedSprintId, tasks, setTheseTask]);

  const handleDelete = (sprintId) => {
    // Función para eliminar un sprint
    deleteSprint(sprintId);
    setSelectedSprintId(null);
  };

  return (
    /* Div contenedor de tableros y tareas */
    <div className="mx-auto gap-2 grid grid-cols-1 md:grid-cols-2 pt-20 pb-5 container items-stretch">
      {/* Div de tableros */}
      <div className="md:rounded-s-3xl h-fit border border-neutral-content/10 bg-gradient-to-r from-base-100 to-base-200 via-base-200/25 p-3 w-full">
        <h1 className="text-xl font-bold text-neutral-content text-center">
          {showModalSprint ? 'Crear Tablero' : 'Tableros'}
        </h1>
        <div className="grid p-4 grid-cols-3 gap-2">
          {showModalSprint ? (
            <ModalCreateSprint onClose={handleShowModalSprint} />
          ) : (
            <>
              <SelectOptions
                options={sprints}
                style={'w-full col-span-2 shadow-sm'}
                onChange={handleSelectChange}
              />
              <button
                onClick={handleShowModalSprint}
                className="btn  col-span-1 flex items-center btn-primary shadow-sm"
              >
                <div className="text-2xl">
                  <IoIosCreate />
                </div>
                Crear Tablero
              </button>
              <button
                onClick={() => handleDelete(selectedSprintId)}
                className="btn  col-span-1 btn-error text-2xl  btn-square shadow-sm"
              >
                <FaRegTrashAlt />
              </button>
              <div className="divider col-span-4">
                <p>Información</p>
              </div>
              {selectedSprint ? (
                <div className="grid gap-1 place-content-center grid-cols-4 col-span-4">
                  <p className="col-span-4 bg-gradient-to-r from-base-200 via-base-200 to-base-200/20 text-center place-content-center p-2 w-full">
                    Título: {selectedSprint.title}
                  </p>
                  <div className="col-span-2 bg-base-200 w-full text-center place-content-center p-2">
                    <p>Responsable: {selectedSprint.responsable}</p>
                  </div>
                  <div className="col-span-1 bg-base-200 w-full p-2 text-center">
                    <p>
                      Estado <br /> {selectedSprint.status}
                    </p>
                  </div>
                  <div className="col-span-1 bg-gradient-to-r from-base-200 via-base-200 to-base-200/20 w-full p-2 text-center place-content-center">
                    <p>
                      Prioridad <br /> {selectedSprint.priority}
                    </p>
                  </div>
                  <button className="mt-1 btn btn-primary col-span-4 w-full">
                    Editar tablero
                  </button>
                  {/*  */}
                </div>
              ) : (
                <p>Selecciona un sprint para ver su información.</p>
              )}
            </>
          )}
          {/*  */}
        </div>
        {/*  */}
        {/*  */}
      </div>
      {/* Div de tareas */}
      <div className="md:rounded-e-3xl flex flex-col gap-2  border border-neutral-content/10 bg-gradient-to-r to-base-100 from-base-200 via-base-200/50 p-4 w-full">
        <h1 className="text-xl font-bold text-neutral-content text-center ">
          Tareas
        </h1>
        <div className="h-[410px] grid grid-cols-1 overflow-y-scroll p-2">
          <div className="w-full col-span-1 bg-gradient-to-r from-base-200 to-base-100 p-2">
            <div className="flex flex-col gap-1">
              {
                // Tareas
                theseTask.length === 0 || !theseTask ? ( // Si no hay tareas
                  <div className="bg-gradient-to-l from-base-100 via-base-100/10 to-base-200 p-2 hover:bg-base-100  hover:shadow-sm flex flex-row justify-between items-center">
                    Aún no hay tareas
                  </div>
                ) : (
                  <>
                    {theseTask.map((task) => {
                      return <TaskCard task={task} key={task.id} />;
                    })}
                  </>
                )
              }
            </div>
          </div>
        </div>
        <div>
          <button className="w-full btn btn-primary">Agregar Tarea</button>
        </div>
      </div>
      {/* Modal Sprint */}
    </div>
  );
};

export default AdminBoard;
