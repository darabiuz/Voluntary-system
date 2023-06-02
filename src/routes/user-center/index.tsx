// src/components/VolunteerForm.tsx
import React, { useEffect, useState } from "react"
import { Layout, Menu, Row, Collapse, Typography } from "antd"
import EasyWrapper from "@components/easy-wrapper"
import BlockTitle from "@components/block-title"
import { UserOutlined, EditOutlined, LockOutlined } from "@ant-design/icons"
import { menuList } from "./constant"
import UserProfile from "./components/user_profile"
import EditProfile from "./components/edit_profile"
const { Content, Sider } = Layout

const UserCenter = () => {
  const [currentArr, setCurrentArr] = useState(["1"])
  const [current, setCurrent] = useState("1")

  return (
    <EasyWrapper>
      <BlockTitle content={"个人中心"} />
      <Layout style={{ minHeight: "100vh" }}>
        <Sider width={200} theme="light">
          <Menu
            items={menuList}
            theme="light"
            mode="inline"
            selectedKeys={currentArr}
            onClick={(e) => {
              setCurrentArr([e.key])
              setCurrent(e.key)
            }}
          />
        </Sider>
        <Content>
          <div style={{ padding: "0 0 0 30px", minHeight: 360 }}>
            {current === "1" && <UserProfile />}
            {current === "2" && <EditProfile />}
          </div>
        </Content>
      </Layout>
    </EasyWrapper>
  )
}

export default UserCenter
