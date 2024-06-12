import React, { useContext, useEffect } from 'react';
import { Select } from 'react-daisyui';
import SprintContext from '../../context/SprintContext';

const AdminBoard = () => {
  const { sprints } = useContext(SprintContext);

  return (
    <div className="mx-auto gap-2 flex sm:flex-row flex-col h-screen pt-20 pb-5 container justify-center items-start">
      <div className="md:rounded-s-3xl  border border-neutral-content/10 bg-gradient-to-r from-base-100 to-base-200 via-base-200/25 p-4 h-[200px] w-full flex-grow">
        <h1 className="text-xl font-bold text-neutral-content text-center">
          Tableros
        </h1>
        <div className="grid gap-1 grid-cols-1 justify-center items-center">
          <Select options={sprints} />
        </div>
      </div>
      <div className="md:rounded-e-3xl  border border-neutral-content/10 bg-gradient-to-r to-base-100 from-base-200 via-base-200/50 p-4 h-[200px] w-full flex-grow">
        <h1 className="text-xl font-bold text-neutral-content text-center">
          Tareas
        </h1>
      </div>
    </div>
  );
};

export default AdminBoard;
