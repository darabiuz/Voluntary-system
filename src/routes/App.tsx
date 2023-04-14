import { Layout, Menu } from "antd"
import { UserOutlined } from "@ant-design/icons"
import styles from "./index.module.scss"
import { menuList } from "./constant"
import { showComponents } from "@components/help"
import AuthModal from "./log/log-in"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
const { Header, Content, Footer } = Layout

const DEFAULT_PATH = "HOME"

function App() {
  /** 点击头像登录 */
  const navigate = useNavigate()
  const location = useLocation()
  const current = location.pathname.slice(1) || DEFAULT_PATH
  const [currentArr, setCurrentArr] = useState<string[] | undefined>([current])

  const handleLogin = function () {
    const userId = localStorage.getItem("userId")
    if (!userId) {
      navigate("userCenter")
      setCurrentArr(undefined)
      return
    }
    showComponents({ Component: AuthModal })
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
