import { useEffect, useState } from "react";
import { saveTasks, getTasks } from "./localStorageService";
import nextId from "react-id-generator";
const id = nextId();



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
    const addTask = async (title, description) => {
        return new Promise((resolve, reject) => {
            try {
                setTasks([...tasks, {id: nextId('tarea-n-'),title, description, completed: false, isEditing: false}]);
                resolve();
            }
            catch (error) {
                reject(error)
                console.log('Error agregando la tarea: ' + error)
            }
        })
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