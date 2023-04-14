import React from "react"
import { CheckboxOptionType, Radio, RadioGroupProps, Space } from "antd"

interface EasyFilterProps {
  filterKey: string
  options: Array<CheckboxOptionType | string | number>
  value: any
  title: React.ReactNode
  handleChange?: (value: string, key: string) => void
}

/** 单选组件 */
const EasyFilter: React.FC<EasyFilterProps & RadioGroupProps> = ({
  filterKey,
  options,
  value,
  handleChange,
  title,
  ...rest
}) => {
  return (
    <Space>
      <p style={{ whiteSpace: "nowrap" }}>{title}:</p>
      <Radio.Group
        onChange={(e) => {
          if (handleChange) {
            handleChange(e.target.value, filterKey)
          }
        }}
        value={value}
        options={options}
        optionType="button"
        size="small"
        {...rest}
      />
    </Space>
  )
}

export default EasyFilter
