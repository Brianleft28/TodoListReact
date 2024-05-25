import React, { createContext, useState, useEffect } from 'react';
import { useSprintService } from '../logic/useSprintService';

export const SprintContext = createContext();

export const SprintProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSprint, setCurrentSprint] = useState([]);
  const sprintService = useSprintService();

  return (
    <SprintContext.Provider
      value={{
        ...sprintService,
        isModalOpen,
        setIsModalOpen,
        currentSprint,
        setCurrentSprint,
      }}
    >
      {children}
    </SprintContext.Provider>
  );
};
export default SprintContext;