// import { generateMap } from "../../help"

export const generateMap = (mapInfo: { [key: string]: any }) => {
  if (!mapInfo && !Object.keys(mapInfo).length) return []
  return Object.keys(mapInfo)?.map((item) => ({
    key: item,
    label: mapInfo?.[item]
  }))
}

/** 登录方式选择 */
export enum LoginMethodEnum {
  vCode = 1,
  passWord
}
export const LoginMethodMap = {
  [LoginMethodEnum.vCode]: "验证码登录",
  [LoginMethodEnum.passWord]: "密码登录"
}
export const loginMethodList = generateMap(LoginMethodMap)
