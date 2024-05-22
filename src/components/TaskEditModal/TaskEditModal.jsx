import React, { useContext, useEffect, useState } from 'react';
import TaskContext from '../../context/TaskContext';

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
      <div className="bg-gradient-to-b from-neutral to-base-100 p-6 w-96 relative z-10">
        <label className="form-control w-full max-w-xs">
          <h2 className="text-xl text-primary  ml-28 font-semibold mb-4">
            Editar Tarea
          </h2>
          <span className="label-text mb-1 ml-2">Nuevo Titulo</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input w-full max-w-xs mb-2"
          />
        </label>
        <label className="form-control w-full max-w-xs mb-4">
          <span className="label-text mb-1 ml-2">Nueva descripción</span>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input w-full max-w-xs"
          />
        </label>
        <div className="flex justify-center gap-3">
          <button
            onClick={handleSave}
            className="btn btn-outline btn-primary  font-bold py-2 px-4 rounded"
          >
            Guardar
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="btn btn-outline btn-error rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskEditModal;
