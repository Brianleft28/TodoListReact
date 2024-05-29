import './taskboard.css';
import React, { useState, useContext } from 'react';
import TaskAside from '../TaskAside/TaskAside.jsx';
import SpintAside from '../../Sprint/SprintSide/SpintAside.jsx';
import SprintContext from '../../../context/SprintContext.jsx';

/* Definición del tablero */
const TaskBoard = () => {
  const { sprints, setSprintOpen, isSprintOpen } = useContext(SprintContext);
  const [started, setStarted] = useState(false);

  /* Manejador de firstHandler */
  const handleGetStarted = () => {
    setStarted(true);
  };

  /* Renderizado condicional */
  if (!sprints || sprints.length === 0) {
    return (
      <>
        <div>
          {started ? (
            <div className="flex justify-center align-middle border-x-slate-200 border-2 w-[500px] m-auto ">
              {/* Tablero de bienvenida */}
              <div className="overflow-x-auto">
                <table className="table table-xs">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Job</th>
                      <th>company</th>
                      <th>location</th>
                      <th>Last Login</th>
                      <th>Favorite Color</th>
                    </tr>
                  </thead>
                  <tbody>{/* Tablero de bienvenida */}</tbody>
                </table>
              </div>

              <SpintAside />
              <TaskAside />
            </div>
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
                    onClick={handleGetStarted}
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

  return <div></div>;
};

export default TaskBoard;
