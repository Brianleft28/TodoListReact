export const StatusSelect = ({ status, onChange }) => {
  const statusSelect = (e) => {
    onChange(e.target.value);
  };

  return (
    <select
      value={status}
      onChange={statusSelect}
      className="border whitespace-normal text-black px-4 py-2"
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
