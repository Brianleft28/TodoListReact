import React, { useState } from 'react'

const TaskForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Llama a la función onSubmit pasando los datos de la nueva tarea
        setTitle('');
        setDescription(''); 
        alert("Tarea Agregada");
        onSubmit({ title, description });
        alert({title, description});
      };

  return (
   <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Título'
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        required
        />
        <textarea  
        placeholder='Descripción'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className='fixed bottom-16 right-10 w-52 justify-center bg-green-500 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-green-600' 
        >Añadir Tarea</button>
   </form>
  )
}

export default TaskForm