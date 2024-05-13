import './TaskAside.css'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TaskForm from '../TaskForm/TaskForm.jsx';

const TaskAside = ({ onSubmit }) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
      };

      
    const handleSubmit = (data) => {
        console.log("Nueva tarea:", data);
        // Llama a la función onSubmit pasando los datos de la nueva tarea
        onSubmit(taskData);
        setIsOpen(false); // Cierra el aside después de enviar el formulario
    };

  return (
    <div>

    <motion.aside
            className="task-aside"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: isOpen ? 0 : '100%', opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            >
            <h2>Agregar Tarea</h2>
            <TaskForm onSubmit={handleSubmit} />
            <button className="fixed bottom-4 right-6 w-60 justify-center bg-green-500 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-green-600" onClick={handleToggle}>
                {isOpen ? 'Cerrar' : '...'}
            </button>
    </motion.aside>
    <button 
    className={`fixed bottom-4 right-4 ${isOpen ? 'hidden' : 'block'} bg-green-500 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-green-600`} onClick={handleToggle}> 
        Agregar tarea
    </button>
    </div>
    
)
}
export default TaskAside