import { FC, useEffect, useState } from "react"
import { Button, Form, FormInstance, Input, Space, Tabs, message } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { LoginMethodEnum, loginMethodList } from "./constant"
import Password from "antd/es/input/Password"
import { sendMobileVerificationCode } from "@safeApi/log-in"
import { errorHandle } from "@help/errorUtils"
const FormItem = Form.Item

const WAIT_MAX = 60
const WAIT_MIN = 1

const formItemProps = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
  rules: [{ required: true, message: "请输入" }]
}

export const LogFormDetail: FC<{ formApi: FormInstance<any> }> = ({
  formApi
}) => {
  /** 用户是否已获取验证码 */
  const [isCodeObtained, setIsCodeObtained] = useState<boolean>(true)
  const [buttonText, setButtonText] = useState<string>("发送验证码")
  const [logMethod, setLogMethod] = useState<string>("1")
  const isPassWord = Number(logMethod) === LoginMethodEnum.passWord

  /** 切换登录方式 */
  const handleSwitch = (activeKey: string) => {
    setLogMethod(activeKey)
  }

  useEffect(() => {
    // form.setFieldValue("phoneNumber", null)
    // form.setFieldValue("vCode", null)
  }, [logMethod])

  const validatePhone = (_: any, value: any) => {
    const isValidPhone = /^1\d{10}$/.test(value)
    if (!isValidPhone && value) {
      return Promise.reject(new Error("请输入有效的手机号"))
    }
    return Promise.resolve()
  }

  const handleClick = async () => {
    //   发送api，传递pn，调用短信api
    //   ......
    //   下面的应该都是在then方法里的
    const phone = formApi.getFieldValue("phone")
    const isValidPhone = /^1\d{10}$/.test(phone)
    if (!isValidPhone) {
      message.warning("请输入有效的手机号")
      return
    }
    // 调用api查询验证码是否发送成功
    try {
      await sendMobileVerificationCode({ phone })
      setIsCodeObtained(false)
      setButtonText(`${WAIT_MAX}秒`)
      // 启动倒计时
      let due = WAIT_MAX - 1
      const timer = setInterval(() => {
        if (due < WAIT_MIN) {
          setIsCodeObtained(true)
          setButtonText("发送验证码")
          clearInterval(timer)
          return
        }
        setButtonText(`${due}秒`)
        due = due - 1
      }, 1000)
    } catch (e) {
      errorHandle(e)
    }
  }
  useEffect(() => {})

  return (
    <div>
      <Tabs onChange={handleSwitch} type="card" items={loginMethodList} />
      <FormItem
        name="phone"
        label="手机号"
        {...formItemProps}
        rules={[
          { required: true, message: "请输入" },
          { validator: validatePhone }
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="手机号码" />
      </FormItem>
      {!isPassWord && (
        <FormItem name="code" label="验证码" {...formItemProps}>
          <Space>
            <Password
              prefix={<LockOutlined />}
              type="vCode"
              placeholder={"验证码"}
              disabled={isCodeObtained}
            />
            <Button
              onClick={handleClick}
              disabled={!isCodeObtained}
              type="primary"
              size={"small"}
            >
              {buttonText}
            </Button>
          </Space>
        </FormItem>
      )}
      {isPassWord && (
        <FormItem name="password" label="密码" {...formItemProps}>
          <Password prefix={<LockOutlined />} type="vCode" placeholder="密码" />
        </FormItem>
      )}
    </div>
  )
}
