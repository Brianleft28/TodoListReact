import React, { useContext } from 'react';
import { Button } from 'react-daisyui';
import SelectOptions from '../../Select/Select';
import SprintContext from '../../../context/SprintContext';

const TaskForm = ({
  onSubmit,
  title,
  description,
  setTitle,
  setDescription,
}) => {
  const { sprints } = useContext(SprintContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e, title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-b shadow-md from-base-200 to-base-100 p-6 "
    >
      <label className="form-control w-full max-w-xs">
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
        {/* Opciones */}
        <SelectOptions options={sprints} status={''} onChange={''} style={''} />
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
