import React from 'react';

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
      className="border-2 border-secondary flex flex-col gap-1 bg-gradient-to-br from-base-100 via-base-200 to-base-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 justify-center "
    >
      <label className="selection:bg-none  text-primary font-bold">
        Agregar una tarea
      </label>
      <hr className="mt-3 border-secondary h-10 " />
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

      <button
        type="submit"
        className="fixed bottom-20 right-12 w-52 justify-center btn btn-outline btn-primary  py-2 px-4"
      >
        Añadir Tarea
      </button>
    </form>
  );
};

export default TaskForm;
