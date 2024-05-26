import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

const Filter = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        format={dateFormatList}
        onChange={onChange}
        className="rounded-lg w-full max-w-xs mb-2  "
      />
    </Space>
  );
};
export default Filter;
