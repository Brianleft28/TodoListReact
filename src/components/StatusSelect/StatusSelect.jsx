export const StatusSelect = ({ status, onChange }) => {
  const statusSelect = (e) => {
    onChange(e.target.value);
  };

  return (
    <select
      value={status}
      onChange={statusSelect}
      className="select w-full max-w-xs min-w-52"
    >
      <option value="initial">Seleccione un estado</option>
      <option value="Completo">Completo</option>
      <option value="En proceso">En proceso</option>
      <option value="En espera">En espera</option>
      <option value="Parada">Parada</option>
    </select>
  );
};

export default StatusSelect;
