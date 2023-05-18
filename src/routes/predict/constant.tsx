import { dialog } from "@components/dialog"
import { ColumnsType } from "@components/easy-search/easy-search"
import { generateMap } from "@help/index"
import { Button, Input, List, Modal, Space, Tooltip } from "antd"
import { ColumnType } from "antd/es/table"
import { handleAddWishList } from "./help"
import { provincesOptions, typesOptions } from "@routes/constant"

const descriptionOptions = [
  {
    label: "双一流",
    value: "dual_class"
  },
  {
    label: "985",
    value: "985"
  },
  {
    label: "211",
    value: "211"
  }
]

const batchOptions = [
  {
    label: "本科一批",
    value: "batch1"
  },
  {
    label: "本科二批",
    value: "batch2"
  },
  {
    label: "本科提前批",
    value: "batch3"
  },
  {
    label: "专科批",
    value: "batch4"
  },
  {
    label: "国家专项批",
    value: "batch5"
  }
]

const categoryOptions = [
  {
    label: "文科",
    value: "文科"
  },
  {
    label: "理科",
    value: "理科"
  }
]

export const searchColumns: ColumnsType[] = [
  {
    tag: "input",
    label: "高考分数",
    name: "score",
    placeholder: "请输入",
    required: true,
    allowClear: true
  },
  {
    tag: "radio",
    label: "文理科",
    name: "category",
    required: true,
    allowClear: true,
    options: categoryOptions
  },
  {
    tag: "select",
    label: "录取批次",
    name: "batch",
    required: true,
    allowClear: true,
    options: batchOptions
  },
  {
    tag: "select",
    label: "院校特色",
    mode: "multiple",
    name: "feature",
    allowClear: true,
    options: descriptionOptions
  },
  {
    tag: "select",
    label: "办学类型",
    mode: "multiple",
    name: "type",
    options: typesOptions,
    allowClear: true
  },
  {
    tag: "select",
    label: "意愿地区",
    name: "province",
    allowClear: true,
    options: provincesOptions,
    mode: "multiple"
  },
  {
    tag: "select",
    label: "意愿专业",
    name: "majorFavor",
    mode: "multiple",
    allowClear: true,
    options: provincesOptions
  }
]

export enum TabItemEnum {
  High = "冲刺",
  Moderate = "稳妥",
  Low = "保底"
}

const tabItemMap = {
  [TabItemEnum.High]: "可冲刺",
  [TabItemEnum.Moderate]: "较稳妥",
  [TabItemEnum.Low]: "可保底"
}

export const tabItemOptions = generateMap(tabItemMap)

export const tableColumns = (hasMajor: boolean, batch: string) =>
  [
    {
      title: "院校名称",
      dataIndex: "school",
      width: "150px",
      key: "school",
      fixed: "left"
    },
    {
      title: "院校特色",
      dataIndex: "feature",
      width: "160px",
      key: "feature",
      render: (_: any, record: any) => {
        const data = record.feature_ref
        return (
          <List
            dataSource={Object.keys(data)}
            size="small"
            renderItem={(item) => {
              if (item === "description") {
                const str = Object.keys(data?.[item]).map((title) => {
                  if (data?.[item]?.[title] == 1) {
                    return title === "dual_class" ? "双一流" : title
                  }
                })
                if (!str.some((item) => item !== undefined)) {
                  return null
                }
                return (
                  <List.Item>
                    <span>{str.join(" ")}</span>
                  </List.Item>
                )
              }
              return (
                <List.Item>
                  <span>{data?.[item]}</span>
                </List.Item>
              )
            }}
          />
        )
      }
    },
    {
      title: "招生类型",
      dataIndex: "enrollment_type",
      width: "100px",
      key: "enrollment_type"
    },
    {
      title: "历年最低收分线/省排位",
      dataIndex: "schoolAdmission",
      key: "schoolAdmission",
      width: "210px",
      render: (text: string, record: any) => {
        const data = record.receive_line_ref
        return (
          <List
            dataSource={Object.keys(data).reverse()}
            size="small"
            renderItem={(item) => (
              <List.Item>
                <span>{item} :</span>
                <span>{data?.[item]}</span>
              </List.Item>
            )}
          />
        )
      }
    },
    {
      title: "预测今年最低收分线",
      dataIndex: "weighted_avg_score",
      width: "120px",
      key: "weighted_avg_score",
      align: "right"
    },
    {
      title: "操作",
      dataIndex: "custom",
      key: "custom",
      render: (_: any, record: any) => {
        return (
          <Space direction="vertical" size="middle">
            <Button
              type="primary"
              onClick={() => {
                handleAddWishList(record.school, batch)
              }}
            >
              +志愿簿
            </Button>
            {hasMajor && <Button type="primary">预测专业上岸率</Button>}
          </Space>
        )
      }
    }
  ] as ColumnType<any>[]

export const mbtiTableColumns = [
  {
    title: "MBTI人格",
    dataIndex: "mbtiName",
    key: "mbtiName"
  },

  {
    title: "人格全称",
    dataIndex: "fullName",
    key: "fullName"
  },
  {
    title: "人格昵称",
    dataIndex: "nickname",
    key: "nickname"
  },
  {
    title: "人格特点",
    dataIndex: "characteristics",
    key: "characteristics",
    render: (v: any) => {
      return (
        <Tooltip title={v}>
          {v.slice(0, 10)}
          {"..."}
        </Tooltip>
      )
    }
  },
  {
    title: "操作",
    dataIndex: "suitableMajor",
    key: "suitableMajor",
    render: (v: string) => {
      const handleClick = (v: string) => {
        const majorList = v.slice(1, -1).split(",")
        dialog.form({
          title: "该mbti适合的专业",
          footer: null,
          form: (
            <List
              bordered
              size="small"
              dataSource={majorList}
              pagination={{ pageSize: 8, pageSizeOptions: [] }}
              renderItem={(item: any) => {
                return <List.Item>{item.slice(2, -1)}</List.Item>
              }}
            />
          )
        })
      }
      return (
        <Button
          onClick={() => {
            handleClick(v)
          }}
        >
          查看详情
        </Button>
      )
    }
  }
]

export const mbtiList = [
  "INTP",
  "INTJ",
  "INFJ",
  "INFP",
  "ENTP",
  "ENTJ",
  "ENFJ",
  "ENFP",
  "ESFP",
  "ISFP",
  "ISTP",
  "ISFJ",
  "ISTJ",
  "ESTP",
  "ESFJ",
  "ESTJ"
]

export const mbtiOptions = mbtiList?.map((item) => {
  return {
    label: item,
    value: item
  }
})

export const mbtiSearchColumns: ColumnsType[] = [
  {
    tag: "select",
    label: "MBTI人格",
    name: "mbtiName",
    placeholder: "请选择",
    options: mbtiOptions,
    allowClear: true,
    required: true
  }
]
