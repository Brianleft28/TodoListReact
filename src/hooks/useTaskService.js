import { useEffect, useState } from "react";
import { saveTasks, getTasks } from "./localStorageService";



export const useTaskService = () => {
    // Almacenamiento de tareas
    const [tasks, setTasks] = useState(getTasks())

    useEffect(()=> {
        saveTasks(tasks)
    }, [tasks])

    // Definir la estructura de una tarea
    const initialTask = {
    id: '',
    title: '',
    description: '',
    completed: false
  };


    // Funcion para agregar nuevas tareas
    const addTask = (newTask) => {
        setTasks([...tasks, newTask ])
    }


    // Función para eliminar una tarea por su ID
    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
  }; 

    // Función para actualizar una tarea existente
    const updateTask = (taskId, updatedTask) => {
        const updatedTasks = tasks.map(task =>
          task.id === taskId ? { ...task, ...updatedTask } : task
        );
        setTasks(updatedTasks);
    };

    return {
        tasks,
        addTask,
        deleteTask,
        updateTask
    }
}