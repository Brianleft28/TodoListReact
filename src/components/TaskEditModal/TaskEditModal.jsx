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
      onEdit(currentTask.id, { title, description });
      setIsOpen(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
        <div className="bg-gradient-to-b from-green-400 to-white rounded-lg p-6 w-96 relative z-10">
          <h2 className="text-xl font-semibold mb-4">Editar Tarea</h2>
          <label className="block mb-4">
            Título:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block bg-gray-200 appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline focus:bg-white focus:border-green-500"
            />
          </label>
          <label className="block mb-4">
            Descripción:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block bg-gray-200 appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline focus:bg-white focus:border-green-500"
            />
          </label>
          <div className="flex justify-center gap-3">
            <button
              onClick={handleSave}
              className="justify-center bg-green-500 shadow hover:bg-green-400 focus:shadow-outline text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="justify-center shadow bg-red-600 text-white px-4 py-2 transition duration-300 ease-in-out hover:bg-red-500 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskEditModal;
