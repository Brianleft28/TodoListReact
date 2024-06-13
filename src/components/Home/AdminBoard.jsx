import React, { useContext, useEffect } from 'react';
import SelectOptions from '../Select/Select';
import SprintContext from '../../context/SprintContext';

const AdminBoard = () => {
  const { sprints, setSelectedSprintId, selectedSprintId } =
    useContext(SprintContext);

  const handleSelectChange = (sprintId) => {
    setSelectedSprintId(sprintId);
    console.log('selectedSprint: ', selectedSprintId);
  };
  const selectedSprint = sprints.find(
    (sprint) => sprint.id === selectedSprintId
  );

  return (
    /* Div contenedor de tableros y tareas */
    <div className="mx-auto gap-2 grid grid-cols-1 md:grid-cols-2 pt-20 pb-5 container items-stretch">
      {/* Div de tableros */}
      <div className="md:rounded-s-3xl h-fit border border-neutral-content/10 bg-gradient-to-r from-base-100 to-base-200 via-base-200/25 p-3 w-full">
        <h1 className="text-xl font-bold text-neutral-content text-center">
          Tableros
        </h1>
        <div className="grid p-4 grid-cols-3 gap-2">
          <SelectOptions
            options={sprints}
            style={'w-full col-span-2'}
            onChange={handleSelectChange}
          />
          <button className="btn w-[20% ] btn-primary">Crear Tablero</button>
          <div className="divider col-span-3">
            <p>Información</p>
          </div>
          {selectedSprint ? (
            <div className="grid gap-1 place-content-center grid-cols-4 col-span-4">
              <p className="col-span-4 bg-base-300 text-center place-content-center p-2 w-full">
                Título: {selectedSprint.title}
              </p>
              <div className="col-span-2 bg-base-300 w-full text-center place-content-center p-2">
                <p>Responsable: {selectedSprint.responsable}</p>
              </div>
              <div className="col-span-1 bg-base-300 w-full p-2 text-center">
                <p>
                  Estado <br /> {selectedSprint.status}
                </p>
              </div>
              <div className="col-span-1 bg-base-300 w-full p-2 text-center place-content-center">
                <p>
                  Prioridad <br /> {selectedSprint.priority}
                </p>
              </div>
              <div className="col-span-2 bg-base-300 w-full p-2 text-center place-content-center">
                <p>Fecha de Inicio: {selectedSprint.startDate}</p>
              </div>
              <div className="col-span-2 bg-base-300 w-full p-2 text-center place-content-center">
                <p>Fecha de Fin: {selectedSprint.endDate}</p>
              </div>
              <button className="mt-1 btn btn-primary col-span-4 w-full">
                Editar tablero
              </button>
            </div>
          ) : (
            <p>Selecciona un sprint para ver su información.</p>
          )}
        </div>
        {/*  */}
      </div>
      {/* Div de tareas */}
      <div className="md:rounded-e-3xl flex flex-col gap-2  border border-neutral-content/10 bg-gradient-to-r to-base-100 from-base-200 via-base-200/50 p-4 w-full">
        <h1 className="text-xl font-bold text-neutral-content text-center ">
          Tareas
        </h1>
        <div className="h-[470px] overflow-y-scroll p-2"></div>
        <div>
          <button className="w-full btn btn-primary">Agregar Tarea</button>
        </div>
      </div>
    </div>
  );
};

export default AdminBoard;
