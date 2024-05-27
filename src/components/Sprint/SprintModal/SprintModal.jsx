import { useContext, useState } from 'react';
import SprintContext from '../../../context/SprintContext';
import { Button } from 'react-daisyui';
import SprintForm from '../SprintForm/SprintForm';
import Filter from '../DatePicker/Filter';

const SprintModal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(SprintContext);

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
      <div className="bg-gradient-to-b shadow-md from-base to-base-300 p-6 min-h-[350px] min-w-[350px] relative z-[1000] flex flex-col">
        <SprintForm />
        {/* Botones */}
        <div className="flex justify-center  gap-1">
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
