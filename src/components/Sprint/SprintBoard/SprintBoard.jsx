import React, { useContext, useEffect, useState } from 'react';
import { SprintContext } from '../../../context/SprintContext';

const SprintBoard = ({ sprintId }) => {
  const [sprint, setSprint] = useState(null);
  const { sprints } = useContext(SprintContext);

  useEffect(() => {
    if (sprints) {
      const sprintFound = sprints.find((sprint) => sprint.id === sprintId);
      setSprint(sprintFound);
    }
  }, [sprintId, sprints, sprint]);

  return (
    <>
      <div className="flex flex-row items-start">
        <div className="sm:max-w-[200px] block h-auto min-w-[180px] bg-base-100">
          <div className="flex flex-row items-center">
            {sprint ? (
              <>
                <div className="mt-4 flex flex-col gap-2 max-w-sm">
                  <div className="p-3 bg-base-300 rounded-badge text-sm">
                    <span className="font-bold">Responsable: </span>
                    {sprint.responsable}
                  </div>
                  <div className="p-3 bg-base-300 rounded-badge text-sm">
                    <span className="font-bold">Inicio: </span>
                    {sprint.startDate}
                  </div>
                  <div className="p-3 bg-base-300 rounded-badge text-sm">
                    <span className="font-bold">Fin: </span>
                    {sprint.endDate}
                  </div>
                  <div className="p-3 bg-base-300 rounded-badge text-sm">
                    <span className="font-bold">Estado: </span>
                    {sprint.status}
                  </div>
                  <div className="p-3 bg-base-300 rounded-badge text-sm">
                    <span className="font-bold">Prioridad: </span>
                    {sprint.priority}
                  </div>
                  <div className="flex flex-row justify-center w-full p-3 gap-2">
                    <button className="btn btn-primary">Editar</button>
                    <button className="btn btn-primary">Eliminar</button>
                  </div>
                </div>
              </>
            ) : (
              <div className="p-3 text-sm">Cargando...</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default SprintBoard;
