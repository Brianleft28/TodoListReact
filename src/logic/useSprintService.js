import { useEffect, useState } from 'react';
import { getSprints, saveSprints } from './localStorageService';

export const useSprintService = () => {
  const [sprints, setSprints] = useState(getSprints() || []);

  useEffect(() => {
    saveSprints(sprints);
  }, [sprints]);

  const addSprint = async (
    title,
    description,
    responsable,
    startDate,
    endDate,
    status,
    priority,
  ) => {
    return new Promise((resolve, reject) => {
      if (
        title === '' ||
        description === '' ||
        responsable === '' ||
        !startDate ||
        !endDate ||
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
              id: 'sprint-' + (prevSprints.length + 1),
              title,
              description,
              responsable,
              startDate,
              endDate,
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
  return {
    sprints,
    addSprint,
    setSprints,
  };
};
