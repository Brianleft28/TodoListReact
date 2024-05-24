import { useEffect, useState } from 'react';
import { saveTasks, getTasks, getSprints, saveSprints } from './localStorageService.js';

export const useTaskService = () => {
  // Estado para las tareas
  const [tasks, setTasks] = useState(getTasks() || []);
  /* Estado para los sprints */
  const [sprints, setSprints] = useState(getSprints() || []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    saveSprints(sprints);
  },[sprints])
  /*  */

  const addSprint = async (title, description, responsable, startDate, endDate, status, priority) => {
    return new Promise((resolve, reject) => { 
      if (!title || !description || !responsable || !startDate || !endDate || !status || !priority) {
        reject(new Error('Todos los campos son obligatorios'));
      } else {
        try {
          setSprints((prevSprints) => {
            const newSprint = {
              id: 'sprint-' + (prevSprints.length + 1),
              title,
              description,
              responsable,
              startDate,
              endDate,
              status,
              priority,
              tasks: [],
            };
            saveSprints([...prevSprints, newSprint]);
            return [...prevSprints, newSprint];
          });
          resolve('Sprint agregado correctamente');
        } catch (error) {
          console.log('Error agregando el sprint: ' + error);
          reject(error);
        }
      }

    }


  )

  }


  // Funcion para agregar nuevas tareas
  const addTask = async (title, description) => {
    return new Promise((resolve, reject) => {
      if (!title || !description) {
        reject(new Error('El título y la descripción son obligatorios'));
      } else {
        try {
          setTasks((prevTasks) => {
            const newTask = {
              id: 'task-' + (prevTasks.length + 1),
              title,
              description,
              status: '',
              isEditing: false,
            };
            saveTasks([...prevTasks, newTask]);
            return [...prevTasks, newTask];
          });
          resolve('Tarea agregada correctamente');
        } catch (error) {
          console.log('Error agregando la tarea: ' + error);
          reject(error);
        }
      }
    });
  };



  // Función para eliminar una tarea por su ID
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.filter((task) => task.id != taskId);
      if (newTasks.length === prevTasks.length) {
        return prevTasks;
      }
      console.log('tarea eliminada: ' + taskId);

      saveTasks(newTasks);
      return [...newTasks];
    });
  };

  // Función para actualizar una tarea existente
  const onEdit = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task,
    );
    setTasks(updatedTasks);
  };

  // Función para marcar una tarea como completada
  const setStatus = (taskId, status) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: status } : task,
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  return {
    tasks,
    addTask,
    deleteTask,
    onEdit,
    setStatus,
    setTasks,
    sprints,
    setSprints
  };
};
