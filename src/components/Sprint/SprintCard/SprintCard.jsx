import React from 'react';
import {Menu, } from 'react-daisyui';
import { Link } from 'react-router-dom';

const SprintCard = ({ sprint }) => {
  return (
            <Menu.Item className='w-full rounded-lg  bg-base-300'>
                    <Link
                    className=' py-3'
                      to={`/${sprint.id}`}>{sprint.title}</Link>
            </Menu.Item>

  );
};

export default SprintCard;
