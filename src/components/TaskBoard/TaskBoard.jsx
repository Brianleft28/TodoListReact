import './taskboard.css';
import React from 'react';
import TaskCard from '../TaskCard/TaskCard';
import TaskAside from '../TaskAside/TaskAside';

import { useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import TaskEditModal from '../TaskEditModal/TaskEditModal';
/* dnd */
import { DndContext, closestCenter, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';
import { saveTasks } from '../../hooks/localStorageService';

const Board = () => {
  const { isOpen, tasks, setTasks, setIsOpen, setCurrentTask, saveTask } =
    useContext(TaskContext);

  const handleEditClick = (task) => {
    setCurrentTask(task);
    console.log('hola')
    setIsOpen(true);
    console.log(tasks)
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

  if (over) {
    const oldIndex = tasks.findIndex((task) => task.id === active.id);
    const newIndex = tasks.findIndex((task) => task.id === over.id);

    const newOrder = arrayMove(tasks, oldIndex, newIndex);
    setTasks(newOrder);
    saveTasks(newOrder);
  }
}

const sensors = useSensors(
  useSensor(PointerSensor,{
    activationConstraint: {
      delay: 150,
      tolerance: 1
    }
  }),
)

  if (!tasks || tasks.length === 0) {
    return (
      <>
        <div className="text-neutral-content flex justify-center min-h-full text-2xl">
          <h3 className="my-auto text-black">Comience agregando una tarea</h3>
        </div>
        <TaskAside />
      </>
    );
  }

  return (
    <>
      <div className="overflow-x-hidden">
        <table className="table table-xs mx-auto justify-around-row">
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
            <DndContext
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
              sensors={sensors}
            >
              <SortableContext
                items={tasks}
                strategy={verticalListSortingStrategy}
              >
                {tasks.map((task) => (
        <React.Fragment key={task.id}>
        <TaskCard
          taskId={task.id}
          title={task.title}
          description={task.description}
          status={task.status}
          onEditClick={() =>   handleEditClick(task) }
        />
        <hr className="hidden" />
      </React.Fragment>
                  
                ))}
              </SortableContext>
            </DndContext>
          </tbody>
        </table>
      </div>
      {isOpen && <TaskEditModal />}
      <TaskAside />
    </>
  );
};

export default Board;
