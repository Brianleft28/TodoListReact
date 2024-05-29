import './TaskAside.css';
import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import TaskForm from '../TaskForm/TaskForm';
import TaskContext from '../../../context/TaskContext';

const TaskAside = () => {
  const { addTask } = useContext(TaskContext);

  const [isOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [sprintId, setSprintId] = useState('');

  const { isTaskOpen, setTaskOpen } = useContext(TaskContext);

  const handleToggle = () => {
    setTaskOpen(!isTaskOpen);
  };

  const onSubmit = async (e, title, description, sprintId) => {
    try {
      e.preventDefault();
      await addTask(title, description, sprintId);
    } catch (error) {
      setTaskOpen(true);
      alert(error);
    }
    setTimeout(() => {
      setTitle('');
      setDescription('');
      setTaskOpen(false);
    }, 0);
  };

  return (
    <div>
      {isTaskOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setTaskOpen(false)}
        ></div>
      )}
      <motion.aside
        className="[border-width:var(--tab-border)] border-base-300 task-aside bg-gradient-to-b from-base-200 to-base-100 menu-vertical p-3 w-full max-w-xs"
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: isTaskOpen ? 0 : '100%', opacity: isTaskOpen ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      >
        <div className="flex-row gap-10">
          <div className="justify-center shadow-md bordered">
            <TaskForm
              onSubmit={onSubmit}
              title={title}
              description={description}
              sprintId={sprintId}
              setSprintId={setSprintId}
              setTitle={setTitle}
              setDescription={setDescription}
            />
          </div>
          <button
            className="fixed bottom-5 right-12 w-52 justify-center btn  btn-error px-4 py-2"
            onClick={handleToggle}
          >
            {isTaskOpen ? 'Cerrar' : '...'}
          </button>
        </div>
      </motion.aside>
      {!isOpen && (
        <button
          onClick={handleToggle}
          className="btn btn-primary fixed bottom-6 right-10"
        >
          Agregar tarea
        </button>
      )}
    </div>
  );
};
export default TaskAside;
