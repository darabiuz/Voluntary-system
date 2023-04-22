import React, { useEffect } from "react"
import styles from "./index.module.scss"
import { Link, useParams } from "react-router-dom"
import { fetchMajorDetails } from "@safeApi/majors"
import { Button, List, Space } from "antd"
import EasyWrapper from "@components/easy-wrapper"
import BlockTitle from "@components/block-title"

const data = [
  {
    title: "西南大学",
    min: 777,
    minRank: 1111
  }
]

export const MajorsDetails: React.FC = () => {
  const param = useParams()
  useEffect(() => {
    const majorId = param?.majorId
    console.log(majorId)
    //   todo:发送请求查询
    // fetchMajorDetails({ majorId })
  }, [])

  return (
    <EasyWrapper>
      {/* 现在需要一个界面，用于展示某专业所拥有的开设院校，请帮我用代码实现，界面内容为
      1. 顶部标题：表示当前专业名称 2. 开设院校列表： 2.1
      每列标题：院校名称，点击后可查看院校详情 2.2
      标题description：院校特色，院校类型，是否为985/211 2.3
      每列最右侧：该院校对于该专业的最低收分线/最低省排位 3.
      分页，默认每页最多展示3条数据 */}
      <BlockTitle content={param.majorName} />
      <List
        itemLayout="horizontal"
        dataSource={data}
        pagination={{ position: "bottom", align: "end", pageSize: 3 }}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <span>最低分/最低位次</span>,
              <span>{`${item.min}/${item.minRank}`}</span>
            ]}
          >
            <List.Item.Meta
              className={styles.listItem}
              title={
                <Link to="#" target="_blank" className={styles.title}>
                  {item.title}
                </Link>
              }
              description="985|211"
            />
          </List.Item>
        )}
      />
    </EasyWrapper>
  )
}
