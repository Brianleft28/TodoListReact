import React from 'react'
import { NavLink } from 'react-router-dom'

const Inicio = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>

    <NavLink to='/board'>
      <button className='bg-green-200 w-40 h-20 hover:bg-green-400 font-bold text-2xl rounded-full'>
        Ir al tablero
      </button>
    </NavLink>
    </div>
  )
}

export default Inicio