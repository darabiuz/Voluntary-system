import React, { useState, useEffect } from "react"
import { Form, Table } from "antd"
import { columns, searchColumns } from "./constant"
import EasyWrapper from "@components/easy-wrapper"
import BlockTitle from "@components/block-title"
import { initPageInfo } from "@routes/constant"
import { getSchoolRankList } from "@safeApi/rank"
import { EasySearch } from "@components/easy-search/easy-search"
import { filterEmptyValues } from "@help/formatUtils"
const RankSearch = () => {
  const [formApi] = Form.useForm()
  const [pageInfo, setPageInfo] = useState<PageInfoType>(initPageInfo)
  const [total, setTotal] = useState<any>(0)
  const [filteredData, setFilteredData] = useState([])

  const handlePageChange = (page: number, pageSize: number) => {
    setPageInfo({
      pageCurrent: page,
      pageSize: pageSize
    })
  }

  const getData = async () => {
    const values = formApi.getFieldsValue()
    const res = await getSchoolRankList(
      new URLSearchParams(
        filterEmptyValues({
          ...pageInfo,
          ...values
        })
      )
    )
    setFilteredData(res?.data?.list)
    setTotal(res?.data?.total)
  }

  const handleValuesChange = async (v: any) => {
    setPageInfo((prev) => ({ ...prev, pageCurrent: 1 }))
    getData()
  }

  useEffect(() => {
    getData()
  }, [pageInfo])

  return (
    <EasyWrapper>
      <BlockTitle content={"查排名"} />
      <div style={{ width: "300px" }}>
        <EasySearch
          columns={searchColumns}
          formApi={formApi}
          onValuesChange={handleValuesChange}
        />
      </div>
      <Table
        pagination={{
          pageSize: pageInfo.pageSize,
          current: pageInfo.pageCurrent,
          total,
          onChange: handlePageChange,
          pageSizeOptions: ["5", "10", "20", "50"]
        }}
        dataSource={filteredData}
        columns={columns}
        scroll={{ x: "max-content" }}
        rowKey="id"
      />
    </EasyWrapper>
  )
}

export default RankSearch

interface PageInfoType {
  pageSize: number
  pageCurrent: number
}
