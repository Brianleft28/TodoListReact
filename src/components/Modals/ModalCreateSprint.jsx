import React, { useContext, useState } from 'react';
import {
  StatusOptionsSprint,
  priorityOptionsSprint,
} from '../../data/SelectOptions';
import SelectOptionsStatus from '../Select/SelectStatus';
import SprintContext from '../../context/SprintContext';

const ModalCreateSprint = ({ onClose }) => {
  const { addSprint } = useContext(SprintContext);

  const handleSaveSprint = async (e) => {
    e.preventDefault();

    await addSprint(title, responsable, status, priority, description);
    console.log('Sprint creado');
    onClose();
  };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [responsable, setResponsable] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');

  return (
    <>
      <form
        onSubmit={handleSaveSprint}
        className="col-span-3 grid grid-cols-3 gap-2 mb-2"
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titulo"
          className="input input-ghost border border-base-content/10 focus-within:outline-none"
        />
        {/* Futuro select con los usuarios Responsables, cuentas tipo user */}
        <input
          value={responsable}
          onChange={(e) => setResponsable(e.target.value)}
          type="text"
          placeholder="Responsable"
          className="input input-ghost border border-base-content/10 focus-within:outline-none"
        />
        <SelectOptionsStatus
          options={StatusOptionsSprint}
          status={status}
          onChange={(value) => {
            setStatus(value);
          }}
          style={'min-w-full select-bordered focus:outline-none'}
        />
        <textarea
          placeholder="Descripción"
          className="input textarea-ghost min-h-[120px] col-span-3 focus:outline-none border border-base-content/10"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <SelectOptionsStatus
          value={priority}
          style={'select-bordered w-full col-span-3 focus:outline-none'}
          options={priorityOptionsSprint}
          onChange={(e) => {
            setPriority(e);
          }}
        />

        <button
          type="submit"
          className="col-span-3 w-full  btn btn-square btn-primary"
        >
          {' '}
          Crear
        </button>
      </form>
      <button
        onClick={onClose}
        className="col-span-3 w-full  btn btn-square btn-error"
      >
        {' '}
        Volver
      </button>
    </>
  );
};

export default ModalCreateSprint;
