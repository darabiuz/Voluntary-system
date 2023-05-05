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
