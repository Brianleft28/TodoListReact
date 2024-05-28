import './SprintAside.css';

import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import SprintModal from '../SprintModal/SprintModal';
import { Button, Menu } from 'react-daisyui';
import { SprintContext } from '../../../context/SprintContext';
import SprintCard from '../SprintCard/SprintCard';
import TaskContext from '../../../context/TaskContext';

const SpintAside = () => {
  const { sprints, isSprintOpen, setSprintOpen, isModalOpen, setIsModalOpen } =
    useContext(SprintContext);
  const { setTaskOpen } = useContext(TaskContext);

  const handleToggle = () => {
    setSprintOpen(!isSprintOpen);
    setTaskOpen(false);
  };

  const modalToggle = () => {
    setIsModalOpen(!isModalOpen);
    setSprintOpen(false);
  };

  return (
    <>
      <div>
        {isSprintOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setSprintOpen(false)}
          ></div>
        )}
        <motion.aside
          className="sprint-aside bg-gradient-to-b from-base-200 to-base-100 menu-vertical p-3 w-full max-w-xs"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{
            x: isSprintOpen ? 0 : '-100%',
            opacity: isSprintOpen ? 1 : 0,
          }}
          transition={{ duration: 0.1 }}
        >
          <div className="h-[445px] overflow-y-auto menu-md  scrollbar-hide">
            {sprints && (
              <Menu className="flex flex-col gap-3 px-4">
                {sprints.map((sprint) => (
                  <SprintCard key={sprint.id} sprint={sprint} />
                ))}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-base-100 via-base-200 to-transparent"></div>
              </Menu>
            )}
          </div>

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
      </div>
    </>
  );
};

export default SpintAside;
