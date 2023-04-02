import { ItemType } from "antd/es/menu/hooks/useItems"

export const menuList = [
  { label: "首页", key: "home" },
  { label: "查学校", key: "schoolSearch" },
  { label: "查专业", key: "majorsSearch" },
  { label: "智能预测填报", key: "AIPrediction" },
  { label: "我的志愿簿", key: "wishlist" },
  { label: "关于我们", key: "aboutAs" }
] as ItemType[]

export const guideList = [
  {
    title: "查询学校",
    description: "根据您的兴趣和高考成绩查询适合您的学校",
    buttonText: "开始查询"
  },
  {
    title: "查询专业",
    description: "根据您的兴趣和高考成绩查询适合您的专业",
    buttonText: "开始查询"
  },
  {
    title: "智能填报",
    description: "在我们的系统中方便地完成您的高考志愿填报。",
    buttonText: "开始填报"
  },
  {
    title: "获取帮助",
    description: "需要帮助？查看我们的帮助文档或联系我们的客服团队。",
    buttonText: "联系我们"
  }
]
