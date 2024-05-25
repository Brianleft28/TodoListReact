import { useContext, useState } from 'react';
import SprintContext from '../../../context/SprintContext';
import { Button } from 'react-daisyui';

const SprintModal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(SprintContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleToggle = () => {};

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg- opacity-50"
        onClick={() => setIsModalOpen(false)}
      ></div>
      <div className="bg-gradient-to-b border-2 border-secondary from-base to-base-300 p-6 min-w-[1080px] relative z-[1000]">
        <label className="form-control w-full max-w-4xl">
          <span className="label-text mb-1 ml-2">Nuevo Titulo</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input w-full max-w-xs mb-2 bg-base-300"
          />
        </label>
        <label className="form-control w-full max-w-xs mb-4">
          <span className="label-text mb-1 ml-2">Nueva descripción</span>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input w-full max-w-xs bg-base-300"
          />
        </label>
        <div className="flex justify-center gap-3">
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
