import './taskcard.css';

import React, { useContext, useEffect, useState } from 'react';
import TaskContext from '../../../context/TaskContext.jsx';
import StatusSelect from '../StatusSelect/StatusSelect.jsx';
/* dnd */
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from 'react-daisyui';

const TaskCard = ({ title, description, taskId, onEditClick, status }) => {
  const [isDragging, setIsDragging] = useState(false);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: taskId,
      listeners: {
        onDragStart: () => setIsDragging(true),
        onDragEnd: () => setIsDragging(false),
      },
    });

  const style = {
    transform: CSS.Transform.toString({
      ...transform,
      scaleX: isDragging ? 1.2 : 1,
      scaleY: isDragging ? 1.2 : 1,
    }),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  /* Desuctructuración dek contenxto */
  const { deleteTask, setStatus } = useContext(TaskContext);

  /* Estilo de estados */
  const renderStatus = (status) => {
    switch (status) {
      case 'Completo':
        return 'badge badge-success gap-2  ';
      case 'En proceso':
        return 'badge badge-warning gap-2 ';
      case 'En espera':
        return 'badge badge-info gap-2 ';
      case 'Parada':
        return 'badge badge-error gap-2 ';
      default:
        return 'hidden ';
    }
  };

  return (
    <>
      <tr
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
        className="justify-around-row hover"
      >
        <td className="">{title}</td>
        <td className="max-w-80 overflow-auto break-words space-p">
          {description}
        </td>
        <td>
          <div className="flex items-center gap-3 min-w-20">
            <div className={`p-1 rounded ${renderStatus(status)}`}>
              {status}
            </div>
          </div>
        </td>
        <td>
          <div className="flex items-center gap-4">
            <StatusSelect
              status={status}
              onChange={(newStatus) => setStatus(taskId, newStatus)}
            />
            <div
              className="flex gap-3 "
              style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
            >
              <button onClick={() => onEditClick(taskId)}>
                <Button color="primary">Editar</Button>
              </button>
              <button onClick={() => deleteTask(taskId)}>
                <Button color="error">Eliminar</Button>
              </button>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TaskCard;
