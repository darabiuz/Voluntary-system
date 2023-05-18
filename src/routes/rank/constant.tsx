import { ColumnsType } from "@components/easy-search/easy-search"
import { provincesOptions, types, typesOptions } from "@routes/constant"
import { ColumnType } from "antd/es/table"
const typeOptions = types?.map((item) => ({
  value: item?.slice(0, -1),
  label: item
}))

export const columns: ColumnType<any>[] = [
  {
    title: "排名",
    dataIndex: "ranking",
    key: "ranking",
    sorter: true,
    fixed: "left",
    render: (v) => {
      return (
        <span
          style={{
            fontSize: "16px",
            fontWeight: "bolder",
            fontStyle: "italic",
            color: "rgb(22, 119, 255)"
          }}
        >
          {v}
        </span>
      )
    }
  },
  {
    title: "学校名称",
    dataIndex: "schoolName",
    key: "schoolName",
    fixed: "left"
  },
  { title: "省市", dataIndex: "province", key: "province" },
  { title: "学校类型", dataIndex: "schoolType", key: "schoolType" },
  {
    title: "总得分",
    dataIndex: "totalScore",
    key: "totalScore",
    sorter: (a, b) => a.totalScore - b.totalScore // 对该列进行排序的函数
  }
]

export const searchColumns: ColumnsType[] = [
  {
    tag: "select",
    label: "地区",
    name: "region",
    placeholder: "请输入",
    allowClear: true,
    options: provincesOptions
  },
  {
    tag: "select",
    label: "学校所属类型",
    name: "type",
    allowClear: true,
    options: typeOptions
  }
]
