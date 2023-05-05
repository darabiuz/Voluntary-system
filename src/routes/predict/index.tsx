import React, { useState } from "react"
import {
  Layout,
  Input,
  Radio,
  Select,
  Tabs,
  List,
  Tag,
  Button,
  Descriptions,
  Card,
  Space,
  Table
} from "antd"
import { EasySearch } from "@components/easy-search/easy-search"
import { searchColumns, tabItemOptions, tableColumns } from "./constant"
import EasyWrapper from "@components/easy-wrapper"
import BlockTitle from "@components/block-title"
import styles from "./index.module.scss"

const { Sider, Content } = Layout
const { TabPane } = Tabs
const { Option } = Select

const VolunteerPrediction: React.FC = () => {
  // State for form inputs
  const [tabItem, setTabItem] = useState(1)
  const [score, setScore] = useState("")
  const [rank, setRank] = useState("")
  const [subject, setSubject] = useState("")
  const [region, setRegion] = useState("")
  const [major, setMajor] = useState("")

  // Mock data for recommendation list
  const mockData = [
    {
      id: 1,
      name: "北京大学",
      category: "双一流",
      is985: true,
      score: "650",
      rank: "1000",
      majorStrength: "王牌"
    }
    // ...
  ]

  // Handle form submissions here
  const handleSubmit = () => {
    // ...
  }

  return (
    <EasyWrapper>
      <BlockTitle content="智能预测填报" />
      <Space align={"start"} size={30}>
        <Card title="信息收集" bordered={false} style={{ width: 350 }}>
          <EasySearch columns={searchColumns} />
          <Button
            type="primary"
            onClick={handleSubmit}
            style={{ float: "right" }}
          >
            一键分析
          </Button>
        </Card>
        <div className={styles.list}>
          <Tabs
            defaultActiveKey="1"
            items={tabItemOptions}
            onChange={(value) => {
              setTabItem(Number(value))
            }}
          />
          <Table
            dataSource={[
              {
                majorInfo: "111"
              }
            ]}
            columns={tableColumns}
            scroll={{ x: "max-content" }}
            pagination={{ pageSize: 5 }}
            rowKey="schoolId"
          />
        </div>
      </Space>
    </EasyWrapper>
  )
}

export default VolunteerPrediction
