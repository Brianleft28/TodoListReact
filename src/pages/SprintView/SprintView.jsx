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
        <div className="grid grid-cols-12 gap-4">
          <SprintAside />
          <TaskAside sprint={sprint} />
        </div>
      ) : (
        'loading'
      )}
    </div>
  );
};

export default SprintView;
