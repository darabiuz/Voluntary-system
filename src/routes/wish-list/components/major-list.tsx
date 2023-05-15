import { LockOutlined, MonitorOutlined } from "@ant-design/icons"
import { Button, List, Space, Table } from "antd"
import React from "react"

/** 志愿专业列表 */
const MajorList: React.FC<{ data: any }> = ({ data }) => {
  console.log(data)
  return (
    <List
      bordered
      dataSource={data}
      size="small"
      renderItem={(item: any) => {
        return (
          <List.Item>
            <Space>
              <List.Item>{item}</List.Item>
              <Button type="text" size="middle" icon={<MonitorOutlined />}>
                <span style={{ color: "rgba(22, 119, 155, 1)" }}>
                  专业上岸概率
                </span>
              </Button>
            </Space>
          </List.Item>
        )
      }}
    />
  )
}

export default MajorList
