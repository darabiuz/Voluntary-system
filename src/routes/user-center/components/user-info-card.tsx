// src/components/VolunteerForm.tsx
import { UserOutlined } from "@ant-design/icons"
import { userInfoList } from "./constants"
import { Avatar, Col, Descriptions, Typography } from "antd"

import React from "react"
import { MatrixTable } from "@components/martrix"

const info = {
  nickName: 1,
  phone: 2,
  score: 2,
  rank: 3
}
/** 个人信息面板 */
const UserInfoCard: React.FC = () => {
  return (
    <Col span={8}>
      <Avatar size={64} icon={<UserOutlined />} />
      {/* datasource从后端取 */}
      <MatrixTable
        columns={userInfoList}
        dataSource={info}
        style={{ marginTop: "20px" }}
      />
    </Col>
  )
}

export default UserInfoCard
