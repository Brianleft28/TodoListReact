import React from 'react';

const FirstTime = ({ firstHanlder }) => {
  return (
    <div className="hero min-h-screen container mx-auto">
      <div className="hero-content text-center  border-neutral-content/5 border-2">
        <div className="max-w-lg flex flex-col">
          <h1 className="text-5xl font-bold">Organizate con Task Manager</h1>
          <p className="p-6">
            {' '}
            Organiza tus tareas y actividades mediante tableros. Puedes crear,
            editar y eliminar tareas, así como analizar tu productividad usando
            la pestaña de estadísticas. Para comenzar, por favor, regístrate.
          </p>
          <button className="btn btn-primary " onClick={firstHanlder}>
            COMENZAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstTime;
