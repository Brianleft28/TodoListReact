import React, { useEffect, useState } from 'react'
import { useTaskService } from '../../hooks/useTaskService.js'

const TaskForm = ({  }) => {
  const { tasks, addTask, deleteTask, updateTask } = useTaskService();



    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
      // Uso las funciones que defini en el hook taskService
        setTitle('');
        setDescription(''); 
        console.log("Tarea Agregada");
        addTask({title, description});


      };

      useEffect(()=> {
        console.log("tareas: ", tasks)
      }, [tasks])

  return (
   <form onSubmit={handleSubmit} className='flex flex-col gap-1 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <label className='selection:bg-none text-gray-500 font-bold  p-2'>Agregar Tarea</label>
      <label className='selection:bg-none block text-gray-500 font-bold md:text-left pr-4'>Titulo</label>
        <input type="text" 
        className='bg-gray-200 appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline focus:bg-white focus:border-green-500'
        placeholder='Título'
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        required
        />
      <label className='block text-gray-500 font-bold md:text-left pr-4'>Descripción</label>
        <textarea  
        placeholder='Descripción'
        className='bg-gray-200 appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline focus:bg-white focus:border-green-500'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className='fixed bottom-16 right-12 w-52 justify-center bg-green-500 shadow hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' 
        >Añadir Tarea</button>
   </form>
  )
}

export default TaskForm