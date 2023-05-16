import { post } from ".."

/** 获取手机验证码api */
export const sendMobileVerificationCode = (body: any) => {
  return post("api/auth/verification_code", body)
}

/** 用户验证码：密码登录 */
export const userLogin = (body: any) => {
  return post("api/auth/login", body, {
    body: body.toString(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
}
