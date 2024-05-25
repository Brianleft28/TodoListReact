import './SprintAside.css';

import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import SprintForm from '../SprintForm/SprintForm';
import SprintModal from '../SprintModal/SprintModal';
import { Button } from 'react-daisyui';
import { SprintContext } from '../../../context/SprintContext';

const SpintAside = () => {
  const { isModalOpen, setIsModalOpen } = useContext(SprintContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const modalToggle = () => {
    setIsModalOpen(!isModalOpen);
    setIsOpen(false);
  };

  return (
    <>
      <motion.aside
        className="sprint-aside bg-gradient-to-b from-base to-base-content p-3 w-full max-w-xs"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: isOpen ? 0 : '-100%', opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      >
        <div className="flex justify-center  md:items-center mb-6">
          <SprintForm />

          <Button
            onClick={modalToggle}
            color="ghost"
            className={'fixed bottom-20 left-12 w-52'}
          >
            Añadir Sprint
          </Button>
          <button
            className="fixed bottom-5 left-12 w-52 justify-center btn  btn-error px-4 py-2"
            onClick={handleToggle}
          >
            Cerrar
          </button>
        </div>
      </motion.aside>
      <SprintModal />
      {!isOpen && (
        <button
          onClick={handleToggle}
          className="btn btn-primary fixed bottom-6 left-10"
        >
          Sprints
        </button>
      )}
    </>
  );
};

export default SpintAside;
