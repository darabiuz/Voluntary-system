import { dialog } from "@components/dialog"
import { ColumnsType } from "@components/easy-search/easy-search"
import { generateMap } from "@help/index"
import { provincesOptions } from "@routes/school-message/constant"
import { Button } from "antd"

const handleAddWishList = (schoolName: string) => {
  dialog.form({
    title: `志愿簿添加`,
    onOk: async () => {
      return new Promise<void>((res) => {
        console.log("执行onOk")
        throw Error
        res()
      })
    }
  })
}
export const searchColumns: ColumnsType[] = [
  {
    tag: "input",
    label: "高考分数",
    placeholder: "请输入"
  },
  {
    tag: "input",
    label: "省位排名",
    placeholder: "请输入"
  },
  {
    tag: "radio",
    label: "文理科",
    options: [
      {
        label: "文科",
        value: "liberal"
      },
      {
        label: "理科",
        value: "science"
      }
    ]
  },
  {
    tag: "select",
    label: "意愿地区",
    options: provincesOptions
  },
  /** todo:表单支持自定义内容，这里应该是要传入支持模糊搜索的表单 */
  {
    tag: "select",
    label: "意愿专业",
    options: provincesOptions
  },
  {
    tag: "input",
    label: "MBTI人格",
    placeholder: "请输入"
  }
]

export enum TabItemEnum {
  HighChance = 1,
  ModerateChance,
  LowChance
}

const tabItemMap = {
  [TabItemEnum.HighChance]: "可冲击",
  [TabItemEnum.ModerateChance]: "较稳妥",
  [TabItemEnum.LowChance]: "可保底"
}

export const tabItemOptions = generateMap(tabItemMap)

export const tableColumns = [
  {
    title: "院校名称",
    dataIndex: "schoolName",
    key: "schoolName"
  },
  {
    title: "该院校最低收分线/省排位",
    dataIndex: "schoolAdmission",
    key: "schoolAdmission",
    render: (text: string, record: any) => {
      return `${record.schoolMinScore}/${record.schoolMinRank}`
    }
  },
  {
    title: "意向专业最低收分线/省排位",
    dataIndex: "majorAdmission",
    key: "majorAdmission",
    render: (text: string, record: any) => {
      return `${record.majorMinScore}/${record.majorMinRank}`
    }
  },
  {
    title: "院校意向专业信息",
    dataIndex: "majorInfo",
    key: "majorInfo"
  },
  {
    title: "操作",
    dataIndex: "custom",
    key: "custom",
    render: (record: any) => {
      return (
        <Button
          type="primary"
          onClick={() => {
            handleAddWishList(record.schoolName)
          }}
        >
          +志愿簿
        </Button>
      )
    }
  }
]
