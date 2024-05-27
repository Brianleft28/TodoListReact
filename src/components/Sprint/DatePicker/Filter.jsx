import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

const Filter = ({ onChange }) => {
  const handleDataChange = (date, dateString) => {
    if (date) {
      onChange(dateString[0], dateString[1]);
    } else {
      onChange('', '');
    }
  };
  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        format={dateFormatList}
        onChange={handleDataChange}
        className="rounded-lg w-full max-w-xs mb-2 shadow-md "
      />
    </Space>
  );
};
export default Filter;
