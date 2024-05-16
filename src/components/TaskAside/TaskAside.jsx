import './TaskAside.css'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TaskForm from '../TaskForm/TaskForm.jsx';



const TaskAside = ({  }) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
      };  
    const handleSubmit = (data) => {
        console.log("Nueva tarea:", data);
        setIsOpen(false); 
    };

  return (
    <div >
    <motion.aside
            className="task-aside w-full max-w-xs"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: isOpen ? 0 : '100%', opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.1 }}
            >
        <div className='md:flex md:items-center mb-6'>

            <TaskForm onSubmit={handleSubmit} />
            <button className="fixed bottom-4 right-12 w-52 justify-center bg-red-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-red-500" onClick={handleToggle}>
                {isOpen ? 'Cerrar' : '...'}
            </button>
        </div>
    </motion.aside>
    {
        !isOpen && (

            <button 
            className={`fixed bottom-4 right-4 ${isOpen ? 'hidden' : 'block'} flex gap-1 items-center bg-green-500 text-white px-3 py-1 rounded-md transition duration-300 ease-in-out hover:bg-green-600`} onClick={handleToggle}
            >
        <span className='text-3xl mb-1'>+</span>Agregar tarea
    </button>
    )
    }
    </div>
    
)
}
export default TaskAside