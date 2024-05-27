import React, { useContext } from 'react';
import { Menu } from 'react-daisyui';
import { Link } from 'react-router-dom';
import SprintContext from '../../../context/SprintContext';

const SprintCard = ({ sprint }) => {
  const { setSprintOpen } = useContext(SprintContext);
  return (
    <Menu.Item vertical={true} className="flex-shrink-1 min-w-[85%] rounded-lg bg-base-300">
      <Link
        onClick={() => setSprintOpen(false)}
        className="py-3"
        to={`/${sprint.id}`}
      >
        {sprint.title}
      </Link>
    </Menu.Item>
  );
};

export default SprintCard;