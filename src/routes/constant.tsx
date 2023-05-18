import { ItemType } from "antd/es/menu/hooks/useItems"
/** 菜单项 */

export const menuList = [
  { label: "首页", key: "home" },
  { label: "查学校", key: "schoolSearch" },
  { label: "查专业", key: "majorsSearch" },
  { label: "查排名", key: "rankSearch" },
  { label: "智能预测填报", key: "volunteerPrediction" },
  { label: "我的志愿簿", key: "wishlist" }
] as ItemType[]

export const types = [
  "理工类",
  "综合类",
  "师范类",
  "医药类",
  "农林类",
  "财经类",
  "政法类",
  "语言类",
  "民族类",
  "体育类",
  "军事类",
  "艺术类",
  "其他"
]

export const provinces = [
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

export const typesOptions = types?.map((item) => ({
  value: item,
  label: item
}))

export const initPageInfo = {
  pageSize: 5,
  pageCurrent: 1
}
