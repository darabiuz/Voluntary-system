/** 登录注册弹窗 */
import React, { FC, useState } from "react"
import { Button, Modal, Form, Tabs } from "antd"
import { ComponentT } from "../../components/help"
import { loginMethodList } from "./constant"
import { LogFormDetail } from "./components"
const AuthModal: FC<ComponentT> = (props) => {
  const { destroy } = props
  const [form] = Form.useForm()
  /** 登录方式 */
  const [logMethod, setLogMethod] = useState<string>("1")

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      // onLogin(values as { username: string; password: string })
      form.resetFields()
    })
  }

  const onCancel = () => {
    if (destroy) {
      destroy()
    }
  }

  const handleSwitch = (activeKey: string) => {
    setLogMethod(activeKey)
  }

  return (
    <Modal
      title="登录"
      onCancel={onCancel}
      open={true}
      width={400}
      footer={[
        <Button key="back" onClick={onCancel}>
          取消
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          登录
        </Button>
      ]}
    >
      <Tabs onChange={handleSwitch} type="card" items={loginMethodList} />
      <LogFormDetail logMethod={logMethod} />
    </Modal>
  )
}

export default AuthModal
