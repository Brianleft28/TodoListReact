import React, { createContext, useState, useEffect } from 'react';
import { useSprintService } from '../logic/useSprintService';

export const SprintContext = createContext();

export const SprintProvider = ({ children }) => {
  /* Definición de los estados de SPRINT */
  const [selectedSprintId, setSelectedSprintId] = useState(() => {
    // Recuperar el valor del localStorage al inicializar el estado
    return localStorage.getItem('selectedSprintId') || null;
  });

  // Guardar el valor de selectedSprint en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('selectedSprintId', selectedSprintId);
  }, [selectedSprintId]);

  /* Controlares de modales y asides */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSprintOpen, setSprintOpen] = useState(false);
  const sprintService = useSprintService();

  return (
    <SprintContext.Provider
      value={{
        ...sprintService,
        isModalOpen,
        setSelectedSprintId,
        selectedSprintId,
        setIsModalOpen,
        isSprintOpen,
        setSprintOpen,
      }}
    >
      {children}
    </SprintContext.Provider>
  );
};
export default SprintContext;
