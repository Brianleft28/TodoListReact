const SelectOptions = ({ options, status, onChange, style }) => {
  const statusSelect = (e) => {
    onChange(e.target.value);
  };
  return (
    <select
      value={status}
      onChange={statusSelect}
      className={`${style} select bg-base-300`}
    >
      {options.length > 0 ? (
        options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.title}
          </option>
        ))
      ) : (
        <option disabled defaultValue>
          Primero cree un tablero
        </option>
      )}
    </select>
  );
};
export default SelectOptions;
