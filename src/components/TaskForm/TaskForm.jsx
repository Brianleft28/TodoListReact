import React from 'react';
import { Button } from 'react-daisyui';

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
      className="flex flex-col gap-1 bg-gradient-to-br from-base-100 via-base-200 to-base-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 justify-center "
    >
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Introduzca una tarea</span>
        </div>
        <input
          type="text"
          placeholder="Soy una tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Introduzca una descripción</span>
        </div>

        <textarea
          className="textarea textarea-bordered"
          placeholder="Soy una descripción de la tarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </label>

       
      <Button type="submit" color="ghost" className={'fixed bottom-20 right-12 w-52'}>
        Añadir tarea
      </Button>
    </form>
  );
};

export default TaskForm;
