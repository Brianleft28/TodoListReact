import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SprintContext } from '../../context/SprintContext';
import TaskAside from '../../components/Task/TaskAside/TaskAside';
import SprintAside from '../../components/Sprint/SprintSide/SpintAside';

const SprintView = () => {
  const { sprintId } = useParams();
  const { sprints } = useContext(SprintContext);
  const [sprint, setSprint] = useState([]);

  useEffect(() => {
    if (sprints) {
      const sprintFound = sprints.find((sprint) => sprint.id === sprintId);
      setSprint(sprintFound);
    }
  }, [sprints, sprintId]);

  return (
    <div>
      {sprint ? (
        <>
          <div>
            <div>
              <span>Tablero: </span>
              {sprint.title}
            </div>

            <div>
              <span>Descripción: {sprint.description}</span>
            </div>

            <div>
              <span>Responsable: {sprint.responsable}</span>
            </div>

            <div>
              <span>Fecha de inicio: {sprint.startDate}</span>
            </div>

            <div>
              <span>Fecha de fin: {sprint.endDate}</span>
            </div>

            <div>
              <span>Prioridad: {sprint.priority}</span>
            </div>

            <div>
              <span>Status: {sprint.status}</span>
            </div>
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
