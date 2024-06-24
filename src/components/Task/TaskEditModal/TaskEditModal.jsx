import React, { useEffect, useState } from 'react';
import { useTaskService } from '../../../logic/useTaskService';

const TaskEditModal = ({ onClose, task, settask, updatetask }) => {
  const { onEdit } = useTaskService();
  const [taskStatus, setTaskStatus] = useState(task && task.status);
  const [editMode, setEditMode] = useState(false);
  const [taskTitle, setTaskTitle] = useState(task && task.title);
  const [taskDescription, setTaskDescription] = useState(
    task && task.description
  );

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    console.log('estado :', taskStatus);
    const updatedTask = {
      title: taskTitle,
      description: taskDescription,
      status: taskStatus,
    };
    if (task) {
      onEdit(task.id, updatedTask);
      settask(updatedTask);
      updatetask((prevTasks) => {
        return prevTasks.map((t) => (t.id === task.id ? updatedTask : t));
      });

      setEditMode(false);
    }
  };
  useEffect(() => {
    setTaskStatus(task && task.status);
    setTaskTitle(task && task.title);
    setTaskDescription(task && task.description);
  }, [task]);

  let statusSyle;
  switch (taskStatus) {
    case 'En proceso':
      statusSyle = 'bg-info';
      break;
    case 'Completa':
      statusSyle = 'bg-success';
      break;
    case 'Pendiente':
      statusSyle = 'bg-warning';
      break;
  }

  const optionStatus = [
    {
      id: 'En proceso',
      name: 'En proceso',
    },
    {
      id: 'Completa',
      name: 'Completa',
    },
    {
      id: 'Pendiente',
      name: 'Pendiente',
    },
  ];

  useEffect(() => {}, [taskTitle, taskDescription, taskStatus]);

  return (
    <>
      <div className="mx-auto container mt-10 flex justify-center items-center h-screen max-w-[750px]">
        <div className="w-full bg-gradient-to-tr from-neutral to-base-100 p-3 gap-2 grid grid-cols-6 border border-base-content/5">
          {/* Titulo */}
          <div className="col-span-6">
            {editMode ? (
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                type="text"
                className="input min-w-full"
              />
            ) : (
              <>
                <div className="col-span-6 text-2xl font-bold drop-shadow-md">
                  {task && task.title}
                </div>
              </>
            )}
          </div>
          {/* DIVISOR */}
          <div className="divider py-0 my-0 divider-primary col-span-6"></div>
          {/* Descripción */}
          <div className="col-span-6 ">
            <span className="text-sm selection:bg-none hover:cursor-default">
              Descripción:
            </span>
            <div className="px-2 py-3 bg-base-100 shadow-md h-auto border border-base-content/5">
              <div className="flex flex-col">
                {editMode ? (
                  <textarea
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    className="textarea min-w-full max-w-[96%] break-words"
                  />
                ) : (
                  <p className="max-w-[96%] break-words">
                    {task && task.description}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="col-span-6">
            {editMode ? (
              <select
                className="w-full input shadow-md border border-base-content/5"
                onChange={(e) => {
                  const newStatus = e.target.value;
                  console.log('cambio', newStatus);
                  setTaskStatus(newStatus);
                }}
                value={taskStatus}
              >
                {optionStatus.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            ) : (
              <div
                className={`${statusSyle} col-span-2 font-bold text-sm border border-base-content/5 text-neutral w-fit p-3`}
              >
                Estado: {task && task.status}
              </div>
            )}
          </div>
          {editMode ? (
            <button onClick={handleSave} className="btn btn-primary col-span-4">
              Guardar
            </button>
          ) : (
            <button onClick={handleEdit} className="btn btn-primary col-span-4">
              Editar
            </button>
          )}
          <button onClick={onClose} className="btn btn-error col-span-2">
            Volver
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskEditModal;
