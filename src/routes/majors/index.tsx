import BlockTitle from "@components/block-title"
import EasyWrapper from "@components/easy-wrapper"
import React, { useState } from "react"
import { Space, List, Button, Divider, Form, AutoComplete, Input } from "antd"
import styles from "./index.module.scss"
import { SearchOutlined } from "@ant-design/icons"

const data = [
  {
    majorName: "计算机科学与技术",
    code: "080901",
    degree: "学士",
    genderRatio: "7:3",
    studyDuration: "4年"
  }
  // ... 其他专业数据
]

const MajorsSearch: React.FC = () => {
  const [options, setOptions] = useState<{ value: string }[]>([])
  const handleRelatedSchools = (majorId: string, majorName: string) => {
    window.open(`majorsSearch/${majorId}/${majorName}`)
  }

  const onSelect = (value: string) => {
    console.log("选中的专业是:", value)
    // 在这里处理选择专业后的逻辑,调用搜索
  }

  const fetchMajors = async (query: string) => {
    // 调用后端 API，根据输入的查询条件获取匹配的专业列表
    // 这里替换为您的实际 API 请求代码
    const response = await fetch(`/api/majors?query=${query}`)
    const data = await response.json()
    return data
  }
  const handleSearch = async (value: string) => {
    if (value) {
      const majorList = await fetchMajors(value)
      setOptions(majorList.map((major: string) => ({ value: major })))
    } else {
      setOptions([])
    }
  }

  return (
    <EasyWrapper>
      <BlockTitle content={"查专业"} />
      <Divider orientation="left">专业列表</Divider>
      <Form>
        <Form.Item label="查询专业" style={{ width: "300px" }}>
          <Space.Compact block>
            <AutoComplete
              options={options}
              onSelect={onSelect}
              onSearch={handleSearch}
              filterOption={false}
              placeholder="请输入专业"
            />
            <Button type="primary" icon={<SearchOutlined />} />
          </Space.Compact>
        </Form.Item>
      </Form>
      <List
        itemLayout="horizontal"
        dataSource={data}
        pagination={{ position: "bottom", align: "end", pageSize: 3 }}
        renderItem={(item) => (
          <List.Item
            key={item.code}
            actions={[
              <Button
                type="primary"
                onClick={() => {
                  handleRelatedSchools(item.code, item.majorName)
                }}
              >
                开设院校详情
              </Button>
            ]}
          >
            <List.Item.Meta
              className={styles.listItem}
              title={
                <Space>
                  <span className={styles.title}>{item.majorName}</span>
                  <span className={styles.title}>{item.code}</span>
                </Space>
              }
              description={
                <Space>
                  <span>{item.degree}</span>
                  <span>男女比例：{item.genderRatio}</span>
                  <span>学制：{item.studyDuration}</span>
                </Space>
              }
            />
          </List.Item>
        )}
      />
    </EasyWrapper>
  )
}

export default MajorsSearch
