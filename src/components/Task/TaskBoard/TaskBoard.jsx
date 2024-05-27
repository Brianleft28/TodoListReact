import './taskboard.css';
import React from 'react';
import TaskAside from '../TaskAside/TaskAside.jsx';
import SprintAside from '../../Sprint/SprintSide/SpintAside.jsx';
import { useContext } from 'react';
import TaskContext from '../../../context/TaskContext';
import TaskCard from '../TaskCard/TaskCard';
import TaskEditModal from '../TaskEditModal/TaskEditModal';
/* dnd */
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';
import { saveTasks } from '../../../logic/localStorageService.js';

/* Definición del tablero */
const Board = () => {
  /* usando el contexto */
  const { isOpen, tasks, setTasks, setIsOpen, setCurrentTask } =
    useContext(TaskContext);

  /* Manejador del evento edit */
  const handleEditClick = (task) => {
    setCurrentTask(task);
    setIsOpen(true);
    console.log(tasks);
  };
  /* Manejador del evento arrastrar */
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over) {
      const oldIndex = tasks.findIndex((task) => task.id === active.id);
      const newIndex = tasks.findIndex((task) => task.id === over.id);

      const newOrder = arrayMove(tasks, oldIndex, newIndex);
      setTasks(newOrder);
      saveTasks(newOrder);
    }
  };
  /* Sensores para activar el drop
    En este caso se activa el drop luego de 150ms de estar sobre un elemento
    y con una tolerancia de 1px
*/
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 1,
      },
    }),
  );

  /* Renderizado condicional */
  if (!tasks || tasks.length === 0) {
    return (
      <>
        <div className="flex justify-center min-h-full text-2xl scroll-smooth">
          <h3 className="my-auto text-semibold text-base-content">
            Comience agregando una tarea
          </h3>
        </div>
        <TaskAside />
        <SprintAside />
      </>
    );
  }

  /* Renderizado del componente tablero */

  return (
    <>
      <div>
        <div className="max-h-[408px] overflow-auto">
          <table className="bg-transparent max-h-[calc(100vh-60px)] table table-xs mx-auto justify-around-row">
            {/* head */}
            <thead>
              <tr className="pb-2 p-2 border-b-1 border-neutral">
                <th>Titulo</th>
                <th>Descripción</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <br />
              {/* Contexto para el DND */}
              <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
                sensors={sensors}
              >
                <SortableContext
                  items={tasks}
                  strategy={verticalListSortingStrategy}
                >
                  {/* Renderizado de las tareas con TASKCARD */}
                  {tasks.map((task) => (
                    <React.Fragment key={task.id}>
                      <TaskCard
                        taskId={task.id}
                        title={task.title}
                        description={task.description}
                        status={task.status}
                        onEditClick={() => handleEditClick(task)}
                      />
                      <hr className="hidden" />
                    </React.Fragment>
                  ))}
                </SortableContext>
              </DndContext>
            </tbody>
          </table>
        </div>
      </div>
      {isOpen && <TaskEditModal />}
      <TaskAside />
      <SprintAside />
    </>
  );
};

export default Board;
