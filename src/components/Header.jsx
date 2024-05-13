import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);




  return (
    <div className='relative bg-gray-700 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg'>
        <div className='flex flex-row p-3 gap-4 items-center justify-center'>
            <div className=" min-w-80 gap-7 justify-between items-center flex">
            <div>
                    <NavLink href="#" className="text-green-200 font-bold"
                    to='/pending'
                    >
                        Tareas Pendientes
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/'>

                    <h1 className='shadow-sm text-white text-3xl'>| Skyri<span className='font-bold text-green-200 text-3xl'>Tasker</span> |</h1>
                    </NavLink>
                </div>
                <div>
                    <NavLink href="#" className="text-green-200 font-bold"
                    to='/complete'
                    >
                        Tareas Completadas
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header