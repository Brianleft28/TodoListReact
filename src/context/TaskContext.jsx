import React, { createContext } from 'react';
import { useTaskService } from '../hooks/useTaskService';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => { 

const taskService = useTaskService();

        return (
        <TaskContext.Provider value={taskService}>
            {children}
        </TaskContext.Provider>
    )

}

export default TaskContext;