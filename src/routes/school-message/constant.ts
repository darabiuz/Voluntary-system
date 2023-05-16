import { provinces, types } from "@routes/constant"

const featuresOptions = [
  {
    label: "全部",
    value: 0
  },
  {
    label: "双一流",
    value: 3
  },
  {
    label: "985",
    value: 1
  },
  {
    label: "211",
    value: 2
  }
]

const type = types.slice()
type.unshift("全部")
const typeOptions = type?.map((item) => {
  return { value: item, label: item }
})

const province = provinces.slice()
province.unshift("全部")
const provinceOptions = province?.map((item) => {
  return { value: item, label: item }
})

// 筛选院校列表
export const filterData = [
  { title: "所属地区", options: provinceOptions, key: "province" },
  { title: "办学特色", options: featuresOptions, key: "feature" },
  { title: "办学类型", options: typeOptions, key: "type" }
]

export const data = []
