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
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
export default SelectOptions;
