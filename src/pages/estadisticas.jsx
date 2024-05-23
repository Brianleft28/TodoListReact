import React, { useContext } from 'react';
import { Card, Divider } from 'react-daisyui';
import TaskContext from '../context/TaskContext';


const Estadisticas = () => {
const {tasks} = useContext(TaskContext);
  return ( 
  <>
  <div className="p-4 flex flex-col w-full lg:flex-row">
  <Card className="grid flex-grow h-32 bg-base-300 rounded-box place-items-center">
  <span className='font-semibold'>Tareas Completas</span>
  <span>{tasks.filter((task) => task.status === 'Completo').length}</span>

  </Card>
  <Divider> </Divider>
  <Divider> </Divider>
  <Divider> </Divider>
  <Card className="grid flex-grow h-32 bg-base-300 rounded-box place-items-center">
    Tareas Pendientes
  </Card>
</div>
 <div className="p-4 flex flex-col w-full lg:flex-row">
  {/*  */}
  <Card className="grid flex-grow h-32 bg-base-300 rounded-box place-items-center">
  Tareas en proceso
  </Card>
  <Divider> </Divider>
  <Divider> </Divider>
  <Divider> </Divider>
  <Card className="grid flex-grow h-32 bg-base-300 rounded-box place-items-center">
    Tareas paradas
  </Card>
 </div>
  </>
  )
};

export default Estadisticas;
