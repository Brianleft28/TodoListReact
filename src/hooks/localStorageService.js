// localStorageService.js

export const saveTasks = (tasks) => {
    try {
        
        const tasksToSave = tasks.map(task => ({
            id: task.id,
            title: task.title,
            description: task.description,
            completed: task.completed,
            isEditing: task.isEditing
        }))
        localStorage.setItem('tasks', JSON.stringify(tasksToSave));
    } catch (error) {
        console.error('Error al guardar en el local storage: ' + error)
    }

}

export const getTasks = () => {
    try {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
                return JSON.parse(tasks); 
            
        } 
        return [];
    }
    catch (error){
        console.error('Error al cargar las tareas del local storage: ' + error)

        return [];
    }
}
