import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-daisyui';
import SelectOptions from '../../Select/Select';
import SprintContext from '../../../context/SprintContext';
import TaskContext from '../../../context/TaskContext';

const TaskForm = ({
  onSubmit,
  title,
  description,
  setTitle,
  setDescription,
}) => {
  const { sprints } = useContext(SprintContext);
  const { actualSprint, setActualSprint } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e, title, description, actualSprint);
    setTitle('');
    setDescription('');
    console.log(
      'Tarea enviada:',
      'title: ' + title,
      'description: ' + description,
      'tablero: ' + actualSprint,
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="overflow-x-hidden bg-gradient-to-b shadow-md from-base-200 to-base-100 border-base-300 p-6 rounded-b-box rounded-se-box flex-wrap bg-cover bg-top [border-width:var(--tab-border)]"
    >
      {/*   flex min-h-[6rem] min-w-[18rem] max-w-4xl  items-center justify-center gap-2  bg-cover bg-top p-4 [border-width:var(--tab-border)] undefined */}
      <label className="form-control w-full max-w-xs">
        <input
          type="text"
          placeholder="Titulo de la tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="input input-bordered w-full max-w-xs mb-2 bg-base-100"
        />
      </label>
      <label className="form-control w-full max-w-xs mb-4">
        <textarea
          className="textarea textarea-bordered w-full max-w-xs bg-base-100 min-h-[241px]"
          placeholder="Descripción de la tarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">
              Seleccione un tablero para su tarea
            </span>
          </div>

          <SelectOptions
            options={sprints}
            status={actualSprint}
            onChange={setActualSprint}
            style={'min-h-full select-bordered bg-base-100 '}
          />
        </label>
      </label>

      {/* Opciones */}

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
