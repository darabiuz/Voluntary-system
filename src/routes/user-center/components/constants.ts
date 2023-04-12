import { generateMap } from "@help/index"

export enum UserInfoEnum {
  NickName = "nickName",
  Phone = "phone",
  Score = "score",
  Rank = "rank"
}
export const userInfoMap = {
  [UserInfoEnum.NickName]: "昵称",
  [UserInfoEnum.Phone]: "电话",
  [UserInfoEnum.Score]: "高考分数",
  [UserInfoEnum.Rank]: "地区排名"
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

export const tableColumns = [
  {
    title: "志愿专业",
    key: "project"
  },
  {
    title: "去年最低收分线",
    key: "minScore"
  },
  {
    title: "去年最低排名",
    key: "minRank"
  }
]
