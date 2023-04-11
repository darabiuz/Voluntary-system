// src/components/VolunteerForm.tsx
import { UserOutlined } from "@ant-design/icons"
import { userInfoList } from "./constants"
import { Avatar, Col, Descriptions, Typography } from "antd"

import React from "react"

/** 个人信息面板 */
const UserInfoCard: React.FC = () => {
  return (
    <Col span={8}>
      <Avatar size={64} icon={<UserOutlined />} />
      <Descriptions column={1} style={{ marginTop: "20px" }}>
        {/* 这里需要从后端取，包含label和value */}
        {userInfoList?.map((item) => {
          return (
            <Descriptions.Item label={item.label} key={item.key}>
              {item?.key}
            </Descriptions.Item>
          )
        })}
      </Descriptions>
    </Col>
  )
}

export default UserInfoCard
