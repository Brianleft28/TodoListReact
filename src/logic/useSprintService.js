import { useEffect, useState } from 'react';
import { getSprints, saveSprints } from './localStorageService';

export const useSprintService = () => {
  const [sprints, setSprints] = useState(getSprints() || []);

  useEffect(() => {
    saveSprints(sprints);
  }, [sprints]);

  const addSprint = async (title, responsable, status, priority) => {
    return new Promise((resolve, reject) => {
      if (
        title === '' ||
        responsable === '' ||
        !status ||
        !priority ||
        status === '0' || // StatusOptionsSprint[0]
        priority === '0' // priorityOptionsSprint[0]
      ) {
        reject(new Error('Todos los campos son obligatorios'));
      } else {
        try {
          setSprints((prevSprints) => {
            const newSprint = {
              id: 'sprint-' + (prevSprints.length + 1 + Math.random() / 1000),
              title,
              responsable,
              status,
              priority,
            };
            saveSprints([...prevSprints, newSprint]);
            resolve(newSprint.id);
            return [...prevSprints, newSprint];
          });
        } catch (error) {
          console.log('Error agregando el sprint: ' + error);
          reject(error);
        }
      }
    });
  };
  const deleteSprint = (sprintId) => {
    setSprints((prevSprint) => {
      const newSprint = prevSprint.filter((sprint) => sprint.id != sprintId);
      if (newSprint.length === prevSprint.length) {
        return prevSprint;
      }
      console.log('Sprint Eliminado: ' + sprintId);

      saveSprints(newSprint);

      return [...newSprint];
    });
  };

  return {
    sprints,
    addSprint,
    deleteSprint,
    setSprints,
  };
};
