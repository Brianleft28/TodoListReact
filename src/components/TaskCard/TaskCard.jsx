import './taskcard.css';

import React, { useContext } from 'react';
import ButtonEdit from '../TaskButtons/ButtonEdit.jsx';
import { FaRegTrashAlt } from 'react-icons/fa';
import TaskContext from '../../context/TaskContext.jsx';
import StatusSelect from '../StatusSelect/StatusSelect.jsx';

const TaskCard = ({ title, description, taskId, onEditClick, status }) => {
  const { deleteTask, setStatus } = useContext(TaskContext);

  const renderStatus = (status) => {
    switch (status) {
      case 'Complete':
        return 'bg-green-500 ';
      case 'In process':
        return 'bg-yellow-500 ';
      case 'Ready for start':
        return 'bg-blue-500 ';
      case 'Stopped':
        return 'bg-red-500 ';
      default:
        return 'hidden ';
    }
  };

  return (
    <>
      <tr className="justify-around-row hover">
        <td className="">{title}</td>
        <th className="max-w-80 overflow-auto break-words">{description}</th>
        <td>
          <div className="flex items-center gap-3 min-w-20">
            <div>{status}</div>
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
