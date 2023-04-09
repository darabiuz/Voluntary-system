import { ItemType } from "antd/es/menu/hooks/useItems"
/** 菜单项 */

export const menuList = [
  { label: "首页", key: "home" },
  { label: "查学校", key: "schoolSearch" },
  { label: "查专业", key: "majorsSearch" },
  { label: "查排名", key: "rankSearch" },
  { label: "智能预测填报", key: "AIPrediction" },
  { label: "我的志愿簿", key: "wishlist" },
  { label: "关于我们", key: "aboutAs" }
] as ItemType[]
