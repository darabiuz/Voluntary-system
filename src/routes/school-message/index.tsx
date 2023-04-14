// src/components/VolunteerForm.tsx
import BlockTitle from "@components/block-title"
import EasyWrapper from "@components/easy-wrapper"
import React, { useEffect, useState } from "react"
import EasyFilter from "./components/easy-filter"
import { data, filterData } from "./constant"
import { Space, List, Button, Divider } from "antd"
import styles from "./index.module.scss"
import { Link } from "react-router-dom"

const SchoolSearch: React.FC = () => {
  /** 筛选对象，默认为全部 */
  const [filters, setFilters] = useState<Filters>({
    province: "全部",
    characteristic: "全部",
    type: "全部"
  })

  /** 院校信息 */
  const [ds, setDs] = useState<any>([])

  const data = [
    {
      title: "西南大学"
      // type:
    },
    {
      title: "四川大学"
    },
    {
      title: "中国海洋大学"
    },
    {
      title: "西南交通大学"
    }
  ]

  const handleFilterChange = (value: string, key: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value
    }))
  }

  useEffect(() => {
    // 获取列表数据，一旦筛选项变化就重新拉
  }, [filters])

  return (
    <EasyWrapper>
      <BlockTitle content={"查学校"} />
      <Space direction="vertical">
        {filterData?.map((filter) => (
          <EasyFilter
            options={filter.options}
            value={filters[filter.key]}
            handleChange={handleFilterChange}
            title={filter.title}
            key={filter.key}
            filterKey={filter.key}
          />
        ))}
      </Space>
      <Divider orientation="left">院校列表</Divider>
      <List
        itemLayout="horizontal"
        dataSource={data}
        pagination={{ position: "bottom", align: "end", pageSize: 3 }}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <Button type="primary">+志愿簿</Button>,
              <Button>查看详情</Button>
            ]}
          >
            <List.Item.Meta
              className={styles.listItem}
              title={
                <Space>
                  <Link to="#" target="_blank" className={styles.title}>
                    {item.title}
                  </Link>
                  <span className={styles.locationSpan}>北京省长安区</span>
                </Space>
              }
              description="985|211"
            />
          </List.Item>
        )}
      />
    </EasyWrapper>
  )
}

export default SchoolSearch

interface Filters {
  [key: string]: string
}
