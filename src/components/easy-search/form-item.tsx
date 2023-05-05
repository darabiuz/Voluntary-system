import { Input, Radio, Select } from "antd"
import { FC } from "react"

export const InputItem: FC<{ inputProps: any }> = ({ inputProps }) => {
  return <Input {...inputProps}></Input>
}
export const RadioItem: FC<{ radioProps: any }> = ({ radioProps }) => {
  return <Radio.Group {...radioProps}></Radio.Group>
}
export const SelectItem: FC<{ selectProps: any }> = ({ selectProps }) => {
  return <Select {...selectProps}></Select>
}
