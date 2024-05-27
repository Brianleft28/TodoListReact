import React, { createContext, useState } from 'react';
import { useTaskService } from '../logic/useTaskService';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  
  const [isTaskOpen, setTaskOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const taskService = useTaskService();
  

  return (
    <TaskContext.Provider
      value={{ ...taskService, isTaskOpen, setTaskOpen, currentTask, setCurrentTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
