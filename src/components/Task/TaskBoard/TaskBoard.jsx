import './taskboard.css';
import React, { useState, useContext, useEffect } from 'react';
import TaskAside from '../TaskAside/TaskAside.jsx';
import SpintAside from '../../Sprint/SprintSide/SpintAside.jsx';
import SprintContext from '../../../context/SprintContext.jsx';
import SprintView from '../../../pages/SprintView/SprintView.jsx';

/* Definición del tablero */
const TaskBoard = () => {
  const { sprints, setSprintOpen, isSprintOpen } = useContext(SprintContext);
  const [started, setStarted] = useState(false);

  /* Manejador de firstHandler */
  const handleGetStarted = () => {
    setStarted(true);
  };

  /* Manejador de getStartedHandler */

  useEffect(() => {
    if (sprints) {
      setSprintOpen(true);
      setStarted(false);
    }
  }, [started]);

  /* Renderizado condicional */
  if (!sprints || sprints.length === 0) {
    return (
      <>
        <div>
          {started ? (
            <>
              <SpintAside />
            </>
          ) : (
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-5xl font-bold">Task Manager</h1>
                  <p className="py-6">
                    Organice su trabajo con tableros y tareas. ¿Porque no
                    comienza creando un tablero?
                  </p>
                  <button
                    onClick={() => handleGetStarted()}
                    className="btn btn-primary"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

  useEffect(() => {
    if (sprints.length > 0 && !isSprintOpen) {
      setSprintOpen(true);
    }
  }, []);
  return (
    <div>
      <SpintAside />
      <TaskAside />
    </div>
  );
};

export default TaskBoard;
