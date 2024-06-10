import React, { useContext, useEffect, useState } from 'react';
import TaskAside from '../../components/Task/TaskAside/TaskAside';

import { useParams } from 'react-router-dom';
import SprintAside from '../../components/Sprint/SprintSide/SpintAside';
import TaskContext from '../../context/TaskContext';
import SprintBoard from '../../components/Sprint/SprintBoard/SprintBoard';
import TaskView from '../../components/Task/TaskView/TaskView';

const SprintView = () => {
  const { tasks } = useContext(TaskContext);
  const sprintId = useParams().sprintId;

  const theseTask = tasks.filter((task) => task.sprintId === sprintId);
  console.log('tareas tablero ', theseTask);

  return (
    <div>
      <SprintAside />
      <TaskAside />
      {/* ambos */}

      <div className="flex flex-row ">
        {/* sprintboard */}
        <div className="w-[200px] h-auto flex items-start justify-center border-r-2 border-neutral/50 ">
          <SprintBoard sprintId={sprintId} />
        </div>
        {/*  */}
        {/* Tareas columna */}
        {theseTask.length === 0 || !theseTask ? (
          <div className="flex-grow p-4 border-2 pt-4 border-neutral/50 max-w-[1080px] h-auto mx-auto flex flex-col justify-start">
            <p className="text-2xl flex mx-auto items-center h-full">
              Comience agregando una tarea
            </p>
          </div>
        ) : (
          <div className="flex-grow p-4 border-2 pt-4 border-neutral/50 max-w-[1080px] h-auto mx-auto flex flex-col justify-start">
            <div className="grid grid-cols-5 rounded-sm gap-1 mx-auto pl-1">
              <div className="bg-neutral text-neutral-content col-span-1 p-2">
                Tarea
              </div>
              <div className="bg-neutral text-neutral-content  col-span-2 p-2">
                Descripción
              </div>
              <div className="bg-neutral text-neutral-content col-span-1 p-2">
                Estado
              </div>
              <div className="bg-neutral text-neutral-content col-span-1 p-2">
                Acciones
              </div>
              {/* tareas */}

              <div className="mt-4 pl-1 max-w-full overflow-auto col-span-5">
                <TaskView task={theseTask} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SprintView;
