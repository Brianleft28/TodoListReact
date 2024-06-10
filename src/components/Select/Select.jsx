import { useEffect, useState } from 'react';

const SelectOptions = ({ options, status, onChange, style }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    onChange(e.target.value);
  };

  useEffect(() => {
    if (options.length > 0 && selectedOption === null) {
      handleSelectChange({ target: { value: options[0].id } });
    }
  }, [options, selectedOption]);

  return (
    <select
      value={selectedOption}
      onChange={handleSelectChange}
      className={`select bordered  ${style}`}
    >
      {options.length > 0 ? (
        options.map((option) => (
          <option key={option.id} value={option.id || ''}>
            {option.title}
          </option>
        ))
      ) : (
        <option value="none" disabled selected>
          Primero cree un tablero
        </option>
      )}
    </select>
  );
};
export default SelectOptions;
