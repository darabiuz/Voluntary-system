// src/components/VolunteerForm.tsx
import { UserOutlined } from "@ant-design/icons"
import { userInfoList } from "./constants"
import { Avatar, Col } from "antd"

import React, { useState } from "react"
import { MatrixTable } from "@components/martrix"
import bg from "../../../assets/home-bg-2.jpg"

const info = {
  nickName: "darabiuz",
  phone: "178****0756",
  score: 600,
  rank: 27670
}
/** 个人信息面板 */
const UserProfile: React.FC = () => {
  const dataSource = useState()
  return (
    <Col span={8}>
      <Avatar size={64} icon={<UserOutlined />} src={bg} />
      <MatrixTable
        columns={userInfoList}
        dataSource={info}
        column={2}
        style={{ marginTop: "20px" }}
      />
    </Col>
  )
}

export default UserProfile
