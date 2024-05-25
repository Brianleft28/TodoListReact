// localStorageService.js

export const saveTasks = (tasks) => {
  try {
    const tasksToSave = tasks.map((task) => ({
      id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
      isEditing: task.isEditing,
    }));
    localStorage.setItem('tasks', JSON.stringify(tasksToSave));
  } catch (error) {
    console.error('Error al guardar en el local storage: ' + error);
  }
};

export const saveSprints = (sprints) => {
  try {
    const sprintsToSave = sprints.map((sprint) => ({
      id: sprint.id,
      title: sprint.title,
      description: sprint.description,
      tasks: sprint.tasks,
      responsable: sprint.responsable,
      startDate: sprint.startDate,
      endDate: sprint.endDate,
      status: sprint.status,
      priority: sprint.priority,
    }));
    localStorage.setItem('sprints', JSON.stringify(sprintsToSave));
  } catch (error) {
    console.error('Error al guardar en el local storage: ' + error);
  }
};

export const getTasks = () => {
  try {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      return JSON.parse(tasks);
    }
    return [];
  } catch (error) {
    console.error('Error al cargar las tareas del local storage: ' + error);

    return [];
  }
};

export const getSprints = () => {
  try {
    const sprints = localStorage.getItem('sprints');
    if (sprints) {
      return JSON.parse(sprints);
    }
    return [];
  } catch (error) {
    console.error('Error al cargar los sprints del local storage: ' + error);

    return [];
  }
};
