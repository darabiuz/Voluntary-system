import { FC, useEffect, useState } from "react"
import { Button, Form, Input, Space } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { LoginMethodEnum } from "./constant"
import Password from "antd/es/input/Password"
const FormItem = Form.Item

const WAIT_MAX = 60
const WAIT_MIN = 1
export const LogFormDetail: FC<{ logMethod: string }> = ({ logMethod }) => {
  /** 用户是否已获取验证码 */
  const [isCodeObtained, setIsCodeObtained] = useState<boolean>(true)
  const [buttonText, setButtonText] = useState<string>("发送验证码")
  const isPassWord = Number(logMethod) === LoginMethodEnum.passWord

  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldValue("phoneNumber", null)
    form.setFieldValue("vCode", null)
  }, [logMethod])

  const validatePhone = (_: any, value: any) => {
    // 检查手机号是否合法
    const isValidPhone = /^1\d{10}$/.test(value)
    if (!isValidPhone && form.getFieldValue("phoneNumber")) {
      return Promise.reject(new Error("请输入有效的中国手机号"))
    } else {
      return Promise.resolve()
    }
  }

  const handleClick = () => {
    //   发送api，传递pn，调用短信api
    //   ......
    //   下面的应该都是在then方法里的
    setIsCodeObtained(false)
    setButtonText(`${WAIT_MAX}秒`)
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
  }
  useEffect(() => {})
  return (
    <>
      <Form
        form={form}
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
      >
        <FormItem
          name="phoneNumber"
          rules={[
            { required: true, message: "请输入" },
            { validator: validatePhone }
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            style={{ width: "calc(100%-120px)" }}
            placeholder="手机号码"
          />
        </FormItem>
        <FormItem name="vCode" rules={[{ required: true, message: "请输入" }]}>
          <Password
            prefix={<LockOutlined />}
            type="vCode"
            placeholder={isPassWord ? "密码" : "验证码"}
            disabled={!isPassWord && isCodeObtained}
            suffix={
              !isPassWord && (
                <Button
                  onClick={handleClick}
                  disabled={!isCodeObtained}
                  type="text"
                  size={"small"}
                >
                  {buttonText}
                </Button>
              )
            }
          />
        </FormItem>
      </Form>
    </>
  )
}
