import React, { useContext, useState } from 'react';
import TaskContext from '../../../context/TaskContext';

const TaskForm = ({ onClose, sprintId }) => {
  const { addTask } = useContext(TaskContext);

  const handleAddTask = async (e) => {
    e.preventDefault();

    await addTask(title, description, sprintId.id);
    console.log('Tarea creada');
    onClose();
  };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  return (
    <form
      onSubmit={handleAddTask}
      className="col-span-3 grid grid-cols-3 gap-2 mb-2"
    >
      {/* Inputs */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Titulo"
        className="input col-span-3 bg-transparent input-ghost border border-base-content/10 focus-within:outline-none"
      />
      <textarea
        placeholder="Descripción"
        className="input bg-transparent textarea-ghost min-h-[165px] col-span-3 focus:outline-none border border-base-content/10"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit" className="col-span-2 btn btn-primary">
        Crear Tarea
      </button>
      <button onClick={onClose} className="btn btn-error">
        Volver
      </button>
    </form>
  );
};

export default TaskForm;
