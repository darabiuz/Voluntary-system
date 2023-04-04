import { post } from ".."

/** 获取手机验证码api */
export const getMobileVerificationCode = (body: any) => {
  return post("/api/auth/vCode", body)
}
