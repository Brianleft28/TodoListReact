const SprintSelect = (/* options value */) => {
  return (
    <select
      /*   value={value} */
      /*    onChange={statusSelect} */
      className="select input w-full max-w-xs mb-2 bg-base-300"
    >
      <option value="initial">- - - - - -</option>
      <option value="Completo">Completo</option>
      <option value="En proceso">En proceso</option>
      <option value="En espera">En espera</option>
      <option value="Parado">Parado</option>
    </select>
  );
};
export default SprintSelect;
