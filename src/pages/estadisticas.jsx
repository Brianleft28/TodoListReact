import React, { useContext } from 'react';
import { Card, Divider } from 'react-daisyui';
import TaskContext from '../context/TaskContext';

const Estadisticas = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <>
      <div className="p-4 flex flex-col w-full lg:flex-row">
        <Card className="flex gap-2 flex-grow h-auto py-4 bg-base-300 rounded-box place-items-center">
          <span className="font-bold text-2xl">Estadisticas</span>
          {/* Listado de estadisticas */}
          <hr className="text-secondary-content w-80" />

          <div className="place-self-start flex mx-5">
            <h3 className="font-semibold">Tareas completas:</h3>
            <span className="text-secondary-content mx-2 flex ">
              <div className="bg-primary text-base-100 px-2 ">
                {tasks.filter((task) => task.status === 'Completo').length}
              </div>
            </span>
          </div>
          <div className="place-self-start flex mx-5 justify-center align-middle">
            <h3 className="font-semibold">Tareas en proceso:</h3>
            <span className="text-secondary-content mx-2 flex ">
              <div className="bg-primary text-base-100 px-2 ">
                {tasks.filter((task) => task.status === 'En proceso').length}
              </div>
            </span>
          </div>
          <div className="place-self-start flex mx-5">
            <h3 className="font-semibold">Tareas en espera:</h3>
            <span className="text-secondary-content mx-2 flex ">
              <div className="bg-primary text-base-100 px-2 ">
                {tasks.filter((task) => task.status === 'En espera').length}
              </div>
            </span>
          </div>
          <div className="place-self-start flex mx-5">
            <h3 className="font-semibold">Tareas paradas:</h3>
            <span className="text-secondary-content mx-2 flex ">
              <div className="bg-primary text-base-100 px-2 ">
                {tasks.filter((task) => task.status === 'Parada').length}
              </div>
            </span>
          </div>
          <hr className="text-secondary-content w-28 mt-2 ml-[85px] place-self-start" />
          <div className="place-self-start flex gap-3 mx-5">
            <h3 className="font-semibold">Tareas totales:</h3>
            <div className="bg-secondary text-primary px flex ">
              <span className="text-secondary-content px-2 ">
                {tasks.length}
              </span>
            </div>
          </div>
        </Card>
        <Divider> </Divider>
        <Divider> </Divider>
        <Divider> </Divider>
        <Card className="grid flex-grow h-32 bg-base-300 rounded-box place-items-center">
          Gráfico de estadisticas
          <code>(en construcción)</code>
        </Card>
      </div>
    </>
  );
};

export default Estadisticas;
