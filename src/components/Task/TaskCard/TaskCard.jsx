import React from 'react';
import { FaEye } from 'react-icons/fa';

const TaskCard = ({ task, onOpen }) => {
  return (
    <div className="bg-gradient-to-l from-base-100 via-base-100/10 to-base-200 p-2 hover:bg-base-100  hover:shadow-sm flex flex-row justify-between items-center">
      <div>{task.title}</div>
      <div>
        <button
          onClick={onOpen}
          className="btn btn-square btn-primary tranform hover:scale-105"
        >
          <FaEye />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
