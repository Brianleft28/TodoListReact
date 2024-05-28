import { useEffect } from 'react';

const SelectOptions = ({ options, status, onChange, style }) => {
  const statusSelect = (e) => {
    onChange(e.target.value);
  };

  useEffect(() => {
    if (options.length > 0) {
      onChange(options[0].id);
    }
  }, [options]);

  return (
    <select
      value={status?.id}
      onChange={statusSelect}
      className={`select  ${style}`}
    >
      {options.length > 0 ? (
        options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.title}
          </option>
        ))
      ) : (
        <option disabled selected>
          Primero cree un tablero
        </option>
      )}
    </select>
  );
};
export default SelectOptions;
