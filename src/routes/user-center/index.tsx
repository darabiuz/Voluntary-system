// src/components/VolunteerForm.tsx
import React from "react"
import { Layout, Row, Collapse, Typography } from "antd"
import styles from "./index.module.scss"
import UserInfoCard from "./components/user-info-card"
import EasyWrapper from "@components/easy-wrapper"
import BlockTitle from "@components/block-title"
const { Content } = Layout

const UserCenter = () => {
  return (
    <EasyWrapper>
      <BlockTitle content={"个人中心"} />
      <Content>
        <Row>
          <UserInfoCard />
        </Row>
      </Content>
    </EasyWrapper>
  )
}

export default UserCenter
