import React, { useState } from 'react'

const TaskForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Llama a la función onSubmit pasando los datos de la nueva tarea
        onSubmit({ title, description });
        setTitle('');
        setDescription('');
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
        <button type="submit">Añadir Tarea</button>
   </form>
  )
}

export default TaskForm