import { createContext, useState } from 'react';

export const FilteredTaskContent = createContext();

export const TaskContextProvider = ({ children }) => {
  const [theseTask, setTheseTask] = useState([]);

  return (
    <FilteredTaskContent.Provider
      value={{
        theseTask,
        setTheseTask,
      }}
    >
      {children}
    </FilteredTaskContent.Provider>
  );
};
export default FilteredTaskContent;
