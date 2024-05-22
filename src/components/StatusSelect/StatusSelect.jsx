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
      <option value="initial">- - -</option>
      <option value="Complete">Complete</option>
      <option value="In process">In process</option>
      <option value="Ready for start">Ready for start</option>
      <option value="Stopped">Stopped</option>
    </select>
  );
};

export default StatusSelect;
