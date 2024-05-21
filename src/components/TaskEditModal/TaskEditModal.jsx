import React, { useEffect } from 'react'
import TaskContext from '../../context/TaskContext';

const TaskEditModal = () => {
    const {isOpen, setIsOpen, currentTask, onEdit} = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    useEffect(()=>{
        if (currentTask) {
            setTitle(currentTask.title);
            setDescription(currentTask.description);
        }
    },[currentTask])

    const handleSave = () => {
        if (currentTask) {
            onEdit(currentTask.id, {title, description});
            setIsOpen(false);
        }
    }

    if (!isOpen) {
        return null;
    }


    return (
        <div className="modal">
        <div className="modal-content">
          <h2>Edit Task</h2>
          <label>
            Title:
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
            />
          </label>
          <label>
            Description:
            <input 
              type="text" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
            />
          </label>
          <button onClick={handleSave}>Guardar</button>
          <button onClick={() => setIsOpen(false)}>Cancelar</button>
        </div>
      </div>
  )
}

export default TaskEditModal