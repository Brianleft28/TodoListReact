// localStorageService.js

export const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export const getTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'))
    return storedTasks || 'Error al obtener las tareas del local storage'
}