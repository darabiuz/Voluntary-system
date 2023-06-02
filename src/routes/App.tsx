import { Layout, Menu, Tabs, message } from "antd"
import { UserOutlined } from "@ant-design/icons"
import styles from "./index.module.scss"
import { menuList } from "./constant"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { dialog } from "@components/dialog"
import { LogFormDetail } from "./log/components"
import { useForm } from "antd/es/form/Form"
import { userLogin } from "@safeApi/log-in"
import { errorHandle } from "@help/errorUtils"
const { Header, Content, Footer } = Layout

const DEFAULT_PATH = "home"

function App() {
  /** 点击头像登录 */
  const navigate = useNavigate()
  const location = useLocation()
  const current = location.pathname.slice(1) || DEFAULT_PATH
  const [currentArr, setCurrentArr] = useState<string[] | undefined>([current])
  const [formApi] = useForm()

  const handleLogin = function () {
    const userId = localStorage.getItem("userId")
    if (userId) {
      navigate("userCenter")
      setCurrentArr(undefined)
      return
    }
    // 未登录，调用登录弹窗
    dialog.form({
      title: "登录",
      formApi,
      width: 400,
      form: <LogFormDetail formApi={formApi} />,
      initialValues: { phoneNumber: undefined, vCode: undefined },
      onOk: async (values, destroy) => {
        // 调用api登录
        const flag = Object.keys(values)?.includes("code")
        // login
        const res = await userLogin(
          new URLSearchParams({
            ...values,
            flag
          })
        )
        if (res.code == 1) {
          localStorage.setItem("userId", res?.data?.id)
          document.cookie = `userId=${userId}; path=/ ; Secure; HttpOnly`
          message.success("登录成功")
          navigate("/userCenter")
          setCurrentArr(undefined)
          destroy && destroy()
        }
        errorHandle(null, res?.message)
      }
    })
  }

  return (
    <div className="App">
      <Layout className="layout">
        {/* 首部 */}
        <Header className={styles.header}>
          <Menu
            items={menuList}
            theme="dark"
            mode="horizontal"
            selectedKeys={currentArr}
            onClick={(e) => {
              setCurrentArr([e.key])
              navigate(e.key)
            }}
          />
          <UserOutlined className={styles.signIcon} onClick={handleLogin} />
        </Header>
        {/* 内容 */}
        <Content className={styles.contentWrap}>{<Outlet />}</Content>
        <Footer style={{ textAlign: "center" }}>
          高考志愿填报系统 ©2023 保留所有权利
        </Footer>
      </Layout>
    </div>
  )
}

export default App
