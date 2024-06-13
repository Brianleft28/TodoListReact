import { useState } from 'react';

const SelectOptionsStatus = ({ options, status, onChange, style }) => {
  const [selectedStatus, setSelectedStatus] = useState(status);

  const handleSelectChange = (event) => {
    setSelectedStatus(event.target.value);
    onChange(event.target.value);
    console.log('Status:', event.target.value);
  };

  return (
    <select
      value={selectedStatus || ''}
      onChange={handleSelectChange}
      className={`select  ${style} select-ghost w-full`}
    >
      {options.length >= 0
        ? options.map((option) => (
            <option key={option.id} value={option.title}>
              {option.title}
            </option>
          ))
        : ''}
    </select>
  );
};
export default SelectOptionsStatus;
