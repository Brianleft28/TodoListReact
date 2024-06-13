import { useEffect, useState } from 'react';

const SelectOptions = ({ options, onChange, style }) => {
  const [selectedOption, setSelectedOption] = useState(() => {
    // Recuperar el valor del localStorage al inicializar el estado
    return localStorage.getItem('selectedSprintId') || '';
  });

  const handleSelectChange = (e) => {
    const newValue = e.target.value;
    setSelectedOption(newValue);
    onChange(newValue);
    localStorage.setItem('selectedSprintId', newValue); // Guardar en localStorage
  };

  useEffect(() => {
    if (options.length >= 0 && options.length === 0 && options[0]) {
      handleSelectChange({ target: { value: options[0].id } });
    }
  }, [options, selectedOption]);

  return (
    <select
      value={selectedOption}
      onChange={handleSelectChange}
      className={`select select-ghost border border-neutral-content/10  ${style}`}
    >
      {options.length > 0 ? (
        options.map((option) => (
          <option key={option.id} value={option.id}>
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
