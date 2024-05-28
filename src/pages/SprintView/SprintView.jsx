import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SprintContext } from '../../context/SprintContext';
import TaskAside from '../../components/Task/TaskAside/TaskAside';
import SprintAside from '../../components/Sprint/SprintSide/SpintAside';

const SprintView = () => {
  const { sprintId } = useParams();
  const { sprints } = useContext(SprintContext);
  const [sprint, setSprint] = useState(null);

  useEffect(() => {
    if (sprints) {
      const sprintFound = sprints.find((sprint) => sprint.id === sprintId);
      setSprint(sprintFound);
    }
  }, [sprints, sprintId]);

  if (!sprint) return <div className="grid place-self-center">Cargando...</div>;

  return (
    <div>
      {sprint ? (
        <>
          <div className="p-4 bg-base-200 rounded-md">
            <h2 className="text-2xl font-bold mb-4">{sprint.title}</h2>
            <p className="mb-2">
              <strong>Descripción:</strong> {sprint.description}
            </p>

            <p className="mb-2">
              <strong>Prioridad:</strong> {sprint.priority}
            </p>
            <p className="mb-2">
              <strong>Status:</strong> {sprint.status}
            </p>
            <TaskAside />
            <SprintAside />
          </div>
          <TaskAside />
          <SprintAside />
        </>
      ) : (
        'loading'
      )}
    </div>
  );
};

export default SprintView;
