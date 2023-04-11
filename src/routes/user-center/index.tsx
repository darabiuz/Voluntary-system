// src/components/VolunteerForm.tsx
import React from "react"
import { Layout, Row, Collapse, Typography } from "antd"
import styles from "./index.module.scss"
import UserInfoCard from "./components/user-info-card"
import SchoolList from "./components/school-list"
const { Content } = Layout
const { Title } = Typography

const UserCenter = () => {
  return (
    <div className={styles.contentWrap}>
      <Title level={2} className={styles.title}>
        个人中心
      </Title>
      <Content>
        <Row>
          <UserInfoCard />
          <SchoolList />
        </Row>
      </Content>
    </div>
  )
}

export default UserCenter
