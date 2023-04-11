import { generateMap } from "@help/index"

export enum UserInfoEnum {
  NickName = 1,
  Phone,
  Score,
  Rank
}
export const userInfoMap = {
  [UserInfoEnum.NickName]: "昵称",
  [UserInfoEnum.Phone]: "电话",
  [UserInfoEnum.Score]: "高考分数",
  [UserInfoEnum.Rank]: "地区排名"
}
export enum WishListEnum {
  Type,
  Position,
  Project,
  Rank,
  Probability
}
export const wishListMap = {
  [WishListEnum.Type]: "办学特色",
  [WishListEnum.Position]: "地理位置",
  [WishListEnum.Project]: "专业",
  [WishListEnum.Probability]: "上岸概率"
}

export const userInfoList = generateMap(userInfoMap)

export const matrixColumns = [
  {
    label: "办学特色",
    key: "type"
  },
  {
    label: "地理位置",
    key: "location"
  },
  {
    label: "志愿专业",
    key: "majors"
  },
  {
    label: "上岸概率",
    key: "admissionProbability"
  }
]
