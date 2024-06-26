import { useContext, useEffect, useState } from 'react';
import {
  saveTasks,
  getTasks,
  getSprints,
  saveSprints,
} from './localStorageService.js';

export const useTaskService = () => {
  // Estado para las tareas
  const [tasks, setTasks] = useState(getTasks() || []);

  /* Estado para los sprints */
  const [sprints, setSprints] = useState(getSprints() || []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // Funcion para agregar nuevas tareas
  const addTask = (title, description, sprintId) => {
    return new Promise((resolve, reject) => {
      if (
        !title ||
        !description ||
        !sprintId ||
        sprintId === 'none' ||
        (Array.isArray(sprints) && sprints.length === 0)
      ) {
        reject(
          new Error('El título, la descripción y el tablero son obligatorios')
        );
      } else {
        try {
          const newTask = {
            id: Date.now(),
            title,
            description,
            status: 'En proceso',
            isEditing: false,
            sprintId: sprintId,
          };
          const updatedTasks = [...tasks, newTask];
          setTasks(updatedTasks);
          saveTasks(updatedTasks);
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
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
  };

  // Función para marcar una tarea como completada
  const setStatus = (taskId, status) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: status } : task
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
    setSprints,
  };
};
