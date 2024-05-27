import { useContext, useState } from 'react';
import SprintContext from '../../../context/SprintContext';
import { Button } from 'react-daisyui';
import Filter from '../DatePicker/Filter';
import {
  StatusOptionsSprint,
  priorityOptionsSprint,
} from '../../../data/SelectOptions';
import SelectOptions from '../../Select/Select';

const SprintModal = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [responsable, setResponsable] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const { isModalOpen, setIsModalOpen, setSprintOpen, addSprint } =
    useContext(SprintContext);

  const handleToggle = () => {

    setIsModalOpen(false);
    setSprintOpen(true);
  };

const handleSave = () => {
  console.log(
    title,
    description,
    responsable,
    startDate,
    endDate,
    status,
    priority,
  );

  addSprint(
    title,
    description,
    responsable,
    startDate,
    endDate,
    status,
    priority,
  )
  .then(() => {
    handleToggle();
  })
  .catch((error) => {
    setIsModalOpen(true);
    setSprintOpen(false);
    console.log('Error al guardar el sprint' + error);
    alert(error);
  });
};

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={() => setIsModalOpen(false)}
      ></div>
      {/* modal */}
      <div className="bg-gradient-to-b  from-base-200 to-base-300 p-6 min-h-[350px] min-w-[350px] relative z-[1000] flex flex-col">
        <div className=" flew-row gap-10">
          <form className="justify-self-center flex-col">
            {/* Comienza input */}
            <label className="form-control w-full max-w-4xl">
              <span className="label font-semibold justify-center label-text mb-1 ml-2">
                Agrega un Tablero
              </span>
            </label>
            <div className="label">
              <input
                type="text"
                value={title}
                placeholder="Título del tablero"
                onChange={(e) => setTitle(e.target.value)}
                className="input w-full max-w-xs bg-base-300"
              />
            </div>
            <div className="label w-full max-w-xs">
              <textarea
                type="text"
                placeholder="Descripción del tablero"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input w-full max-w-xs bg-base-300 h-auto"
                style={{ height: '100px' }}
              />
            </div>
            <div className="label w-full max-w-4xl">
              <input
                type="text"
                placeholder="Responsable"
                value={responsable}
                onChange={(e) => setResponsable(e.target.value)}
                className="input w-full max-w-xs bg-base-300"
              />
            </div>
            <div className="label w-full max-w-4x">
              <SelectOptions
                options={StatusOptionsSprint}
                status={status}
                onChange={(value) => {
                  setStatus(value);
                  console.log(value);
                }}
                style={'min-w-full'}
              />
            </div>
            <div className="label w-full max-w-4x">
              <SelectOptions
                value={priority}
                options={priorityOptionsSprint}
                onChange={(e) => {
                  setPriority(e);
                  console.log(e);
                }}
                style={'min-w-full'}
              />
            </div>
            <div className="label w-full max-w-4x"></div>
            <div className="label flex-col mb-4">
              <Filter
                onChange={(startDate, endDate) => {
                  setStartDate(startDate);
                  setEndDate(endDate);
                  console.log(startDate, endDate);
                }}
              />
            </div>
          </form>
        </div>
        {/* Botones */}
        <div className="flex justify-center  gap-3">
          <Button onClick={handleSave} color="primary">
            Guardar
          </Button>
          <button
            onClick={() => setIsModalOpen(false)}
            className="btn btn-error rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
export default SprintModal;
