import React, { createContext, useState } from 'react';
import { useTaskService } from '../hooks/useTaskService';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => { 

const [isOpen, setIsOpen] = useState(false);
const [currentTask , setCurrentTask] = useState(null);
const taskService = useTaskService();

        return (

        <TaskContext.Provider 
        value={{...taskService, isOpen, setIsOpen, currentTask, setCurrentTask}}>
            {children}
        </TaskContext.Provider>
    )

}

export default TaskContext;