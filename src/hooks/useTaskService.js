import { useEffect, useState } from "react";

export const useTaskService = () => {
    // Almacenamiento de tareas
    const [tasks, setTasks] = useState([])

    // Definir la estructura de una tarea
    const initialTask = {
    id: '',
    title: '',
    description: '',
    completed: false
  };

    // cargar tareas desde el local storage 
    useEffect(()=>{
        const storedTasks = JSON.parse(localStorage.getItem('tasks'))
        if (storedTasks) {
            setTasks(storedTasks)
        }
    
    }, [])

    // Función para guardar las tareas en el almacenamiento local al actualizarlas
        useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
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