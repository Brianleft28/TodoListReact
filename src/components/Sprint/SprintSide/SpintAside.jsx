import './SprintAside.css';

import React, { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import SprintForm from '../SprintForm/SprintForm';
import SprintModal from '../SprintModal/SprintModal';
import { Button, Menu } from 'react-daisyui';
import { SprintContext } from '../../../context/SprintContext';
import SprintCard from '../SprintCard/SprintCard';

const SpintAside = () => {
  const { sprints, isSprintOpen, setSprintOpen, isModalOpen, setIsModalOpen } =
    useContext(SprintContext);

  const handleToggle = () => {
    setSprintOpen(!isSprintOpen);
  };

  const modalToggle = () => {
    setIsModalOpen(!isModalOpen);
    setSprintOpen(false);
  };

  return (
    <>
      <motion.aside
        className="sprint-aside bg-gradient-to-b from-base to-base-content p-3 w-full max-w-xs"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{
          x: isSprintOpen ? 0 : '-100%',
          opacity: isSprintOpen ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      >
        {
          sprints && (
            <Menu className="flex flex-col px-1  ">
            
            <ul className='flex flex-col gap-3'>

              {sprints.map((sprint)  => ( 
                <SprintCard key={sprint.id} sprint={sprint}/>
              ))} 
              </ul>

              </Menu> 
          )
        }
        <div className="flex justify-center  md:items-center mb-6">

          <Button
            onClick={modalToggle}
            color="primary"
            className={'fixed bottom-20 left-12 w-52'}
          >
            Añadir Tablero
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
      {!isSprintOpen && (
        <button
          onClick={handleToggle}
          className="btn btn-primary fixed bottom-6 left-10"
        >
          Tableros
        </button>
      )}
    </>
  );
};

export default SpintAside;
