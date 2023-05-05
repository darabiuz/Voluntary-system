import { Form } from "react-router-dom"
import { InputItem, RadioItem, SelectItem } from "./form-item"
import { FormItemProps, InputProps, RadioGroupProps, SelectProps } from "antd"
import { FormItem } from "@components/help"

export type BaseType = {
  tag: "input" | "select" | "radio"
} & Pick<InputProps, "placeholder"> &
  Pick<SelectProps, "options"> &
  Pick<RadioGroupProps, "options">

export type FormItemProp = Pick<FormItemProps, "label" | "name">

export type ColumnsType = BaseType & FormItemProp

export const EasySearch: React.FC<{
  columns: ColumnsType[]
}> = ({ columns }) => {
  return (
    <Form>
      {columns.map((item) => {
        const { tag, label, name, placeholder, options } = item
        switch (tag) {
          case "input":
            return (
              <FormItem label={label} name={name}>
                <InputItem inputProps={{ placeholder }} />
              </FormItem>
            )
          case "radio":
            return (
              <FormItem label={label} name={name}>
                <RadioItem radioProps={{ options }} />
              </FormItem>
            )
          case "select":
            return (
              <FormItem label={label} name={name}>
                <SelectItem selectProps={{ options }} />
              </FormItem>
            )
          default:
            return <></>
        }
      })}
    </Form>
  )
}
