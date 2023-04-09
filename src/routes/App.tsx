import { Layout, Menu } from "antd"
import { UserOutlined } from "@ant-design/icons"
import styles from "./index.module.scss"
import { menuList } from "./constant"
import { showComponents } from "../components/help"
import AuthModal from "./log/log-in"
import { Outlet, useNavigate } from "react-router-dom"
import { useState } from "react"
const { Header, Content, Footer } = Layout

function App() {
  /** 点击头像登录 */
  const handleLogin = function () {
    showComponents({ Component: AuthModal })
  }
  const navigate = useNavigate()
  const [current, setCurrent] = useState("home")

  return (
    <div className="App">
      <Layout className="layout">
        {/* 首部 */}
        <Header className={styles.header}>
          <Menu
            items={menuList}
            theme="dark"
            mode="horizontal"
            selectedKeys={[current]}
            onClick={(e) => {
              setCurrent(e.key)
              navigate(e.key)
            }}
            style={{
              marginLeft: "50px"
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
