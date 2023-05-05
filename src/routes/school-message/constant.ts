export const provinces = [
  "全部",
  "北京",
  "上海",
  "天津",
  "重庆",
  "河北",
  "山西",
  "辽宁",
  "吉林",
  "黑龙江",
  "江苏",
  "浙江",
  "安徽",
  "福建",
  "江西",
  "山东",
  "河南",
  "湖北",
  "湖南",
  "广东",
  "海南",
  "四川",
  "贵州",
  "云南",
  "陕西",
  "甘肃",
  "青海"
]

export const provincesOptions = provinces?.map((item) => ({
  value: item,
  label: item
}))

export const characteristics = ["全部", "985", "211", "双一流"]

export const types = [
  "全部",
  "综合",
  "理工",
  "农林",
  "医药",
  "师范",
  "语言",
  "财经",
  "政法",
  "体育",
  "艺术",
  "民族",
  "军事",
  "其他"
]

export const typesOptions = types?.map((item) => ({
  value: item,
  label: item
}))

export const filterData = [
  { title: "所属地区", options: provinces, key: "province" },
  { title: "办学特色", options: characteristics, key: "characteristic" },
  { title: "办学类型", options: types, key: "type" }
]

export const data = [
  {
    title: "Ant Design Title 1"
  },
  {
    title: "Ant Design Title 2"
  },
  {
    title: "Ant Design Title 3"
  },
  {
    title: "Ant Design Title 4"
  }
]
