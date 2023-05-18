import { EasySearch } from "@components/easy-search/easy-search"
import { Button, Card, Form, Input, Space, Table, Tabs, message } from "antd"
import { FC, useEffect, useState } from "react"
import styles from "../index.module.scss"
import {
  mbtiList,
  mbtiSearchColumns,
  mbtiTableColumns,
  searchColumns,
  tabItemOptions,
  tableColumns
} from "../constant"
import { useForm } from "antd/es/form/Form"
import { getMajorResultForMbti } from "@safeApi/predict"

/** 根据用户输入的mbti推荐合适的mbti
 * 1. 用户输入mbti人格
 * 2. 右侧展示信息：人格，类型全称，人格昵称，人格，性格特点，推荐专业（超过10个就省略号）
 */

const MbtiRecommendCard: FC = () => {
  const [formApi] = useForm()
  const [dataSource, setDataSource] = useState<any>([])
  const handleSubmit = async () => {
    const mbti = formApi.getFieldValue("mbtiName")
    if (mbti && !mbtiList.includes(String(mbti).toUpperCase())) {
      message.warning("该人格不存在")
    }
    const res = await getMajorResultForMbti({ mbti })
    setDataSource([res])
  }

  return (
    <>
      <Space align={"start"} size={30}>
        <Card
          title="测试你所适合的专业"
          bordered={false}
          style={{ width: 350 }}
        >
          <EasySearch formApi={formApi} columns={mbtiSearchColumns} />
          <Button
            type="primary"
            onClick={handleSubmit}
            style={{ float: "right" }}
          >
            一键分析
          </Button>
        </Card>
        <div className={styles.list}>
          <Table
            dataSource={dataSource}
            pagination={false}
            columns={mbtiTableColumns}
            scroll={{ x: "max-content" }}
            rowKey="schoolId"
            locale={{ emptyText: "暂无数据，请输入您的mbti进行一键分析" }}
          />
        </div>
      </Space>
    </>
  )
}
export default MbtiRecommendCard
