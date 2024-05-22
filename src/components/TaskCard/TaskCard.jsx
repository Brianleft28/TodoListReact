import React, { useContext } from 'react';
import ButtonEdit from '../TaskButtons/ButtonEdit.jsx';
/* import ButtonDelete from '../TaskButtons/ButtonDelete.jsx'   */
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
    <tr className="bg-gradient-to-bl from-transparent to-black  border-y-2 border-green-500">
      <td className="border whitespace-normal  text-white px-4 py-2">
        <div className="flex justify-between ">
          <span className="inline-block">{title}</span>
          <div className="inline-block items-center justify-end">
            <button className="mr-3" onClick={onEditClick}>
              <ButtonEdit />
            </button>
            <button onClick={() => deleteTask(taskId)}>
              <FaRegTrashAlt className="hover:text-red-500 transition-all duration-150 hover:cursor-pointer" />
            </button>
          </div>
        </div>
      </td>
      <td className="border border-transparent flex items-center justify-between px-4 py-2 text-white">
        <span className="block whitespace-normal break-words">
          {description}
        </span>
      </td>
      <td>
        <div className="flex justify-end mx-0  items-center">
          <div className="mr-3 p-2 flex">
            <span
              className={`flex justify-self-center text-white ${renderStatus(status)}p-3 font-bold`}
            >
              {status}
            </span>
          </div>
          <div className="mr-3 p-2">
            <StatusSelect
              status={status}
              onChange={(newStatus) => setStatus(taskId, newStatus)}
            />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TaskCard;
