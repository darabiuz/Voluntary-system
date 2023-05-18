import {
  Button,
  Descriptions,
  Form,
  FormInstance,
  FormItemProps,
  Input,
  InputProps,
  Radio,
  RadioGroupProps,
  Select,
  SelectProps,
  Space
} from "antd"
import { FormItem } from "@components/help"
import { useForm } from "antd/es/form/Form"

export type BaseType = {
  tag: "input" | "select" | "radio" | "custom"
  render?: () => React.ReactNode //支持自定义内容
  format?: RegExp
} & Pick<InputProps, "placeholder" | "allowClear" | "type"> &
  Pick<SelectProps, "options" | "allowClear" | "mode"> &
  Pick<RadioGroupProps, "options">

export type FormItemProp = Pick<FormItemProps, "label" | "name" | "required">

export type ColumnsType = BaseType & FormItemProp

export const EasySearch: React.FC<{
  columns: ColumnsType[]
  formApi?: any
  onValuesChange?: (v: any) => void
}> = ({ columns, formApi, onValuesChange }) => {
  return (
    <Form
      form={formApi}
      onValuesChange={(v) => {
        onValuesChange && onValuesChange(v)
      }}
    >
      {columns.map((item) => {
        const { tag, label, name, required = false, ...others } = item
        switch (tag) {
          case "input":
            return (
              <FormItem
                label={label}
                name={name}
                rules={[{ required: required, message: "请输入" }]}
              >
                <Input {...others}></Input>
              </FormItem>
            )
          case "radio":
            return (
              <FormItem
                label={label}
                name={name}
                rules={[{ required: required, message: "请选择" }]}
              >
                <Radio.Group {...others}></Radio.Group>
              </FormItem>
            )
          case "select":
            return (
              <FormItem
                label={label}
                name={name}
                rules={[{ required: required, message: "请选择" }]}
              >
                <Select {...others}></Select>
              </FormItem>
            )
          case "custom":
            const { render } = item
            return (
              <FormItem
                label={label}
                name={name}
                rules={[{ required: required, message: "" }]}
              >
                {render && render()}
              </FormItem>
            )
          default:
            return <></>
        }
      })}
    </Form>
  )
}
