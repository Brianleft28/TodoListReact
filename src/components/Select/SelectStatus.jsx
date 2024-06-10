import { useState } from 'react';

const SelectOptionsStatus = ({ options, status, onChange, style }) => {
  const [selectedStatus, setSelectedStatus] = useState(status);

  const handleSelectChange = (event) => {
    setSelectedStatus(event.target.value);
    onChange(event.target.value);
  };

  return (
    <select
      value={selectedStatus || ''}
      onChange={handleSelectChange}
      className={`select  ${style} select-bordered w-full max-w-xs`}
    >
      {options.length > 0
        ? options.map((option) => (
            <option key={option.id} value={option.title}>
              {option.title}
            </option>
          ))
        : null}
    </select>
  );
};
export default SelectOptionsStatus;
