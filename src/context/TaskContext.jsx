import React, { createContext, useState } from 'react';
import { useTaskService } from '../logic/useTaskService';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [currentTask, setCurrentTask] = useState(null); /* Task actual */
  const [actualSprint, setActualSprint] = useState(
    []
  ); /* Sprint actual de la tarea */

  const taskService = useTaskService();

  return (
    <TaskContext.Provider
      value={{
        ...taskService,
        actualSprint,
        setActualSprint,
        currentTask,
        setCurrentTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
