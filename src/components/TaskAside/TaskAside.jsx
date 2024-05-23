import './TaskAside.css';
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
      alert(error);
    }
    setTimeout(() => {
      setTitle('');
      setDescription('');
      setIsOpen(false);
    }, 0);
  };

  return (
    <div>
      <motion.aside
        className="task-aside bg-gradient-to-b from-base to-base-content p-3 w-full max-w-xs"
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: isOpen ? 0 : '100%', opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      >
        <div className="flex justify-center  md:items-center mb-6">
          <TaskForm
            onSubmit={onSubmit}
            title={title}
            description={description}
            setTitle={setTitle}
            setDescription={setDescription}
          />
          <button
            className="fixed bottom-5 right-12 w-52 justify-center btn  btn-error px-4 py-2"
            onClick={handleToggle}
          >
            {isOpen ? 'Cerrar' : '...'}
          </button>
        </div>
      </motion.aside>
      {
        //
        !isOpen && (
          <button
            onClick={handleToggle}
            className="btn btn-primary fixed bottom-6 right-10"
          >
            Agregar tarea
          </button>
        )
      }
    </div>
  );
};
export default TaskAside;
