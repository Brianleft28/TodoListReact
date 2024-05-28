import React from 'react';
import { Button } from 'react-daisyui';
import SprintSelect from '../SprintSelect/SprintSelect';

const TaskForm = ({
  onSubmit,
  title,
  description,
  setTitle,
  setDescription,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e, title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-b shadow-md from-base to-base-100 p-6 "
    >
      <label className="form-control w-full max-w-xs">
        <span className="label-text mb-1 ml-2">Agregue una tarea</span>
        <input
          type="text"
          placeholder="Titulo de la tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="input w-full max-w-xs mb-2 bg-base-300"
        />
      </label>
      <label className="form-control w-full max-w-xs mb-4">
        <textarea
          className="input w-full max-w-xs bg-base-300 min-h-[241px] mb-2"
          placeholder="Descripción de la tarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <SprintSelect />
      </label>

      <Button
        type="submit"
        color="primary"
        className={'fixed bottom-20 right-12 w-52'}
      >
        Añadir tarea
      </Button>
    </form>
  );
};

export default TaskForm;
