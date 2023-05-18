import React, { useState, useEffect } from "react"
import { Table, Select, Input, Button, Space, Form, Tabs } from "antd"
import { SorterResult } from "antd/lib/table/interface"
import { columns, rankTypeEnum, tabItems } from "./constant"
import EasyWrapper from "@components/easy-wrapper"
import BlockTitle from "@components/block-title"
import { SchoolRank } from "./components/school-rank"
import { MajorRank } from "./components/major-rank"

const RankSearch = () => {
  const [rankType, setRankType] = useState(1)

  useEffect(() => {
    // 在这里发送请求，获取后端数据
    // fetchTableData();
  }, [])

  return (
    <EasyWrapper>
      <BlockTitle content={"查排名"} />
      <Tabs
        defaultActiveKey="1"
        items={tabItems}
        onChange={(value) => {
          setRankType(Number(value))
        }}
      />
      {rankType === rankTypeEnum.School && <SchoolRank />}
    </EasyWrapper>
  )
}

export default RankSearch
