import { useEffect, useState } from "react";
import { saveTasks, getTasks } from "./localStorageService.js";



export const useTaskService = () => {
    // Almacenamiento de tareas
    const [tasks, setTasks] = useState(getTasks() || [])
    
    
    useEffect(() => { 
        saveTasks(tasks)
    }, [tasks])

// Funcion para agregar nuevas tareas
const addTask = async (title, description) => {
    return new Promise((resolve, reject) => {   
        try {   
            setTasks(prevTasks => {
                const newTask = {
                    id: 'task-' + (prevTasks.length + 1) + Date.now() + Math.random(), 
                    title,
                    description,
                    completed: false,
                    isEditing: false
                };
                saveTasks([...prevTasks, newTask]);
                return [...prevTasks, newTask];
            });
            resolve('Tarea agregada correctamente')
        }
        catch (error) {
            console.log('Error agregando la tarea: ' + error)
            reject(error)
        }
    })
}

    // Función para eliminar una tarea por su ID
    const deleteTask = (taskId) => {
        setTasks(prevTasks => {
            const newTasks = prevTasks.filter(task => task.id != taskId);
            if (newTasks.length === prevTasks.length) {
                return prevTasks;
            }
            console.log(newTasks, 'newTasks' + ' tarea eliminada' + taskId)

            saveTasks(newTasks)
            return [...newTasks];
        });
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
};
};