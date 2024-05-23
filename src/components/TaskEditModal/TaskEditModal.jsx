import React, { useContext, useEffect, useState } from 'react';
import TaskContext from '../../context/TaskContext';
import { Button } from 'react-daisyui';

const TaskEditModal = () => {
  const { isOpen, setIsOpen, currentTask, onEdit } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setDescription(currentTask.description);
    }
  }, [currentTask]);

  const handleSave = () => {
    if (currentTask) {
      if (!title || !description) {
        alert('El título y la descripción son obligatorios');
        return;
      }
      {
        onEdit(currentTask.id, { title, description });
        setIsOpen(false);
      }
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg- opacity-50"
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="bg-gradient-to-b border-2 border-secondary from-base to-base-300 p-6 w-96 relative z-10">
        <label className="form-control w-full max-w-xs">
          <span className="label-text mb-1 ml-2">Nuevo Titulo</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input w-full max-w-xs mb-2 bg-base-300"
          />
        </label>
        <label className="form-control w-full max-w-xs mb-4">
          <span className="label-text mb-1 ml-2">Nueva descripción</span>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input w-full max-w-xs bg-base-300"
          />
        </label>
        <div className="flex justify-center gap-3">
          <Button onClick={handleSave} color="ghost">
            Guardar
          </Button>
          <button
            onClick={() => setIsOpen(false)}
            className="btn btn-error rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskEditModal;
