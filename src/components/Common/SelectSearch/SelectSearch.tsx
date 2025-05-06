import { Select } from "antd";
import AntdThemeProvider from "./../../../providers/themeProvider/AntdThemeProvider";
import { FC } from "react";
import { SelectOption } from "../../../types/app/SelectOption";

type Props = {
  options: SelectOption[];
  defaultValue?: string;
  handleChange: (value: string) => void;
  value?: string;
  width?: string;
  className?: string;
  id?: string;
};

const SelectSearch: FC<Props> = ({
  options,
  defaultValue,
  value,
  handleChange,
  width = "100%",
  className,
  id,
}) => {
  return (
    <AntdThemeProvider>
      <Select
        id={id}
        showSearch
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        size="large"
        className={className}
        style={{ width: width }}
        defaultValue={defaultValue ?? value}
        onChange={handleChange}
        options={options}
        value={value}
      />
    </AntdThemeProvider>
  );
};

export default SelectSearch;
