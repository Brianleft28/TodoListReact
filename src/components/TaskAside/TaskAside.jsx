import './TaskAside.css'
import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import TaskForm from '../TaskForm/TaskForm.jsx';
import TaskContext from '../../context/TaskContext';



const TaskAside = () => { 
    const { addTask } = useContext(TaskContext);
  
    
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const handleToggle = () => {
        setIsOpen(!isOpen);
      };  

      const onSubmit = async (e, title, description) => {
          try {
              e.preventDefault();
              await addTask(title, description);
        } catch (error) {
            console.log('Error: ' +  error);
        }
        setTimeout(() => {
              setTitle('');
              setDescription('');
              setIsOpen(false); 
            }, 0);
      };


  return (
    <div >
    <motion.aside
            className="task-aside bg-gradient-to-b from-green-400 to-white p-3 w-full max-w-xs"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: isOpen ? 0 : '100%', opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.1 }}
            >
        <div className='flex justify-center  md:items-center mb-6'>

            <TaskForm 
            onSubmit={onSubmit} 
            title={title} 
            description={ description } 
            setTitle={setTitle}
            setDescription={ setDescription }/>
            <button className="fixed bottom-4 right-12 w-52 justify-center bg-red-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-red-500" onClick={ handleToggle }>
                { isOpen ? 'Cerrar' : '...' } 
            </button>
        </div>
    </motion.aside>
    {
        !isOpen && (
    <button 
            className={`fixed bottom-6 right-10 ${isOpen ? 'hidden' : 'block'} flex gap-1 items-center bg-green-500 text-white px-3 py-1 rounded-md transition duration-300 ease-in-out hover:bg-green-600`} onClick={handleToggle}
            >
        <span className='text-3xl mb-1'>+</span>Agregar tarea
    </button>
    )
    }
    </div>
    
)
}
export default TaskAside