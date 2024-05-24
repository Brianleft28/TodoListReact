import './SprintAside.css'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const SpintAside = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => { setIsOpen(!isOpen); };

  return (
    <>
    <motion.aside
    className="sprint-aside bg-gradient-to-b from-base to-base-content p-3 w-full max-w-xs"
    initial={{ x: '-100%', opacity: 0 }}
    animate={{ x: isOpen ? 0 : '-100%', opacity: isOpen ? 1 : 0 }}
    transition={{ duration: 0.1 }}
  >
    <div className="flex justify-center  md:items-center mb-6">
      

        <div>hola</div>
      <button
        className="fixed bottom-5 left-12 w-52 justify-center btn  btn-error px-4 py-2"
        onClick={handleToggle}
        >
          Agregar Sprint
        {isOpen ? 'Cerrar' : '...'}
      </button>
    </div>
    
  </motion.aside>
  {

    !isOpen && (
      <button
      onClick={handleToggle}
      className="btn btn-primary fixed bottom-6 left-10"
      >
            Sprints
          </button>
        )
      }
  </>
  ) 
}

export default SpintAside