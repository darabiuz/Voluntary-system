// src/components/VolunteerForm.tsx
import { UserOutlined } from "@ant-design/icons"
import { userInfoList } from "./constants"
import { Avatar, Button, Col } from "antd"

import React, { useState } from "react"
import { MatrixTable } from "@components/martrix"
import bg from "../../../assets/home-bg-2.jpg"
import { EasySearch } from "@components/easy-search/easy-search"
import { searchColumns } from "../constant"

const info = {
  nickName: "darabiuz",
  phone: "178****0756",
  score: 600,
  rank: 27670
}
const EditProfile = () => (
  <div>
    <h3>个人信息修改</h3>
    <div style={{ width: "300px" }}>
      <EasySearch columns={searchColumns} />
    </div>
    <Button type="primary" style={{ marginLeft: "240px" }}>
      提交
    </Button>
  </div>
)

export default EditProfile
