import './taskcard.css';

import React, { useContext } from 'react';
import ButtonEdit from '../TaskButtons/ButtonEdit.jsx';
import { FaRegTrashAlt } from 'react-icons/fa';
import TaskContext from '../../context/TaskContext.jsx';
import StatusSelect from '../StatusSelect/StatusSelect.jsx';
/* dnd */
import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

const TaskCard = ({ title, description, taskId, onEditClick, status }) => {
  
const {
  attributes,
  listeners,
  setNodeRef,
  transform,
  transition
} =  useSortable({
    id: taskId,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  const { deleteTask, setStatus } = useContext(TaskContext);

  const renderStatus = (status) => {
    switch (status) {
      case 'Completo':
        return 'bg-success text-neutral  ';
      case 'En proceso':
        return 'bg-yellow-500 text-neutral ';
      case 'En espera':
        return 'bg-info text-neutral ';
      case 'Parada':
        return 'bg-error text-neutral ';
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
        <th className="max-w-80 overflow-auto break-words">{description}</th>
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
            <div className="flex gap-3 ">
              <button onClick={onEditClick}>
                <ButtonEdit />
              </button>
              <button onClick={() => deleteTask(taskId)}>
                <FaRegTrashAlt className="hover:text-secondary transition-all duration-150 hover:cursor-pointer" />
              </button>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TaskCard;
