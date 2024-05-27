import React, { createContext, useState, useEffect } from 'react';
import { useSprintService } from '../logic/useSprintService';

export const SprintContext = createContext();

export const SprintProvider = ({ children }) => {
  /* Definición de los estados de SPRINT */

  /* Controlares de modales y asides */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSprintOpen, setSprintOpen] = useState(false);
  const sprintService = useSprintService();

  return (
    <SprintContext.Provider
      value={{
        ...sprintService,
        isModalOpen,
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
