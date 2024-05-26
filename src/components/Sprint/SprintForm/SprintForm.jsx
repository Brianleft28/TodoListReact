import { useContext, useState } from 'react';
import SprintContext from '../../../context/SprintContext';
import { Button } from 'react-daisyui';
import SprintSelect from '../SprintSelect/SprintSelect';
import Filter from '../DatePicker/Filter';

const SprintModal = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [responsable, setResponsable] = useState('');

  const { isModalOpen, setIsModalOpen, isSprintOpen, setSprintOpen } =
    useContext(SprintContext);

  const handleToggle = () => {
    setIsModalOpen(false);
    setSprintOpen(true);
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
      <div className="bg-gradient-to-b border-2 border-secondary from-base to-base-300 p-6 min-h-[350px] min-w-[350px] relative z-[1000] flex flex-col">
        <div className=" flew-row gap-10">
          <form className="justify-self-center flex-col">
            {/* Comienza input */}
            <label className="form-control w-full max-w-4xl">
              <span className="label justify-center label-text mb-1 ml-2">
                Agrega un SPRINT
              </span>
            </label>
            <div className="label">
              <input
                type="text"
                value={title}
                placeholder="Título del Sprint"
                onChange={(e) => setTitle(e.target.value)}
                className="input w-full max-w-xs bg-base-300"
              />
            </div>
            <div className="label w-full max-w-xs">
              <textarea
                type="text"
                placeholder="Descripción del Sprint"
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
              <SprintSelect />
            </div>
            <div className="label flex-col mb-4">
              <Filter />
            </div>
          </form>
        </div>
        {/* Botones */}
        <div className="flex justify-center  gap-3">
          <Button onClick={handleToggle} color="ghost">
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
