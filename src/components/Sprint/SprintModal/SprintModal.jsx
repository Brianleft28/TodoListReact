import { useContext, useState } from 'react';
import SprintContext from '../../../context/SprintContext';
import { Button } from 'react-daisyui';
import SprintSelect from '../SprintSelect/SprintSelect';

const SprintModal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(SprintContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [responsable, setResponsable] = useState('');

  const handleToggle = () => {};

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
      <div className="bg-gradient-to-b border-2 border-secondary from-base to-base-300 p-6 min-h-[350px] min-w-[750px] relative z-[1000] flex flex-col">
        <div className="flex flew-row gap-10">
          <div>
            {/* Comienza input */}
            <label className="form-control w-full max-w-4xl">
              <span className="label-text mb-1 ml-2">Nombre del Sprint</span>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input w-full max-w-xs mb-2 bg-base-300"
              />
            </label>
            <label className="form-control w-full max-w-xs mb-4">
              <span className="label-text mb-1 ml-2">Descripción</span>
              <textarea
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input w-full max-w-xs bg-base-300 h-auto"
                style={{ height: '100px' }}
              />
              <label className="form-control mt-2 w-full max-w-4xl">
                <span className="label-text mb-1 ml-2">Responsable</span>
                <input
                  type="text"
                  value={responsable}
                  onChange={(e) => setResponsable(e.target.value)}
                  className="input w-full max-w-xs mb-2 bg-base-300"
                />
              </label>
            </label>
          </div>
          {/* SELECTS */}
          <div>
            <label className="form-control w-full max-w-4x">
              <span className="label-text mb-1 ml-1">Seleccione un estado</span>
              <SprintSelect />
            </label>
          </div>
        </div>

        {/* Botones */}
        <div className="flex justify-center  gap-3">
          <Button /* onClick={handleSave} */ color="ghost">Guardar</Button>
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
