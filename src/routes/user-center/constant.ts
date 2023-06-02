import { ColumnsType } from "@components/easy-search/easy-search"
import { ItemType } from "antd/es/menu/hooks/useItems"

export const menuList = [
  { label: "个人信息", key: "1" },
  { label: "个人信息修改", key: "2" }
] as ItemType[]

export const searchColumns: ColumnsType[] = [
  {
    tag: "input",
    label: "昵称",
    name: "nickName",
    placeholder: "请输入",
    required: true,
    allowClear: true
  },
  {
    tag: "input",
    label: "高考分数",
    name: "score",
    placeholder: "请输入",
    required: true,
    allowClear: true
  },
  {
    tag: "input",
    label: "高考排名",
    name: "rank",
    placeholder: "请输入",
    required: true,
    allowClear: true
  },
  {
    tag: "input",
    label: "密码",
    name: "pass",
    placeholder: "请输入",
    required: true,
    allowClear: true
  }
]
